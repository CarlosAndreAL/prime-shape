const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { MercadoPagoConfig, Preference, Payment } = require("mercadopago");

require("dotenv").config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const mpClient = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Shape Prime Backend Online" });
});

app.post("/auth/cadastro", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({
        ok: false,
        message: "Preencha tudo.",
      });
    }

    const existe = await prisma.usuario.findUnique({
      where: { email },
    });

    if (existe) {
      return res.status(400).json({
        ok: false,
        message: "Email já cadastrado.",
      });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: senhaHash,
        plano: "metodo",
        acessoLiberado: false,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        plano: true,
        acessoLiberado: true,
      },
    });

    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      process.env.JWT_SECRET || "prime_shape_secret",
      {
        expiresIn: "7d",
      }
    );

    res.json({
      ok: true,
      usuario,
      token,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      message: "Erro ao criar cadastro.",
    });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        message: "Email ou senha inválidos.",
      });
    }

    const senhaCorreta = await bcrypt.compare(
      senha,
      usuario.senha
    );

    if (!senhaCorreta) {
      return res.status(400).json({
        ok: false,
        message: "Email ou senha inválidos.",
      });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      process.env.JWT_SECRET || "prime_shape_secret",
      {
        expiresIn: "7d",
      }
    );

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

app.post("/pagamentos/criar-preferencia", autenticar, async (req, res) => {
  try {
    const preference = new Preference(mpClient);

    const result = await preference.create({
      body: {
        external_reference: String(req.usuarioId),

        items: [
          {
            title: "Shape Prime Premium",
            quantity: 1,
            unit_price: 99.9,
            currency_id: "BRL",
          },
        ],

        back_urls: {
          success: "https://prime-shape-x3q0.onrender.com/acesso-liberado",
          failure: "https://prime-shape-x3q0.onrender.com/checkout",
          pending: "https://prime-shape-x3q0.onrender.com/checkout",
        },

        notification_url:
          "https://prime-shape-x3q0.onrender.com/webhook/mercadopago",
      },
    });

    return res.json({
      ok: true,
      preferenceId: result.id,
      init_point: result.init_point,
    });
  } catch (error) {
    console.error("Erro Mercado Pago:", error);

    return res.status(500).json({
      ok: false,
      message: "Erro ao criar preferência.",
    });
  }
});

app.post("/webhook/mercadopago", async (req, res) => {
  try {
    const paymentId = req.body?.data?.id;

    if (!paymentId) {
      return res.sendStatus(200);
    }

    const payment = new Payment(mpClient);
    const pagamento = await payment.get({ id: paymentId });

    if (pagamento.status === "approved") {
      const usuarioId = Number(pagamento.external_reference);

      await prisma.usuario.update({
        where: { id: usuarioId },
        data: { acessoLiberado: true },
      });

      console.log("✅ Acesso liberado para usuário:", usuarioId);
    }

    return res.sendStatus(200);
  } catch (error) {
    console.error("Erro no webhook Mercado Pago:", error);
    return res.sendStatus(200);
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🔥 Backend rodando na porta ${PORT}`);
});