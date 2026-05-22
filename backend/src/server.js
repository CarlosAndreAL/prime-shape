const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { PrismaClient } = require("@prisma/client");

require("dotenv").config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const LOGIN_URL = "https://prime-shape.onrender.com/#/login-metodo";
const SENHA_PADRAO = "123456";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function enviarEmailAcesso({ nome, email, senha }) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("⚠️ EMAIL_USER ou EMAIL_PASS não configurado.");
    return;
  }

  await transporter.sendMail({
    from: `"Shape Prime" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Seu acesso ao Shape Prime foi liberado 🔥",
    html: `
      <div style="margin:0;padding:0;background:#0F1115;font-family:Arial,sans-serif;color:#F5F5F5;">
        <div style="max-width:620px;margin:0 auto;padding:40px 18px;">
          <div style="background:#11141A;border:1px solid rgba(212,175,55,.28);border-radius:28px;padding:34px;box-shadow:0 0 50px rgba(0,0,0,.35);">
            
            <div style="text-align:center;margin-bottom:28px;">
              <div style="display:inline-block;background:#D4AF37;color:#000;font-weight:900;font-size:24px;padding:18px 22px;border-radius:20px;">
                PS
              </div>

              <h1 style="margin:22px 0 6px;color:#F5F5F5;font-size:34px;letter-spacing:2px;">
                PRIME <span style="color:#D4AF37;">SHAPE</span>
              </h1>

              <p style="margin:0;color:#A0A7B4;font-size:14px;">
                Seu acesso premium foi liberado
              </p>
            </div>

            <h2 style="font-size:26px;line-height:1.2;text-align:center;margin:0 0 20px;">
              Bem-vindo ao método, ${nome || "aluno"} 🔥
            </h2>

            <p style="color:#A0A7B4;font-size:16px;line-height:1.7;text-align:center;">
              Sua compra foi aprovada e sua conta já está pronta para acessar a plataforma.
            </p>

            <div style="background:#0F1115;border:1px solid rgba(255,255,255,.08);border-radius:22px;padding:22px;margin:28px 0;">
              <p style="margin:0 0 12px;color:#A0A7B4;font-size:14px;">Seus dados de acesso:</p>

              <p style="margin:10px 0;color:#F5F5F5;font-size:16px;">
                <strong style="color:#D4AF37;">Email:</strong> ${email}
              </p>

              <p style="margin:10px 0;color:#F5F5F5;font-size:16px;">
                <strong style="color:#D4AF37;">Senha inicial:</strong> ${senha}
              </p>
            </div>

            <a href="${LOGIN_URL}"
              style="display:block;text-align:center;background:#D4AF37;color:#000;text-decoration:none;font-weight:900;font-size:15px;letter-spacing:1px;padding:18px;border-radius:18px;">
              ACESSAR MINHA PLATAFORMA
            </a>

            <p style="margin-top:24px;color:#A0A7B4;font-size:13px;line-height:1.6;text-align:center;">
              Por segurança, depois de entrar na plataforma, recomendamos alterar sua senha.
            </p>
          </div>
        </div>
      </div>
    `,
  });
}

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Shape Prime Backend Online" });
});

function gerarToken(usuario) {
  return jwt.sign(
    { id: usuario.id, email: usuario.email },
    process.env.JWT_SECRET || "prime_shape_secret",
    { expiresIn: "7d" }
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

    const emailNormalizado = String(email).trim().toLowerCase();

    const usuario = await prisma.usuario.findUnique({
      where: { email: emailNormalizado },
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
      where: { id: req.usuarioId },
      select: {
        id: true,
        nome: true,
        email: true,
        plano: true,
        acessoLiberado: true,
      },
    });

    res.json({ ok: true, usuario });
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
      data: { senha: novaSenhaHash },
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
    const senhaHash = await bcrypt.hash(SENHA_PADRAO, 10);

    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email: emailNormalizado },
    });

    if (usuarioExistente) {
      const usuarioAtualizado = await prisma.usuario.update({
        where: { email: emailNormalizado },
        data: {
          nome: nome || usuarioExistente.nome,
          senha: usuarioExistente.senha,
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

      await enviarEmailAcesso({
        nome: usuarioAtualizado.nome,
        email: emailNormalizado,
        senha: SENHA_PADRAO,
      });

      console.log("✅ Usuário já existia. Acesso liberado:", usuarioAtualizado);

      return res.status(200).json({
        ok: true,
        message: "Usuário já existia. Acesso liberado e email enviado.",
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

    await enviarEmailAcesso({
      nome: novoUsuario.nome,
      email: emailNormalizado,
      senha: SENHA_PADRAO,
    });

    console.log("✅ Novo aluno criado pela Kiwify:", novoUsuario);

    return res.status(200).json({
      ok: true,
      message: "Aluno criado, acesso liberado e email enviado.",
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