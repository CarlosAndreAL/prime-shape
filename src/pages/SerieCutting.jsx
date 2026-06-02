import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Crown,
  ArrowRight,
  X,
  CheckCircle2,
  Lock,
  CalendarDays,
  Star,
  Apple,
  Beef,
  Moon,
  Sun,
  Sparkles,
  Target,
  Salad,
  Clock,
  Dumbbell,
  Activity,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

const dietaHomem1600 = [
  {
    horario: "07:30",
    titulo: "Café da manhã",
    icon: Sun,
    alimentos: [
      "Leite de vaca desnatado em pó - 2 colheres cheias (20g)",
      "Whey protein concentrado - 2 colheres de sopa (20g)",
      "Banana prata - 1 unidade grande (55g)",
      "Mamão papaia - 1/2 unidade grande (265g)",
      "Farelo de aveia - 2 colheres de sopa (20g)",
      "Mel - 1 colher rasa (15g)",
    ],
    observacao:
      "Bater todos os alimentos no liquidificador ou mixer para fazer um shake.",
  },

  {
    horario: "12:00",
    titulo: "Almoço",
    icon: Beef,
    alimentos: [
      "Filé de salmão sem pele assado - 100g",
      "Espinafre refogado - 25g",
      "Mandioca cozida - 120g",
      "Chocolate amargo 70% - 30g",
    ],
    substituicoes: [
      "Salmão → frango grelhado 150g",
      "Espinafre → couve ou brócolis",
      "Mandioca → batata doce, macarrão integral, batata inglesa ou arroz integral",
    ],
  },

  {
    horario: "15:00",
    titulo: "Lanche",
    icon: Apple,
    alimentos: [
      "Abacaxi - 2 fatias pequenas (100g)",
      "Semente de linhaça - 1 colher cheia (15g)",
      "Canela em pó - 1 colher café cheia (4g)",
    ],
    substituicoes: [
      "Abacaxi → banana prata",
      "Linhaça → chia",
    ],
  },

  {
    horario: "19:00",
    titulo: "Jantar",
    icon: Salad,
    alimentos: [
      "Filé de frango grelhado - 150g",
      "Arroz branco cozido - 75g",
      "Feijão preto cozido - 35g",
      "Couve-flor cozida - 60g",
      "Chuchu cozido - 45g",
    ],
  },

  {
    horario: "22:00",
    titulo: "Ceia",
    icon: Moon,
    alimentos: [
      "Abacate - 135g",
    ],
    substituicoes: [
      "Abacate → castanha do Brasil ou coco seco ralado",
    ],
  },
];
const dietaHomem1700 = [
  {
    horario: "07:00",
    titulo: "Café da manhã",
    icon: Sun,
    alimentos: [
      "Café coado suave — 1 copo americano pequeno (165ml)",
      "Omelete com queijo muçarela — 0,5 pedaço/unidade/fatia média (50g)",
      "Mamão papaia picado — 4 colheres de sopa cheias (160g)",
      "Banana — 1 unidade média (40g)",
      "Aveia em flocos — 2 colheres de sopa cheias (30g)",
    ],
  },
  {
    horario: "12:00",
    titulo: "Almoço",
    icon: Beef,
    alimentos: [
      "Filé de merluza assado — 1 filé médio (120g)",
      "Purê de batata inglesa — 1,5 colher de servir cheia (120g)",
      "Feijão preto cozido — 1 concha cheia (140g)",
      "Abóbora moranga cozida sem sal — 2 pedaços pequenos (60g)",
      "Couve-flor refogada — 4 colheres de sopa cheias (100g)",
      "Tomate — 3 fatias grandes (90g)",
      "Azeite de oliva extravirgem — 1 colher de chá (2ml)",
      "Suco de laranja lima — 1 copo americano pequeno (165ml)",
    ],
    substituicoes: [
      "Merluza → filé de frango grelhado 75g, carne moída refogada 50g ou patinho grelhado 70g",
    ],
  },
  {
    horario: "16:00",
    titulo: "Lanche",
    icon: Apple,
    alimentos: [
      "Morango — 10 unidades médias (120g)",
      "Leite de vaca desnatado UHT — 1 copo americano pequeno (165ml)",
      "Mel de abelha — 1 colher de sobremesa rasa (9g)",
      "Castanha de caju — 4 unidades (10g)",
      "Biscoito de arroz — 3 unidades (7,5g)",
      "Creme de ricota — 1 colher de sopa (20g)",
      "Orégano — 1 colher de café rasa (1g)",
    ],
    substituicoes: [
      "Morango → banana 1 unidade média (40g)",
      "Castanha de caju → castanha do Brasil 2 unidades (8g)",
      "Creme de ricota → requeijão 1 colher de sopa rasa (15g)",
    ],
  },
  {
    horario: "20:00",
    titulo: "Jantar",
    icon: Salad,
    alimentos: [
      "Peito de frango assado — 1 peito pequeno (140g)",
      "Arroz integral cozido — 2 colheres de sopa cheias (40g)",
      "Lentilha cozida — 1 colher de servir cheia (35g)",
      "Brócolis refogado — 4 colheres de sopa cheias (60g)",
      "Abobrinha italiana refogada sem sal — 2 colheres de sopa cheias (60g)",
      "Azeite de oliva extravirgem — 1 colher de chá (2ml)",
      "Tangerina Ponkã — 1 unidade média (135g)",
    ],
    substituicoes: ["Tangerina Ponkã → laranja 1 unidade média (180g)"],
  },
  {
    horario: "22:30",
    titulo: "Ceia",
    icon: Moon,
    alimentos: ["Mingau de aveia — 1 copo americano pequeno (165ml)"],
    observacao: "Leite desnatado, aveia e adoçante culinário.",
  },
];
const dietaMulher1200 = [
  {
    horario: "07:00",
    titulo: "Café da manhã",
    icon: Sun,
    alimentos: [
      "Chá de gengibre — 1 xícara de chá (200ml)",
      "Pão de forma integral — 1 fatia (25g)",
      "Queijo minas frescal — 1 fatia média (30g)",
      "Azeite de oliva extravirgem — 1 colher de sobremesa (5ml)",
      "Manjericão — 1 colher de sopa cheia (6g)",
      "Mamão — 1 fatia média (170g)",
      "Aveia em flocos finos — 1 colher de chá cheia (4g)",
    ],
    substituicoes: [
      "Chá de gengibre → café coado suave",
      "Queijo minas frescal → queijo minas padrão",
      "Mamão → banana grande",
    ],
  },

  {
    horario: "12:00",
    titulo: "Almoço",
    icon: Beef,
    alimentos: [
      "Quinoa cozida — 2 colheres de sopa cheias (40g)",
      "Grão de bico cozido — 1 concha cheia (120g)",
      "Peito de frango sem pele refogado — 110g",
      "Alface americana — à vontade",
      "Pepino — 10 fatias pequenas (30g)",
      "Tomate — 3 fatias médias (45g)",
      "Azeite de oliva extravirgem — 1 colher de sobremesa (5ml)",
      "Tangerina Ponkã — 1 unidade média (135g)",
    ],
    substituicoes: [
      "Quinoa → arroz integral",
      "Grão de bico → lentilha ou feijão preto",
      "Tangerina → laranja",
    ],
  },

  {
    horario: "16:00",
    titulo: "Lanche",
    icon: Apple,
    alimentos: [
      "Iogurte natural — 1 unidade (100g)",
      "Castanha do Brasil — 2 unidades (8g)",
      "Morango — 5 unidades médias (60g)",
    ],
    substituicoes: [
      "Morango → banana pequena",
    ],
  },

  {
    horario: "20:00",
    titulo: "Jantar",
    icon: Salad,
    alimentos: [
      "Abóbora (jerimum) — 2 escumadeiras médias cheias (200g)",
      "Brócolis — 3 colheres de sopa cheias (30g)",
      "Feijão fradinho cozido — 1 concha rasa (80g)",
      "Filé de merluza assado — 1 filé médio (120g)",
      "Agrião — 3 colheres de sopa cheias (21g)",
      "Tomate — 3 fatias médias (45g)",
      "Azeite de oliva extravirgem — 1 colher de sobremesa (5ml)",
    ],
    substituicoes: [
      "Abóbora → abobrinha italiana ou couve-flor",
      "Feijão fradinho → feijão preto",
    ],
  },

  {
    horario: "22:30",
    titulo: "Ceia",
    icon: Moon,
    alimentos: [
      "Chá de camomila — 1 xícara de chá (200ml)",
      "Kiwi — 1 unidade média (76g)",
    ],
  },
];
const dietaMulher1400 = [
  {
    horario: "07:00",
    titulo: "Café da manhã",
    icon: Sun,
    alimentos: [
      "Pão de forma integral — 2 fatias (50g)",
      "Creme de ricota — 1 colher de sopa (20g)",
      "Queijo minas — 1 fatia pequena (20g)",
      "Ameixa — 1 unidade média (42g)",
      "Café coado suave — 1 xícara de chá (200ml)",
    ],
    substituicoes: [
      "Creme de ricota → queijo cottage",
      "Ameixa → mamão papaia",
    ],
  },

  {
    horario: "12:00",
    titulo: "Almoço",
    icon: Beef,
    alimentos: [
      "Filé de peixe grelhado/assado — 1 filé pequeno (100g)",
      "Arroz branco cozido — 3 colheres de sopa cheias (75g)",
      "Grão de bico cozido — 2 colheres de sopa cheias (50g)",
      "Abobrinha italiana grelhada — 2 colheres de sopa cheias (60g)",
      "Alface roxa — 3 folhas médias (30g)",
      "Tomate — 3 fatias médias (45g)",
      "Azeite de oliva extravirgem — 1 colher de sopa (8ml)",
      "Laranja — 1 unidade pequena (90g)",
    ],
    substituicoes: [
      "Laranja → tangerina Ponkã",
    ],
  },

  {
    horario: "16:00",
    titulo: "Lanche",
    icon: Apple,
    alimentos: [
      "Iogurte natural desnatado — 1 unidade (100g)",
      "Semente de linhaça — 1 colher de sobremesa cheia (10g)",
      "Banana — 1 unidade média (65g)",
    ],
  },

  {
    horario: "20:00",
    titulo: "Jantar",
    icon: Salad,
    alimentos: [
      "Peito de frango sem pele grelhado — 1 filé médio (100g)",
      "Arroz integral cozido — 3 colheres de sopa cheias (60g)",
      "Feijão preto cozido — 1 concha rasa (80g)",
      "Cenoura cozida — 2 colheres de sopa cheias (50g)",
      "Beterraba cozida — 2 colheres de sopa cheias (40g)",
      "Azeite de oliva extravirgem — 1 colher de sobremesa (5ml)",
      "Abacaxi — 2 fatias médias (150g)",
    ],
  },

  {
    horario: "22:30",
    titulo: "Ceia",
    icon: Moon,
    alimentos: [
      "Kiwi — 1 unidade (75g)",
      "Aveia — 1 colher de sopa rasa (7g)",
      "Castanha do Brasil — 2 unidades (8g)",
    ],
  },
];

const treinoMulherIniciante = [
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

const treinoMulherIntermediario = [
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

const treinoMulherAvancado = [
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

const treinoHomemIniciante = [
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

const treinoHomemIntermediario = [
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

const treinoHomemAvancado = [
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
    id: "protocolo-charles-cutting",
    titulo: "Protocolo Charles Cutting",
    subtitulo: "Método oficial",
    categoria: "Protocolo",
    icon: Crown,
    imagem: "/cardcutting.png",
    descricao:
      "Protocolo utilizado pelo Charles durante sua fase de definição muscular.",
    tipo: "texto",
    conteudo: [
      "MEU PROTOCOLO COMPLETO",
      "Meu protocolo foi cuidadosamente estruturado para maximizar os resultados com segurança e eficiência. Aqui está tudo o que utilizei:",

      "HORMONIZAÇÃO",
      "2ml de Enantato de Testosterona por semana (400mg)",
      "Segunda-feira: 1ml (200mg)",
      "Quinta-feira: 1ml (200mg)",
      "30mg de Oxandrolona no pré-treino",

      "DISCIPLINA",
      "Esse protocolo foi seguido de forma disciplinada, aliado a um treino e dieta ajustados.",

      "IMPORTANTE",
      "Esse é apenas o protocolo que EU utilizei. Não recomendo que ninguém utilize por conta própria.",

      "ORIENTAÇÃO PROFISSIONAL",
      "Se você está pensando em seguir qualquer protocolo, procure um médico especializado, faça exames e tenha acompanhamento profissional.",
    ],
  },

  {
    id: "estrategias-definicao",
    titulo: "Estratégias de Definição",
    subtitulo: "Secar com inteligência",
    categoria: "Cutting",
    icon: Flame,
    imagem: "/cuttingfoto.png",
    descricao:
      "Estratégias para acelerar a definição muscular mantendo performance, energia e controle no processo.",
    tipo: "texto",
    conteudo: [
      "ESTRATÉGIAS DE DEFINIÇÃO",
      "O objetivo do cutting não é apenas perder peso, é reduzir gordura mantendo o máximo de massa muscular possível.",
      "1. Mantenha proteína alta em todas as refeições.",
      "2. Reduza calorias de forma progressiva, sem cortar tudo de uma vez.",
      "3. Priorize treinos intensos para sinalizar ao corpo que ele precisa manter músculo.",
      "4. Use cardio como ferramenta, não como punição.",
      "5. Acompanhe medidas, fotos e evolução semanal.",
      "Definição vem de consistência, estratégia e controle.",
    ],
  },

  {
    id: "preservacao-massa",
    titulo: "Preservação de Massa Muscular",
    subtitulo: "Mantenha músculo no déficit",
    categoria: "Cutting",
    icon: ShieldCheck,
    imagem: "/bulkingfoto.png",
    descricao:
      "Métodos para preservar força e massa magra durante o déficit calórico.",
    tipo: "texto",
    conteudo: [
      "PRESERVAÇÃO DE MASSA MUSCULAR",
      "Durante o cutting, o foco é perder gordura sem sacrificar o shape construído.",
      "1. Não reduza proteína.",
      "2. Não abandone cargas altas no treino.",
      "3. Evite déficits calóricos agressivos.",
      "4. Durma bem para manter recuperação e hormônios regulados.",
      "5. Controle o cardio para não prejudicar a recuperação.",
      "O segredo é secar mantendo força, volume e densidade muscular.",
    ],
  },

  {
    id: "dietas",
    titulo: "Dietas Cutting",
    subtitulo: "Masculino e feminino",
    categoria: "Dietas",
    icon: Salad,
    imagem:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    descricao:
      "Dietas completas para definição muscular, separadas entre masculino e feminino.",
    tipo: "dietas",
    planos: [
      {
        grupo: "Cutting Homem",
        itens: [
          {
            nome: "Cutting Homem 1600 kcal",
            refeicoes: dietaHomem1600,
          },
          {
            nome: "Cutting Homem 1700 kcal",
            refeicoes: dietaHomem1700,
          },
        ],
      },
      {
        grupo: "Cutting Mulher",
        itens: [
          {
            nome: "Cutting Mulher 1200 kcal",
            refeicoes: dietaMulher1200,
          },
          {
            nome: "Cutting Mulher 1400 kcal",
            refeicoes: dietaMulher1400,
          },
        ],
      },
    ],
  },
];

export default function SerieCutting() {
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
            Série premium Shape prime
          </div>

          <h1 className="text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] md:text-8xl">
            CUTTING
          </h1>

          <p className="mt-5 text-2xl font-black uppercase text-[#a3ff12]">
            Definição muscular
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
            Escolha o módulo que deseja acessar. Dietas, treinos, execuções e o
            protocolo oficial organizados em cards premium.
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
              arraste para o lado
            </div>
          </div>

          <div className="overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 w-max">
  {cards.map((card) => (
                <ModuloCard
                  key={card.id}
                  card={card}
                  onClick={() => setCardAberto(card)}
                />
              ))}
            </div>
          </div>
        </section>
      </section>

      <AnimatePresence>
        {cardAberto && (
          <ModalConteudo card={cardAberto} fechar={() => setCardAberto(null)} />
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
          {card.tipo === "dietas" && card.planos ? (
            <DietasHomem card={card} />
          ) : card.tipo === "treinos" && card.treinos ? (
            <TreinosBulking card={card} />
          ) : card.conteudo ? (
            <Texto card={card} />
          ) : (
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-3xl font-black uppercase text-white">
                Conteúdo em construção
              </h3>

              <p className="mt-3 text-sm text-white/60">
                Esse módulo ainda está sendo organizado.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function DietasHomem({ card }) {
  const [planoAberto, setPlanoAberto] = useState(card.planos[0].itens[0]);

  return (
    <div>
      <div className="mb-8 rounded-[30px] border border-[#a3ff12]/20 bg-[#a3ff12]/10 p-6">
        <Target className="text-[#a3ff12]" size={30} />

        <h3 className="mt-4 text-3xl font-black uppercase">
          Dietas Cutting Premium
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

      {planoAberto.refeicoes.length === 0 ? (
        <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-3xl font-black uppercase text-white">
            Dieta em construção
          </h3>
          <p className="mt-3 text-sm text-white/60">
            Esse plano ainda será preenchido.
          </p>
        </div>
      ) : (
        <div className="grid gap-5">
          {planoAberto.refeicoes.map((refeicao) => (
            <Refeicao key={refeicao.titulo} refeicao={refeicao} />
          ))}
        </div>
      )}
    </div>
  );
}

function Texto({ card }) {
  const isProtocolo =
  card.id === "protocolo" ||
  card.id === "protocolo-charles-cutting";

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

function Dieta({ card }) {
  return (
    <div className="grid gap-5">
      {card.refeicoes.map((refeicao) => (
        <Refeicao key={refeicao.titulo} refeicao={refeicao} />
      ))}
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

      {refeicao.observacao && (
        <div className="mt-5 rounded-2xl border border-[#a3ff12]/20 bg-[#a3ff12]/10 p-4 text-sm text-[#ddff8a]">
          {refeicao.observacao}
        </div>
      )}

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
