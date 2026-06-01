import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dumbbell,
  Crown,
  ArrowRight,
  X,
  CheckCircle2,
  Lock,
  CalendarDays,
  Apple,
  Beef,
  Moon,
  Sparkles,
  Target,
  Salad,
  Clock,
  Activity,
  Zap,
  Coffee,
  Utensils,
  Flame,
} from "lucide-react";

const dieta2500 = [
  {
    horario: "07:00",
    titulo: "Café da manhã",
    icon: Coffee,
    alimentos: [
      "Goma de tapioca — 3 colheres de sopa cheias (60g)",
      "Queijo cottage 1% gordura — 2,5 colheres de sopa (62,5g)",
      "Leite de vaca desnatado UHT — 1 copo americano duplo (240ml)",
      "Whey protein concentrado — 1 medidor (30g)",
      "Caqui — 1 unidade média (110g)",
    ],
    substituicoes: [
      "Goma de tapioca: pão integral 2 fatias (50g) ou pão francês 1 unidade (50g)",
      "Queijo cottage: queijo minas frescal light 1 fatia média (30g)",
      "Caqui: tangerina Ponkã, ameixa, pêssego ou banana",
    ],
  },
  {
    horario: "12:00",
    titulo: "Almoço",
    icon: Beef,
    alimentos: [
      "Patinho assado com sal — 1 filé grande (160g)",
      "Arroz integral cozido — 7 colheres de sopa cheias (140g)",
      "Feijão preto cozido — 1 concha cheia (140g)",
      "Cenoura cozida — 2 colheres de arroz cheias (80g)",
      "Couve manteiga refogada — 2 colheres de servir rasas (60g)",
      "Azeite de oliva extravirgem — 1 colher de sobremesa (5ml)",
      "Tangerina Ponkã — 1 unidade média (135g)",
    ],
    substituicoes: [
      "Patinho: peito de frango sem pele grelhado — 1 filé grande (170g)",
      "Arroz integral: arroz branco cozido — 5 colheres de sopa cheias (125g)",
      "Tangerina: laranja pera ou kiwi",
    ],
  },
  {
    horario: "16:00",
    titulo: "Pré-treino",
    icon: Zap,
    alimentos: [
      "Torrada tradicional — 3 unidades (30g)",
      "Doce de leite cremoso — 1 colher de sopa cheia (40g)",
      "Ameixa seca — 4 unidades médias (20g)",
      "Suco de uva integral — 1 copo (200ml)",
    ],
  },
  {
    horario: "Durante o treino",
    titulo: "Hidratação",
    icon: Activity,
    alimentos: ["Beba no mínimo 400ml de água durante o treino."],
  },
  {
    horario: "20:00",
    titulo: "Jantar",
    icon: Utensils,
    alimentos: [
      "Peito de frango sem pele cozido — 1,5 filé médio (150g)",
      "Macarrão ao sugo — 3 escumadeiras médias rasas (210g)",
      "Alface — à vontade",
      "Rúcula — à vontade",
      "Tomate cereja — 8 unidades (80g)",
      "Pepino picado — 4 colheres de sopa cheias (72g)",
      "Azeite de oliva extravirgem — 1 colher de sobremesa (5ml)",
      "Suco natural de maracujá — 1 copo americano duplo (240ml)",
      "Goiaba — 1 unidade média (130g)",
    ],
    substituicoes: [
      "Frango: sobrecoxa sem pele assada ou patinho grelhado",
      "Goiaba: abacaxi 2 fatias médias ou maçã 1 unidade média",
    ],
  },
  {
    horario: "22:30",
    titulo: "Ceia",
    icon: Moon,
    alimentos: [
      "Iogurte natural desnatado — 1 copo pequeno (165g)",
      "Aveia — 1 colher de sopa rasa (7g)",
      "Morango — 5 unidades médias (60g)",
      "Banana — 1 unidade média (40g)",
      "Queijo minas frescal light — 2 fatias médias (60g)",
    ],
  },
];

const dieta3000 = [
  {
    horario: "07:00",
    titulo: "Café da manhã",
    icon: Coffee,
    alimentos: [
      "Pão francês — 2 unidades (100g)",
      "Ovo de galinha mexido — 2 unidades médias (100g)",
      "Iogurte natural desnatado — 1 copo pequeno (165g)",
      "Whey protein concentrado — 1 medidor (30g)",
      "Melão — 0,5 fatia média (45g)",
    ],
  },
  {
    horario: "12:00",
    titulo: "Almoço",
    icon: Beef,
    alimentos: [
      "Peito de frango sem pele grelhado — 1,5 filé médio (150g)",
      "Arroz com brócolis — 3 colheres de servir cheias (165g)",
      "Feijão preto cozido — 2 conchas cheias (280g)",
      "Abóbora refogada sem sal — 5 colheres de sopa cheias (150g)",
      "Beterraba cozida — 4 colheres de arroz cheias (152g)",
      "Azeite de oliva extravirgem — 1 colher de chá (2ml)",
      "Kiwi — 1 unidade média (76g)",
    ],
    substituicoes: [
      "Feijão preto: feijão branco cozido — 1 concha média cheia (140g)",
      "Beterraba: cenoura cozida — 2 colheres de arroz cheias (80g)",
      "Kiwi: laranja pequena ou abacaxi 2 fatias pequenas",
    ],
  },
  {
    horario: "16:00",
    titulo: "Pré-treino",
    icon: Zap,
    alimentos: [
      "Biscoito de arroz — 12 unidades (30g)",
      "Geleia — 2 colheres de sobremesa cheias (52g)",
      "Suco de uva integral — 1 copo (200ml)",
      "Maçã verde — 1 unidade pequena (170g)",
    ],
    substituicoes: ["Maçã verde: maçã argentina, banana, mamão ou pera"],
  },
  {
    horario: "Durante o treino",
    titulo: "Hidratação",
    icon: Activity,
    alimentos: ["Beba no mínimo 400ml de água durante o treino."],
  },
  {
    horario: "20:00",
    titulo: "Jantar",
    icon: Utensils,
    alimentos: [
      "Filé de peixe assado — 2 filés pequenos (200g)",
      "Grão de bico cozido — 2 colheres de servir cheias (110g)",
      "Batata doce cozida — 4 colheres de sopa cheias (168g)",
      "Berinjela grelhada — 5 colheres de sopa cheias (125g)",
      "Abobrinha italiana refogada sem sal — 2 colheres de arroz cheias (140g)",
      "Ovo de codorna cozido — 4 unidades médias (52g)",
      "Azeite de oliva extravirgem — 1 colher de sopa (8ml)",
    ],
    substituicoes: [
      "Peixe: filé de frango grelhado ou carne moída refogada",
      "Grão de bico: feijão preto cozido — 1 concha cheia (140g)",
    ],
  },
  {
    horario: "22:30",
    titulo: "Ceia",
    icon: Moon,
    alimentos: [
      "Pão de forma integral — 2 fatias (50g)",
      "Queijo cottage 1% gordura — 1 colher de sopa (25g)",
      "Frango desfiado — 3 colheres de sopa cheias (60g)",
      "Banana — 1 unidade média (40g)",
      "Canela em pó — a gosto",
    ],
    substituicoes: [
      "Queijo cottage: queijo minas frescal light — 1 fatia pequena (20g)",
    ],
  },
];
const dietaMulher2000 = [
  {
    horario: "07:00",
    titulo: "Café da manhã",
    icon: Coffee,
    alimentos: [
      "Ovo mexido — 2 unidades médias (90g)",
      "Creme de ricota — 2 colheres de sopa (40g)",
      "Pão integral — 2 fatias (50g)",
      "Mamão papaia — 135g",
      "Semente de chia — 30g",
    ],
  },

  {
    horario: "12:00",
    titulo: "Almoço",
    icon: Beef,
    alimentos: [
      "Filé de frango grelhado — 150g",
      "Arroz branco — 180g",
      "Feijão preto — 105g",
      "Tomate, cebola e alface",
      "Suco de laranja — 240ml",
    ],
  },

  {
    horario: "16:00",
    titulo: "Lanche",
    icon: Zap,
    alimentos: [
      "Banana — 55g",
      "Farelo de aveia — 30g",
      "Canela em pó",
    ],
  },

  {
    horario: "20:00",
    titulo: "Jantar",
    icon: Utensils,
    alimentos: [
      "Atum grelhado — 100g",
      "Arroz integral — 220g",
      "Lentilha — 108g",
      "Cenoura e beterraba cozida",
    ],
  },

  {
    horario: "22:30",
    titulo: "Ceia",
    icon: Moon,
    alimentos: [
      "Iogurte integral — 100g",
      "Semente de linhaça — 20g",
    ],
  },
];

const dietaMulher2200 = [
  {
    horario: "07:00",
    titulo: "Café da manhã",
    icon: Coffee,
    alimentos: [
      "Pão integral — 2 fatias",
      "Creme de ricota light",
      "Atum em óleo — 48g",
      "Leite desnatado — 100ml",
      "Café coado",
      "Melancia — 100g",
    ],
  },

  {
    horario: "12:00",
    titulo: "Almoço",
    icon: Beef,
    alimentos: [
      "Frango assado sem pele — 120g",
      "Arroz à grega — 140g",
      "Grão de bico — 120g",
      "Espinafre refogado",
      "Cenoura ralada",
      "Abacaxi",
    ],
  },

  {
    horario: "16:00",
    titulo: "Pré-treino",
    icon: Zap,
    alimentos: [
      "Banana",
      "Doce de leite",
      "Suco de laranja",
    ],
  },

  {
    horario: "Durante o treino",
    titulo: "Hidratação",
    icon: Activity,
    alimentos: [
      "Beba no mínimo 400ml de água.",
    ],
  },

  {
    horario: "20:00",
    titulo: "Jantar",
    icon: Utensils,
    alimentos: [
      "Patinho refogado — 150g",
      "Batata doce — 168g",
      "Feijão vermelho — 140g",
      "Couve-flor",
      "Pepino",
      "Kiwi",
    ],
  },

  {
    horario: "22:30",
    titulo: "Ceia",
    icon: Moon,
    alimentos: [
      "Biscoito de arroz",
      "Queijo cottage",
      "Ovo cozido",
    ],
  },
];


export const treinoMulherIniciante = [
  {
    dia: "Segunda-feira",
    grupo: "Quadríceps",
    exercicios: [
      {
        nome: "Mobilidade + aquecimento na extensora",
        series: 2,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Agachamento livre sem peso",
        series: 2,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Afundo",
        series: 2,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Extensora",
        series: 2,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Leg 45",
        series: 2,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Adução panturrilha",
        series: 2,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Panturrilha",
        series: 2,
        reps: 12,
        descanso: 2,
      },
    ],
  },

  {
    dia: "Terça-feira",
    grupo: "Peito • Tríceps • Bíceps",
    exercicios: [
      {
        nome: "Supino articulado",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Peck deck",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Crucifixo",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Tríceps corda",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Tríceps pulley",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Tríceps francês",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Rosca direta com halteres",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Rosca martelo",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Rosca concentrada",
        series: 2,
        reps: 10,
        descanso: 2,
      },
    ],
  },

  {
    dia: "Quarta-feira",
    grupo: "Posterior de coxa • Glúteo",
    exercicios: [
      {
        nome: "Mobilidade de quadril + aquecimento na mesa flexora",
        series: 2,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Cadeira flexora",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Mesa flexora",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Flexão de joelho na máquina",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Agachamento sumô",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Glúteo máquina",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Abdução",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Panturrilha",
        series: 2,
        reps: 15,
        descanso: 2,
      },
    ],
  },

  {
    dia: "Quinta-feira",
    grupo: "Costas • Ombro",
    exercicios: [
      {
        nome: "Puxador aberto",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Puxador fechado",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Remada sentada",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Peck deck invertido",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Desenvolvimento máquina",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Elevação lateral com halteres",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Elevação frontal com halteres",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Encolhimento",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Remada em pé",
        series: 2,
        reps: 10,
        descanso: 2,
      },
    ],
  },

  {
    dia: "Sexta-feira",
    grupo: "Quadríceps",
    exercicios: [
      {
        nome: "Mobilidade + aquecimento na extensora",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Agachamento livre sem peso",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Afundo",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Extensora",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Leg 45",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Adução panturrilha",
        series: 2,
        reps: 10,
        descanso: 2,
      },
    ],
  },
];

export const treinoMulherIntermediario = [
  {
    dia: "Segunda-feira",
    grupo: "Quadríceps",
    exercicios: [
      {
        nome: "Mobilidade + aquecimento",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Passada 3x",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Extensora + isometria na parede",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Agachamento",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Leg 45",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Leg horizontal unilateral",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Adução",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Panturrilha",
        series: 3,
        reps: 15,
        descanso: 2,
      },
    ],
  },

  {
    dia: "Terça-feira",
    grupo: "Peito • Tríceps • Bíceps",
    exercicios: [
      {
        nome: "Supino inclinado com halteres",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Cross peitoral",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Peck deck",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Tríceps testa",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Tríceps coice",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Tríceps francês na polia",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Tríceps pulley",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Rosca 21",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Rosca martelo",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Banco Scott",
        series: 2,
        reps: 10,
        descanso: 2,
      },
    ],
  },

  {
    dia: "Quarta-feira",
    grupo: "Posterior de coxa • Glúteo",
    exercicios: [
      {
        nome: "Mobilidade de quadril + aquecimento stiff",
        series: 3,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Mesa flexora dropando",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Cadeira flexora unilateral",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Stiff + Leg 90 pés altos",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Elevação pélvica",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Glúteo pé estendido no cross",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Abdução no cross",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Agachamento terra sumô",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Panturrilha",
        series: 3,
        reps: 15,
        descanso: 2,
      },
    ],
  },

  {
    dia: "Quinta-feira",
    grupo: "Costas • Ombro",
    exercicios: [
      {
        nome: "Pulldown",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Puxador aberto + fechado",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Remada curvada na barra",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Remada serrote",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Desenvolvimento com halteres",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Desenvolvimento Arnold",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Elevação lateral no cabo",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Elevação frontal com anilha",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Encolhimento",
        series: 1,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Remada em pé",
        series: 1,
        reps: 10,
        descanso: 2,
      },
    ],
  },

  {
    dia: "Sexta-feira",
    grupo: "Quadríceps",
    exercicios: [
      {
        nome: "Mobilidade + aquecimento",
        series: 3,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Passada 3x",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Extensora + isometria na parede",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Agachamento",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Leg 45",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Leg horizontal unilateral",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Adução",
        series: 2,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Panturrilha",
        series: 2,
        reps: 15,
        descanso: 2,
      },
    ],
  },
];

export const treinoMulherAvancado = [
  {
    dia: "Segunda-feira",
    grupo: "Quadríceps",
    exercicios: [
      {
        nome: "Mobilidade + aquecimento passada",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Agachamento subindo carga",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Extensora dropando carga + isometria nórdica",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Leg 45 + isometria parede",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Passada x4 com carga",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Adução 2 tempos",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Panturrilha",
        series: 3,
        reps: 15,
        descanso: 3,
      },
    ],
  },

  {
    dia: "Terça-feira",
    grupo: "Peito • Tríceps • Bíceps",
    exercicios: [
      {
        nome: "Supino reto com barra",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Supino inclinado com halteres",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Peck deck",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Tríceps testa barra W",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Tríceps francês polia baixa",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Tríceps corda no cross",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Rosca direta",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Rosca martelo dropando",
        series: 2,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Rosca Scott",
        series: 2,
        reps: 10,
        descanso: 2,
      },
    ],
  },

  {
    dia: "Quarta-feira",
    grupo: "Posterior de coxa • Glúteo",
    exercicios: [
      {
        nome: "Mobilidade quadril + aquecimento mesa flexora",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Cadeira flexora 12 + 12 curtinhas",
        series: 3,
        reps: 12,
        descanso: 3,
      },
      {
        nome: "Stiff com barra carga alta",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Mesa flexora descida lenta",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Leg 90 pé alto",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Elevação pélvica",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Glúteo pé estendido + flexionado",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Búlgaro",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Abdução máquina 2 tempos",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Panturrilha",
        series: 3,
        reps: 15,
        descanso: 3,
      },
    ],
  },

  {
    dia: "Quinta-feira",
    grupo: "Costas • Ombro",
    exercicios: [
      {
        nome: "Remada sentada máquina",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Remada serrote drop",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Remada curvada",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Puxador aberto + fechado",
        series: 3,
        reps: 10,
        descanso: 3,
      },
      {
        nome: "Desenvolvimento arranque",
        series: 3,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Elevação lateral drop",
        series: 3,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Elevação frontal barra",
        series: 3,
        reps: 12,
        descanso: 2,
      },
      {
        nome: "Encolhimento",
        series: 3,
        reps: 12,
        descanso: 2,
      },
    ],
  },

  {
    dia: "Sexta-feira",
    grupo: "Quadríceps",
    exercicios: [
      {
        nome: "Mobilidade + aquecimento passada",
        series: 3,
        reps: 10,
        descanso: 2,
      },
      {
        nome: "Agachamento subindo carga",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Extensora dropando carga + isometria nórdica",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Leg 45 + isometria parede",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Passada x4 com carga",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Adução 2 tempos",
        series: 3,
        reps: 8,
        descanso: 3,
      },
      {
        nome: "Panturrilha",
        series: 3,
        reps: 15,
        descanso: 2,
      },
    ],
  },
];

export const treinoHomemIniciante = [
  {
    dia: "Segunda-feira",
    grupo: "Peitoral • Bíceps • Tríceps",
    exercicios: [
      { nome: "Aquecimento manguito", series: 3, reps: 12, descanso: 2 },
      { nome: "Supino articulado", series: 3, reps: 12, descanso: 2 },
      { nome: "Supino sentado", series: 3, reps: 12, descanso: 2 },
      { nome: "Voador peitoral", series: 3, reps: 12, descanso: 2 },
      { nome: "Tríceps corda", series: 3, reps: 12, descanso: 2 },
      { nome: "Tríceps pulley", series: 3, reps: 12, descanso: 2 },
      { nome: "Tríceps francês", series: 3, reps: 12, descanso: 2 },
    ],
  },
  {
    dia: "Terça-feira",
    grupo: "Quadríceps",
    exercicios: [
      { nome: "Mobilidade", series: 3, reps: 12, descanso: 2 },
      { nome: "Aquecimento na extensora", series: 2, reps: 12, descanso: 2 },
      { nome: "Leg 45", series: 2, reps: 12, descanso: 2 },
      { nome: "Extensora", series: 2, reps: 12, descanso: 2 },
      { nome: "Afundo", series: 2, reps: 12, descanso: 2 },
      { nome: "Agachamento", series: 2, reps: 12, descanso: 2 },
      { nome: "Adução", series: 2, reps: 12, descanso: 2 },
      { nome: "Panturrilha", series: 2, reps: 15, descanso: 2 },
    ],
  },
  {
    dia: "Quarta-feira",
    grupo: "Costas • Ombro",
    exercicios: [
      { nome: "Puxador aberto pulley", series: 3, reps: 12, descanso: 2 },
      { nome: "Puxador fechado", series: 3, reps: 12, descanso: 2 },
      { nome: "Remada sentada", series: 3, reps: 12, descanso: 2 },
      { nome: "Remada curvada na máquina", series: 3, reps: 12, descanso: 2 },
      { nome: "Desenvolvimento com halteres", series: 3, reps: 12, descanso: 2 },
      { nome: "Elevação lateral", series: 3, reps: 12, descanso: 2 },
      { nome: "Elevação frontal", series: 3, reps: 12, descanso: 2 },
      { nome: "Encolhimento", series: 3, reps: 12, descanso: 2 },
    ],
  },
  {
    dia: "Quinta-feira",
    grupo: "Posterior de coxa",
    exercicios: [
      { nome: "Cadeira flexora", series: 3, reps: 12, descanso: 2 },
      { nome: "Mesa flexora", series: 3, reps: 12, descanso: 2 },
      { nome: "Stiff", series: 3, reps: 12, descanso: 2 },
      { nome: "Glúteo máquina", series: 3, reps: 12, descanso: 2 },
      { nome: "Cadeira abdutora", series: 3, reps: 12, descanso: 2 },
      { nome: "Panturrilha", series: 3, reps: 12, descanso: 2 },
    ],
  },
  {
    dia: "Sexta-feira",
    grupo: "Peito • Tríceps • Bíceps",
    exercicios: [
      { nome: "Aquecimento manguito", series: 2, reps: 12, descanso: "-" },
      { nome: "Supino articulado", series: 2, reps: 12, descanso: "-" },
      { nome: "Supino sentado", series: 2, reps: 12, descanso: "-" },
      { nome: "Voador peitoral", series: 2, reps: 12, descanso: "-" },
      { nome: "Tríceps corda", series: 2, reps: 12, descanso: "-" },
      { nome: "Tríceps pulley", series: 2, reps: 12, descanso: "-" },
      { nome: "Tríceps francês", series: 2, reps: 12, descanso: "-" },
      { nome: "Rosca direta com halteres", series: 2, reps: 12, descanso: "-" },
      { nome: "Rosca martelo com halteres", series: 2, reps: 12, descanso: "-" },
      { nome: "Banco Scott articulado", series: 2, reps: 12, descanso: "-" },
    ],
  },
];

export const treinoHomemIntermediario = [
  {
    dia: "Segunda-feira",
    grupo: "Peito • Tríceps",
    exercicios: [
      { nome: "Aquecimento manguito + supino inclinado", series: 2, reps: 10, descanso: 2 },
      { nome: "Supino inclinado com barra", series: 2, reps: 10, descanso: 2 },
      { nome: "Voador peitoral", series: 2, reps: 10, descanso: 2 },
      { nome: "Crucifixo inclinado com halteres", series: 2, reps: 10, descanso: 2 },
      { nome: "Supino declinado máquina", series: 2, reps: 10, descanso: 2 },
      { nome: "Tríceps corda", series: 2, reps: 8, descanso: 2 },
      { nome: "Tríceps testa", series: 2, reps: 8, descanso: 2 },
      { nome: "Tríceps francês", series: 2, reps: 8, descanso: 2 },
      { nome: "Tríceps coice", series: 2, reps: 8, descanso: 2 },
    ],
  },

  {
    dia: "Terça-feira",
    grupo: "Quadríceps",
    exercicios: [
      { nome: "Mobilidade", series: 2, reps: 10, descanso: 2 },
      { nome: "Aquecimento afundo", series: 2, reps: 10, descanso: 2 },
      { nome: "Passada", series: 2, reps: 12, descanso: 2 },
      { nome: "Leg 45", series: 3, reps: 10, descanso: 3 },
      { nome: "Extensora com drop", series: 3, reps: 10, descanso: 3 },
      { nome: "Agachamento", series: 3, reps: 10, descanso: 3 },
      { nome: "Adução", series: 2, reps: 10, descanso: 2 },
      { nome: "Panturrilha", series: 2, reps: 15, descanso: 2 },
    ],
  },

  {
    dia: "Quarta-feira",
    grupo: "Costas • Ombro",
    exercicios: [
      { nome: "Puxador aberto pulley", series: 3, reps: 10, descanso: 2 },
      { nome: "Pulldown", series: 3, reps: 10, descanso: 2 },
      { nome: "Serrote", series: 3, reps: 8, descanso: 3 },
      { nome: "Remada curvada", series: 3, reps: 10, descanso: 3 },
      { nome: "Elevação frontal com barra", series: 3, reps: 10, descanso: 2 },
      { nome: "Elevação lateral com drop", series: 3, reps: 10, descanso: 2 },
      { nome: "Desenvolvimento Arnold", series: 3, reps: 10, descanso: 2 },
      { nome: "Peck deck invertido", series: 2, reps: 10, descanso: 2 },
    ],
  },

  {
    dia: "Quinta-feira",
    grupo: "Posterior",
    exercicios: [
      { nome: "Aquecimento stiff", series: 3, reps: 12, descanso: 2 },
      { nome: "Cadeira flexora unilateral", series: 3, reps: 10, descanso: 2 },
      { nome: "Mesa flexora", series: 2, reps: 10, descanso: 2 },
      { nome: "Stiff", series: 3, reps: 8, descanso: 3 },
      { nome: "Leg 90 pé alto", series: 3, reps: 8, descanso: 3 },
      { nome: "Agachamento terra sumô", series: 3, reps: 8, descanso: 3 },
      { nome: "Cadeira abdutora", series: 2, reps: 10, descanso: 2 },
      { nome: "Panturrilha", series: 2, reps: 15, descanso: 2 },
    ],
  },

  {
    dia: "Sexta-feira",
    grupo: "Peito • Tríceps • Bíceps",
    exercicios: [
      { nome: "Aquecimento manguito + supino inclinado", series: 3, reps: 10, descanso: 2 },
      { nome: "Supino inclinado com barra", series: 3, reps: 6, descanso: 4 },
      { nome: "Crucifixo inclinado com halteres", series: 3, reps: 10, descanso: 2 },
      { nome: "Cross peitoral", series: 3, reps: 10, descanso: 2 },
      { nome: "Rosca 21", series: 3, reps: 8, descanso: 2 },
      { nome: "Rosca martelo", series: 3, reps: 8, descanso: 2 },
      { nome: "Rosca Scott", series: 3, reps: 8, descanso: 2 },
    ],
  },
];

export const treinoHomemAvancado = [
  {
    dia: "Segunda-feira",
    grupo: "Peito • Tríceps • Bíceps",
    exercicios: [
      { nome: "Aquecimento manguito + supino inclinado", series: 3, reps: 10, descanso: 2 },
      { nome: "Supino reto", series: 3, reps: 6, descanso: 3 },
      { nome: "Supino inclinado com apoio", series: 3, reps: 6, descanso: 3 },
      { nome: "Cross peitoral linha do peito + abaixado", series: 3, reps: 8, descanso: 2 },
      { nome: "Voador", series: 3, reps: 8, descanso: 2 },
      { nome: "Tríceps coice", series: 3, reps: 8, descanso: 2 },
      { nome: "Tríceps corda", series: 3, reps: 8, descanso: 2 },
      { nome: "Tríceps testa", series: 3, reps: 8, descanso: 2 },
      { nome: "Rosca martelo", series: 3, reps: 8, descanso: 2 },
    ],
  },

  {
    dia: "Terça-feira",
    grupo: "Quadríceps",
    exercicios: [
      { nome: "Aquecimento extensora com pré-exaustão", series: 3, reps: 12, descanso: 2 },
      { nome: "Extensora dropando 4x", series: 3, reps: 10, descanso: 3 },
      { nome: "Agachamento", series: 3, reps: 10, descanso: 3 },
      { nome: "Leg 45 com isometria", series: 3, reps: 10, descanso: 3 },
      { nome: "Passada", series: 3, reps: 10, descanso: 3 },
      { nome: "Adução", series: 2, reps: 10, descanso: 2 },
      { nome: "Panturrilha", series: 2, reps: 10, descanso: 2 },
    ],
  },

  {
    dia: "Quarta-feira",
    grupo: "Costas • Ombro",
    exercicios: [
      { nome: "Aquecimento manguito + elevações", series: 3, reps: 12, descanso: 2 },
      { nome: "Pulldown", series: 3, reps: 8, descanso: 3 },
      { nome: "Puxador aberto + fechado", series: 3, reps: 8, descanso: 3 },
      { nome: "Remada unilateral no cabo", series: 3, reps: 8, descanso: 3 },
      { nome: "Remada serrote", series: 3, reps: 8, descanso: 3 },
      { nome: "Desenvolvimento + elevação lateral banco", series: 3, reps: 8, descanso: 2 },
      { nome: "Elevação frontal barra", series: 3, reps: 8, descanso: 2 },
      { nome: "Elevação lateral", series: 3, reps: 8, descanso: 2 },
      { nome: "Desenvolvimento Arnold", series: 3, reps: 8, descanso: 2 },
      { nome: "Peck deck invertido", series: 2, reps: 8, descanso: 2 },
      { nome: "Encolhimento + remada em pé", series: 2, reps: 8, descanso: 2 },
    ],
  },

  {
    dia: "Quinta-feira",
    grupo: "Posterior",
    exercicios: [
      { nome: "Cadeira flexora", series: 3, reps: 8, descanso: 3 },
      { nome: "Mesa flexora + stiff subindo carga", series: 3, reps: 8, descanso: 3 },
      { nome: "Leg horizontal pé alto", series: 3, reps: 8, descanso: 3 },
      { nome: "Flexão joelhos em pé máquina", series: 3, reps: 8, descanso: 3 },
      { nome: "Glúteo máquina", series: 3, reps: 8, descanso: 3 },
      { nome: "Agachamento terra sumô", series: 3, reps: 8, descanso: 3 },
      { nome: "Abdução", series: 2, reps: 10, descanso: 2 },
      { nome: "Panturrilha", series: 2, reps: 15, descanso: 2 },
    ],
  },

  {
    dia: "Sexta-feira",
    grupo: "Peito • Tríceps • Bíceps",
    exercicios: [
      { nome: "Aquecimento manguito + supino inclinado baixa carga", series: 3, reps: 10, descanso: 2 },
      { nome: "Supino inclinado com apoio", series: 3, reps: 6, descanso: 3 },
      { nome: "Crucifixo", series: 3, reps: 8, descanso: 3 },
      { nome: "Supino declinado", series: 3, reps: 8, descanso: 3 },
      { nome: "Tríceps coice", series: 3, reps: 8, descanso: 2 },
      { nome: "Tríceps francês na polia", series: 3, reps: 8, descanso: 2 },
      { nome: "Rosca 21", series: 3, reps: 8, descanso: 2 },
      { nome: "Rosca concentrada", series: 3, reps: 8, descanso: 2 },
    ],
  },
];

const cards = [
   {
  id: "dietas",
  titulo: "Dietas Bulking",
  subtitulo: "Masculino e feminino",
  categoria: "Dietas",
  icon: Salad,
  imagem:
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
  descricao:
    "Dietas completas separadas entre masculino e feminino para ganho de massa muscular.",
  tipo: "dietas",
  planos: [
    {
      grupo: "Bulking Homem",
      itens: [
        {
          nome: "Bulking Homem 2500 kcal",
          refeicoes: dieta2500,
        },
        {
          nome: "Bulking Homem 3000 kcal",
          refeicoes: dieta3000,
        },
      ],
    },

    {
      grupo: "Bulking Mulher",
      itens: [
        {
          nome: "Bulking Mulher 2000 kcal",
          refeicoes: dietaMulher2000,
        },
        {
          nome: "Bulking Mulher 2200 kcal",
          refeicoes: dietaMulher2200,
        },
      ],
    },
  ],
},
  
  {
  id: "estrategias-progressao",
  titulo: "Estratégias de Progressão",
  subtitulo: "Evolução constante",
  categoria: "Bulking",
  icon: Target,
  imagem: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  descricao: "Estratégias para progredir carga, volume e intensidade com segurança e constância.",
  tipo: "texto",
  conteudo: [
  "ESTRATÉGIAS DE PROGRESSÃO",
  "A progressão é o principal indicador de crescimento muscular. Sem evolução de performance, dificilmente haverá evolução física consistente.",

  "1. Busque aumentar carga ou repetições semanalmente.",
  "2. Mantenha a execução perfeita antes de subir peso.",
  "3. Registre todos os treinos para acompanhar sua evolução.",
  "4. Utilize sobrecarga progressiva nos exercícios principais.",
  "5. Quando estagnar, aumente volume ou frequência de forma estratégica.",
  "6. Priorize força nos exercícios compostos e qualidade nos isoladores.",

  "Quem treina com método e acompanha números cresce mais rápido do que quem apenas treina pesado."
]
},

{
  id: "ganho-massa-inteligente",
  titulo: "Ganho de Massa Inteligente",
  subtitulo: "Crescer com qualidade",
  categoria: "Bulking",
  icon: Dumbbell,
  imagem: "/cuttingfoto.png",
  descricao: "Métodos para ganhar massa muscular com qualidade, evitando excesso de gordura.",
  tipo: "texto",
  conteudo: [
    "GANHO DE MASSA INTELIGENTE",
    "Bulking bem feito é construir músculo sem transformar o processo em ganho descontrolado de gordura.",
    "1. Use superávit calórico moderado.",
    "2. Mantenha proteína adequada todos os dias.",
    "3. Distribua carboidratos próximos ao treino.",
    "4. Ajuste calorias conforme o peso e o espelho evoluem.",
    "5. Não confunda comer muito com comer certo.",
    "O objetivo é ganhar volume, força e densidade muscular com qualidade."
  ],
},

  {
    id: "protocolo",
    titulo: "Protocolo Charles Crescimento",
    subtitulo: "Método oficial",
    categoria: "Protocolo",
    icon: Crown,
    imagem:
      "/cardcutting.png",
    descricao:
  "O protocolo pessoal utilizado pelo Charles, com aviso de segurança e orientação profissional.",
    tipo: "texto",
conteudo: [
  "MEU PROTOCOLO COMPLETO",
  "Meu protocolo foi cuidadosamente estruturado para maximizar os resultados com segurança, performance e evolução física.",

  "HORMONIZAÇÃO",
  "• 1ml de Durateston — terça-feira",
  "• 1ml de Deca — terça-feira",
  "• 30mg de Hemogenin no pré-treino",

  "DISCIPLINA",
  "Todo o protocolo foi seguido com treino intenso, dieta ajustada, constância e acompanhamento da evolução semanal.",

  "IMPORTANTE",
  "Esse é apenas o protocolo que EU utilizei durante minha evolução.",
  "Não recomendo que ninguém utilize qualquer tipo de hormônio por conta própria.",

  "ORIENTAÇÃO PROFISSIONAL",
  "Se você pretende seguir qualquer protocolo hormonal, procure um médico especializado, faça exames e tenha acompanhamento profissional adequado.",
    ],
  },
];

export default function SerieBulking() {
  const [cardAberto, setCardAberto] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(163,255,18,0.24),transparent_35%),linear-gradient(180deg,#050403_0%,#000_55%,#050403_100%)]" />

      <div className="pointer-events-none fixed inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:42px_42px]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a3ff12]/30 bg-[#a3ff12]/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#a3ff12]">
            <Crown size={14} />
            Série premium Shape Prime
          </div>

          <h1 className="text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] md:text-8xl">
            BULKING
          </h1>

          <p className="mt-5 text-2xl font-black uppercase text-[#a3ff12]">
            Hipertrofia muscular
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
            Escolha o módulo que deseja acessar. Dietas masculinas, treinos,
            execuções e protocolo oficial em cards premium.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
         
          </div>
        </motion.div>

        <section className="mt-14">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#a3ff12]">
                Tudo que você precisa
              </p>

              <h2 className="mt-2 text-4xl font-black uppercase">
                Módulos liberados
              </h2>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white/45 md:flex">
              <Sparkles size={14} className="text-[#a3ff12]" />
              Arraste para o lado
            </div>
          </div>

          <div className="overflow-hidden pb-6">
            <motion.div
              drag="x"
              dragConstraints={{ left: -850, right: 0 }}
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max cursor-grab gap-6 active:cursor-grabbing"
            >
              {[...cards, ...cards].map((card, index) => (
                <ModuloCard
                  key={`${card.id}-${index}`}
                  card={card}
                  onClick={() => setCardAberto(card)}
                />
              ))}
            </motion.div>
          </div>
        </section>
      </section>

      <AnimatePresence>
        {cardAberto && (
          <ModalConteudo
            card={cardAberto}
            fechar={() => setCardAberto(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function ModuloCard({ card, onClick }) {
  const Icon = card.icon;

  return (
    <motion.button
      whileHover={{ y: -12, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="group relative h-[430px] w-[285px] shrink-0 overflow-hidden rounded-[34px] border border-[#a3ff12]/20 bg-black text-left shadow-[0_0_90px_rgba(163,255,18,0.10)]"
    >
      <img
        src={card.imagem}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,255,18,0.18),transparent_45%)]" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a3ff12] text-black shadow-[0_0_50px_rgba(163,255,18,0.5)]">
            <Icon size={26} />
          </div>

          <span className="rounded-full border border-[#a3ff12]/30 bg-black/55 px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-[#a3ff12]">
            {card.categoria}
          </span>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#a3ff12]">
            {card.subtitulo}
          </p>

          <h3 className="mt-3 text-3xl font-black uppercase leading-[0.9]">
            {card.titulo}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-white/65">
            {card.descricao}
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#a3ff12]">
            Abrir módulo
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function ModalConteudo({ card, fechar }) {
  const ehDietasHomem = card.tipo === "dietas";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] overflow-y-auto bg-black/90 p-4 backdrop-blur-xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 80, scale: 0.96 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-[#a3ff12]/25 bg-[#070706]"
      >
        <div className="relative h-[330px]">
          <img src={card.imagem} alt="" className="h-full w-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />

          <button
            onClick={fechar}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/45"
          >
            <X size={22} />
          </button>

          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#a3ff12]">
              {card.categoria}
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-[0.9] md:text-6xl">
              {card.titulo}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65">
              {card.descricao}
            </p>
          </div>
        </div>

        <div className="p-6 md:p-10">
          {card.tipo === "dietas" ? (
  <DietasHomem card={card} />
) : card.tipo === "treinos" ? (
  <TreinosBulking card={card} />
) : (
  <Texto card={card} />
)}
        </div>
      </motion.div>
    </motion.div>
  );
}

function DietasHomem({ card }) {
  const [planoAberto, setPlanoAberto] = useState(
    card.planos[0].itens[0]
  );

  return (
    <div>
      <div className="mb-8 rounded-[30px] border border-[#a3ff12]/20 bg-[#a3ff12]/10 p-6">
        <Target className="text-[#a3ff12]" size={30} />

        <h3 className="mt-4 text-3xl font-black uppercase">
          Dietas Bulking Premium
        </h3>

        <div className="mt-7 grid gap-5">
          {card.planos.map((grupo) => (
            <div key={grupo.grupo}>
              <h4 className="mb-3 text-lg font-black uppercase text-[#a3ff12]">
                {grupo.grupo}
              </h4>

              <div className="grid gap-3 md:grid-cols-2">
                {grupo.itens.map((plano) => (
                  <button
                    key={plano.nome}
                    onClick={() => setPlanoAberto(plano)}
                    className={`rounded-2xl border px-5 py-4 text-left text-sm font-black uppercase transition ${
                      planoAberto.nome === plano.nome
                        ? "border-[#a3ff12] bg-[#a3ff12] text-black"
                        : "border-white/10 bg-black/30 text-white/70"
                    }`}
                  >
                    {plano.nome}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5">
        {planoAberto.refeicoes.map((refeicao) => (
          <Refeicao
            key={refeicao.titulo}
            refeicao={refeicao}
          />
        ))}
      </div>
    </div>
  );
}

function Texto({ card }) {
  const isProtocolo = card.id === "protocolo";

  if (isProtocolo) {
    return (
      <div className="rounded-[34px] border border-[#a3ff12]/25 bg-[#a3ff12]/10 p-6 md:p-8">
        <h3 className="text-4xl font-black uppercase text-white">
          Meu protocolo completo
        </h3>

        <p className="mt-5 text-base leading-relaxed text-white/70">
          Meu protocolo foi cuidadosamente estruturado para maximizar os
          resultados com segurança e eficiência.
        </p>

        <div className="mt-7 rounded-[28px] border border-white/10 bg-black/35 p-5">
          <h4 className="text-xl font-black uppercase tracking-[0.18em] text-[#a3ff12]">
            Harmonização
          </h4>

          <div className="mt-5 grid gap-3">
            {["1ml de Durateston — terça-feira", "1ml de Deca — terça-feira", "30mg de Hemogenin no pré-treino"].map((item) => (
              <p key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-white/75">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-red-500/20 bg-red-500/10 p-5">
          <h4 className="text-xl font-black uppercase tracking-[0.18em] text-red-300">
            Aviso importante
          </h4>

          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Esse é apenas o protocolo que EU utilizei. Não recomendo que ninguém utilize por conta própria.
            Procure um médico especializado, faça exames e tenha acompanhamento profissional.
          </p>
        </div>
      </div>
    );
  }

  const titulo = card.conteudo?.[0];
  const intro = card.conteudo?.[1];
  const itens = card.conteudo?.slice(2, -1) || [];
  const final = card.conteudo?.[card.conteudo.length - 1];

  return (
    <div className="rounded-[34px] border border-[#a3ff12]/25 bg-gradient-to-br from-[#a3ff12]/10 via-white/[0.03] to-black p-6 md:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#a3ff12] text-black">
          <Target size={24} />
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#a3ff12]">
            Conteúdo premium
          </p>
          <h3 className="mt-1 text-3xl font-black uppercase text-white md:text-4xl">
            {titulo}
          </h3>
        </div>
      </div>

      <p className="mt-6 text-base leading-relaxed text-white/70">
        {intro}
      </p>

      <div className="mt-7 grid gap-3">
        {itens.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/35 p-4"
          >
            <CheckCircle2 size={19} className="mt-0.5 min-w-[19px] text-[#a3ff12]" />
            <p className="text-sm leading-relaxed text-white/75">
              {item.replace(/^\d+\.\s*/, "")}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7 rounded-[26px] border border-[#a3ff12]/25 bg-[#a3ff12]/10 p-5">
        <p className="text-sm font-bold leading-relaxed text-[#ddff8a]">
          {final}
        </p>
      </div>
    </div>
  );
}

function TreinosBulking({ card }) {
  const [treinoAberto, setTreinoAberto] = useState(card.treinos[0].itens[0]);

  return (
    <div>
      <div className="mb-8 rounded-[30px] border border-[#a3ff12]/20 bg-[#a3ff12]/10 p-6">
        <Target className="text-[#a3ff12]" size={30} />

        <h3 className="mt-4 text-3xl font-black uppercase">
          Treinos Bulking Premium
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-white/60">
          Escolha o nível do treino feminino: iniciante, intermediário ou avançado.
        </p>

        <div className="mt-7 grid gap-5">
          {card.treinos.map((grupo) => (
            <div key={grupo.grupo}>
              <h4 className="mb-3 text-lg font-black uppercase text-[#a3ff12]">
                {grupo.grupo}
              </h4>

              <div className="grid gap-3 md:grid-cols-3">
                {grupo.itens.map((treino) => (
                  <button
                    key={treino.nome}
                    onClick={() => setTreinoAberto(treino)}
                    className={`rounded-2xl border px-5 py-4 text-left text-sm font-black uppercase transition ${
                      treinoAberto.nome === treino.nome
                        ? "border-[#a3ff12] bg-[#a3ff12] text-black"
                        : "border-white/10 bg-black/30 text-white/70"
                    }`}
                  >
                    {treino.nome}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="mb-6 text-4xl font-black uppercase">
        {treinoAberto.nome}
      </h3>

      <div className="grid gap-5">
        {treinoAberto.dias.map((dia) => (
          <div
            key={dia.dia}
            className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#a3ff12]">
              {dia.grupo}
            </p>

            <h4 className="mt-2 text-3xl font-black uppercase">
              {dia.dia}
            </h4>

            <div className="mt-6 grid gap-3">
              {dia.exercicios.map((exercicio, index) => (
                <div
                  key={`${dia.dia}-${index}`}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 min-w-9 items-center justify-center rounded-xl bg-[#a3ff12] text-xs font-black text-black">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h5 className="font-black uppercase text-white">
                        {exercicio.nome}
                      </h5>

                      <p className="mt-1 text-sm text-white/60">
                        {exercicio.series} séries • {exercicio.reps} repetições • descanso {exercicio.descanso} min
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function Refeicao({ refeicao }) {
  const Icon = refeicao.icon || Apple;

  return (
    <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-2xl bg-[#a3ff12]/10 text-[#a3ff12]">
          <Icon size={24} />
        </div>

        <div>
          <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#a3ff12]">
            <Clock size={13} />
            {refeicao.horario}
          </p>

          <h4 className="mt-1 text-2xl font-black uppercase">
            {refeicao.titulo}
          </h4>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {refeicao.alimentos.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
          >
            <CheckCircle2
              size={18}
              className="mt-0.5 min-w-[18px] text-[#a3ff12]"
            />

            <p className="text-sm leading-relaxed text-white/75">{item}</p>
          </div>
        ))}
      </div>

      {refeicao.substituicoes?.length > 0 && (
        <div className="mt-5 rounded-2xl border border-[#a3ff12]/15 bg-[#a3ff12]/10 p-4">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a3ff12]">
            Substituições
          </p>

          <div className="mt-3 grid gap-2">
            {refeicao.substituicoes.map((item) => (
              <p key={item} className="text-sm leading-relaxed text-white/65">
                • {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Resumo({ icon: Icon, titulo, valor }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5">
      <Icon className="text-[#a3ff12]" size={28} />

      <p className="mt-4 text-3xl font-black">{valor}</p>

      <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-white/45">
        {titulo}
      </p>
    </div>
  );
}