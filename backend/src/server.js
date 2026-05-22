const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

require("dotenv").config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Shape Prime Backend Online" });
});

function gerarToken(usuario) {
  return jwt.sign(
    {
      id: usuario.id,
      email: usuario.email,
    },
    process.env.JWT_SECRET || "prime_shape_secret",
    {
      expiresIn: "7d",
    }
  );
}

app.post("/auth/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        ok: false,
        message: "Informe email e senha.",
      });
    }

    const usuario = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        message: "Email ou senha inválidos.",
      });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(400).json({
        ok: false,
        message: "Email ou senha inválidos.",
      });
    }

    if (!usuario.acessoLiberado) {
      return res.status(403).json({
        ok: false,
        message: "Seu acesso ainda não foi liberado.",
      });
    }

    const token = gerarToken(usuario);

    res.json({
      ok: true,
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        plano: usuario.plano,
        acessoLiberado: usuario.acessoLiberado,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      message: "Erro ao fazer login.",
    });
  }
});

function autenticar(req, res, next) {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({
      ok: false,
      message: "Token não enviado.",
    });
  }

  const token = auth.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "prime_shape_secret"
    );

    req.usuarioId = decoded.id;
    next();
  } catch {
    return res.status(401).json({
      ok: false,
      message: "Token inválido.",
    });
  }
}

app.get("/auth/me", autenticar, async (req, res) => {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: req.usuarioId,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        plano: true,
        acessoLiberado: true,
      },
    });

    res.json({
      ok: true,
      usuario,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      message: "Erro ao buscar usuário.",
    });
  }
});

app.post("/auth/alterar-senha", autenticar, async (req, res) => {
  try {
    const { senhaAtual, novaSenha } = req.body;

    if (!senhaAtual || !novaSenha) {
      return res.status(400).json({
        ok: false,
        message: "Informe a senha atual e a nova senha.",
      });
    }

    if (novaSenha.length < 6) {
      return res.status(400).json({
        ok: false,
        message: "A nova senha precisa ter pelo menos 6 caracteres.",
      });
    }

    const usuario = await prisma.usuario.findUnique({
      where: { id: req.usuarioId },
    });

    if (!usuario) {
      return res.status(404).json({
        ok: false,
        message: "Usuário não encontrado.",
      });
    }

    const senhaCorreta = await bcrypt.compare(senhaAtual, usuario.senha);

    if (!senhaCorreta) {
      return res.status(400).json({
        ok: false,
        message: "Senha atual incorreta.",
      });
    }

    const novaSenhaHash = await bcrypt.hash(novaSenha, 10);

    await prisma.usuario.update({
      where: { id: usuario.id },
      data: {
        senha: novaSenhaHash,
      },
    });

    res.json({
      ok: true,
      message: "Senha alterada com sucesso.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      message: "Erro ao alterar senha.",
    });
  }
});

app.post("/webhook/kiwify", async (req, res) => {
  try {
    const body = req.body;

    console.log("📩 Webhook Kiwify recebido:", JSON.stringify(body, null, 2));

    const evento =
      body?.webhook_event_type ||
      body?.event ||
      body?.trigger ||
      body?.type ||
      body?.status;

    const status =
      body?.order_status ||
      body?.status ||
      body?.order?.status ||
      body?.purchase?.status ||
      body?.data?.status;

    const email =
      body?.Customer?.email ||
      body?.customer?.email ||
      body?.client?.email ||
      body?.buyer?.email ||
      body?.order?.customer?.email ||
      body?.data?.customer?.email ||
      body?.email;

    const nome =
      body?.Customer?.full_name ||
      body?.Customer?.name ||
      body?.customer?.full_name ||
      body?.customer?.name ||
      body?.client?.name ||
      body?.buyer?.name ||
      body?.order?.customer?.name ||
      body?.data?.customer?.name ||
      "Aluno Shape Prime";

    const compraAprovada =
      evento === "compra_aprovada" ||
      evento === "order_approved" ||
      evento === "purchase_approved" ||
      status === "paid" ||
      status === "approved" ||
      status === "aprovado" ||
      status === "aprovada";

    if (!compraAprovada) {
      console.log("ℹ️ Webhook ignorado. Evento/status:", evento, status);
      return res.status(200).json({
        ok: true,
        message: "Evento ignorado.",
      });
    }

    if (!email) {
      console.log("⚠️ Webhook aprovado, mas sem email.");
      return res.status(200).json({
        ok: false,
        message: "Email não encontrado no webhook.",
      });
    }

    const emailNormalizado = String(email).trim().toLowerCase();
    const senhaPadrao = "123456";
    const senhaHash = await bcrypt.hash(senhaPadrao, 10);

    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email: emailNormalizado },
    });

    if (usuarioExistente) {
      const usuarioAtualizado = await prisma.usuario.update({
        where: { email: emailNormalizado },
        data: {
          nome: nome || usuarioExistente.nome,
          plano: "metodo",
          acessoLiberado: true,
        },
        select: {
          id: true,
          nome: true,
          email: true,
          plano: true,
          acessoLiberado: true,
        },
      });

      console.log("✅ Usuário já existia. Acesso liberado:", usuarioAtualizado);

      return res.status(200).json({
        ok: true,
        message: "Usuário já existia. Acesso liberado.",
        usuario: usuarioAtualizado,
        login: {
          email: emailNormalizado,
          senha: senhaPadrao,
        },
      });
    }

    const novoUsuario = await prisma.usuario.create({
      data: {
        nome: nome || "Aluno Shape Prime",
        email: emailNormalizado,
        senha: senhaHash,
        plano: "metodo",
        acessoLiberado: true,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        plano: true,
        acessoLiberado: true,
      },
    });

    console.log("✅ Novo aluno criado pela Kiwify:", novoUsuario);

    return res.status(200).json({
      ok: true,
      message: "Aluno criado e acesso liberado.",
      usuario: novoUsuario,
      login: {
        email: emailNormalizado,
        senha: senhaPadrao,
      },
    });
  } catch (error) {
    console.error("Erro no webhook Kiwify:", error);

    return res.status(200).json({
      ok: false,
      message: "Erro tratado no webhook.",
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🔥 Backend rodando na porta ${PORT}`);
});