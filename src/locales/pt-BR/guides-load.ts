import type {
  FaqItem,
  GuideAnswer,
  WorkedExampleContent,
} from "@/lib/content-types";
import type { ExtinguisherExample, StorageExample } from "@/lib/examples";
import { formatNumber } from "@/lib/format";
import { risk } from "./calculators";

const n = (value: number, digits = 0) => formatNumber(value, digits);
const lowerFirst = (text: string) =>
  text.charAt(0).toLowerCase() + text.slice(1);
const units = (count: number) =>
  `${n(count)} ${count === 1 ? "unidade" : "unidades"}`;

export const extinguishersGuide = {
  answers: [
    {
      id: "como-calcular",
      question: "Como calcular a quantidade de extintores?",
      answer:
        "A quantidade de extintores parte de duas regras: a capacidade extintora mínima e a distância máxima que uma pessoa pode andar até alcançar um extintor. As duas dependem do risco, que vem da carga de incêndio da ocupação. A FireLoad divide a área do pavimento pela área que cada extintor cobre, ajustada pelos obstáculos.",
    },
    {
      id: "distancia-maxima",
      question: "Qual a distância máxima até um extintor?",
      answer:
        "Pela Tabela 1 da IT 21/2025, a distância máxima de caminhamento até um extintor portátil é de 25 metros em risco baixo, 20 metros em risco médio e 15 metros em risco alto. Para extintores sobre rodas, esses valores são acrescidos da metade.",
      table: {
        caption: "Distância máxima de caminhamento (IT 21/2025, Tabela 1)",
        head: ["Risco", "Extintor portátil", "Extintor sobre rodas"],
        rows: [
          ["Baixo", "25 m", "37,5 m"],
          ["Médio", "20 m", "30 m"],
          ["Alto", "15 m", "22,5 m"],
        ],
      },
      points: [
        "A calculadora usa as distâncias por classe de fogo da ABNT NBR 12693:2021: 25, 20 e 15 m para classe A e 15 m para classe B.",
      ],
      quote: {
        text: "Os extintores portáteis devem ser distribuídos de tal forma que o operador não percorra distância maior do que a estabelecida na tabela 1.",
        source: "IT 21/2025, item 4.1.4",
      },
    },
    {
      id: "capacidade-extintora",
      question: "Qual a capacidade extintora mínima de cada extintor?",
      answer:
        "A IT 21/2025 fixa a capacidade mínima para que um extintor portátil conte como uma unidade extintora. O valor muda com o agente: 2-A para água, 2-A:10-B para espuma mecânica, 5-B:C para CO₂ e halogenado, 20-B:C para pó BC e 2-A:20-B:C para pó ABC.",
      table: {
        caption:
          "Capacidade extintora mínima do extintor portátil (IT 21/2025, item 4.1.1)",
        head: ["Carga do extintor", "Capacidade mínima"],
        rows: [
          ["Água", "2-A"],
          ["Espuma mecânica", "2-A : 10-B"],
          ["Dióxido de carbono (CO₂)", "5-B:C"],
          ["Pó BC", "20-B:C"],
          ["Pó ABC", "2-A : 20-B:C"],
          ["Halogenado", "5-B:C"],
        ],
      },
    },
    {
      id: "minimo-por-pavimento",
      question: "Quantos extintores cada pavimento precisa, no mínimo?",
      answer:
        "Todo pavimento precisa de pelo menos dois extintores, um para classe A e outro para classes B e C, ou duas unidades iguais de pó ABC. No Estado de São Paulo, uma única unidade de pó ABC só é aceita em áreas construídas inferiores a 50 m².",
      quote: {
        text: "Todos os pavimentos devem ser protegidos por, no mínimo, dois extintores, na proporção de uma unidade para classe A e outra para classe B e C. É permitida a instalação de duas unidades extintoras iguais de pó ABC.",
        source: "IT 21/2025, item 4.2.1.5",
      },
    },
    {
      id: "onde-instalar",
      question: "Onde e a que altura instalar o extintor?",
      answer:
        "Extintores de parede ficam com o suporte a no máximo 1,6 m do piso e a parte de baixo a pelo menos 0,10 m. Eles não podem ser instalados em escadas, devem ficar desobstruídos e sinalizados, e ao menos um deve estar a até 5 m da entrada principal e das escadas.",
      points: [
        "Altura máxima do suporte: 1,6 m do piso (item 4.2.1.1).",
        "Parte inferior do extintor: no mínimo 0,10 m do piso (item 4.2.1.1).",
        "Proibido instalar em escadas (item 4.2.1.4).",
        "Um extintor a no máximo 5 m da entrada principal e das escadas nos demais pavimentos (item 4.2.1.12.3).",
      ],
    },
  ] satisfies GuideAnswer[],
  steps: [
    "Busque a atividade da edificação pelo nome, como escritório, igreja ou restaurante.",
    "Informe a área construída do pavimento, em metro quadrado.",
    "Confira a carga de incêndio de referência e a classe de risco que a norma atribui à ocupação.",
    "Escolha o cenário de obstáculos mais próximo do layout real e anote a estimativa por classe.",
  ],
  example: (ex: ExtinguisherExample): WorkedExampleContent => {
    const { estimate, occupancy } = ex;
    const a = estimate.classA;
    const b = estimate.classB;
    return {
      title: `Exemplo resolvido: escritório de ${n(ex.areaM2)} m²`,
      intro:
        "Os números abaixo saem do mesmo motor de cálculo da calculadora, então batem exatamente com o que ela mostra.",
      scenario: `${occupancy.descricao} (divisão ${occupancy.divisao}) com ${n(ex.areaM2)} m² de área construída.`,
      steps: [
        `O Anexo A da IT 14/2025 dá a esta ocupação uma carga de incêndio de ${n(occupancy.carga)} MJ/m².`,
        `${n(occupancy.carga)} MJ/m² está na faixa "${lowerFirst(risk[ex.risk].range)}": ${lowerFirst(risk[ex.risk].label)}.`,
        `Classe A: capacidade mínima ${a.capacity} e até ${a.travelDistanceM} m de caminhamento. Um extintor cobre π × ${a.travelDistanceM}² ≈ ${n(a.coverageAreaM2.free, 1)} m² em livre acesso, então ${units(a.count.free)} ${a.count.free === 1 ? "atende" : "atendem"} ${n(ex.areaM2)} m².`,
        `Classe B: capacidade mínima ${b.capacity} e até ${b.travelDistanceM} m, cobrindo ≈ ${n(b.coverageAreaM2.free, 1)} m² em livre acesso: ${units(b.count.free)}.`,
        `Com muitos obstáculos (coeficiente 0,1), a área coberta cai para um décimo e a estimativa sobe para ${n(a.count.many)} extintores classe A e ${n(b.count.many)} classe B.`,
      ],
      result: `Estimativa de ${n(a.count.free + b.count.free)} extintores em livre acesso e ${n(a.count.many + b.count.many)} com muitos obstáculos, sempre com no mínimo dois por pavimento.`,
      note: "A distribuição final depende da planta e deve ser definida por profissional habilitado.",
    };
  },
  faq: [
    {
      q: "De onde vem a carga de incêndio de cada ocupação?",
      a: "Do Anexo A da IT 14/2025 do Corpo de Bombeiros de São Paulo, que lista 809 atividades com a divisão e a carga de incêndio específica em MJ/m². A tabela completa está publicada na FireLoad em texto pesquisável.",
    },
    {
      q: "E se a minha atividade não estiver na lista?",
      a: "A IT 14/2025 permite definir a carga de incêndio por similaridade: 'Ocupações não listadas nas tabelas dos Anexos A e B podem ter os valores da carga de incêndio específica determinados por similaridade' (item 4.2). Escolha a atividade mais parecida e registre o critério no projeto.",
    },
    {
      q: "Depósitos usam esta calculadora?",
      a: "Não. Pelo item 4.3 da IT 14/2025, os depósitos (Grupo J) usam obrigatoriamente a tabela do Anexo B, que define a carga de incêndio pelo material e pela altura de armazenamento. Para eles, use a calculadora de carga de incêndio de depósitos.",
    },
    {
      q: "O extintor de pó ABC substitui os outros?",
      a: "Sim. Pelo item 4.2.1.6 da IT 21/2025, o extintor de pó ABC pode substituir qualquer extintor das classes específicas A, B e C dentro de uma edificação ou área de risco.",
    },
    {
      q: "Por que a calculadora mostra três quantidades?",
      a: "Porque a norma fixa a distância máxima, e não uma quantidade por metro quadrado. Paredes, prateleiras e salas encurtam o caminho real até o extintor. Os cenários livre acesso, poucos obstáculos e muitos obstáculos usam coeficientes 1,0, 0,5 e 0,1 sobre a área coberta.",
    },
  ] satisfies FaqItem[],
};

export const storageGuide = {
  answers: [
    {
      id: "como-calcular-deposito",
      question: "Como calcular a carga de incêndio de um depósito?",
      answer:
        "Em depósitos, a carga de incêndio não sai da soma de massas. A IT 14/2025 manda usar a tabela do Anexo B, que dá a carga de incêndio em MJ/m² conforme o material armazenado e a altura das pilhas, de 1 a 10 metros. Entre as alturas da tabela, a norma permite interpolar.",
      quote: {
        text: "As ocupações do Grupo “J” devem adotar obrigatoriamente a tabela relativa à altura de armazenagem constante do Anexo B.",
        source: "IT 14/2025, item 4.3",
      },
    },
    {
      id: "interpolacao",
      question: "Como interpolar a carga de incêndio entre duas alturas?",
      answer:
        "Quando a altura de armazenamento fica entre duas colunas da tabela, a carga de incêndio é calculada por interpolação linear. Pegue os valores das alturas vizinhas e some ao menor a fração da diferença correspondente à altura real. A nota do Anexo B diz: 'Pode haver interpolação entre os valores.'",
      points: [
        "q = q₁ + (h − h₁) / (h₂ − h₁) × (q₂ − q₁)",
        "h: altura de armazenamento real, em metros.",
        "h₁ e h₂: alturas da tabela logo abaixo e logo acima de h.",
        "q₁ e q₂: cargas de incêndio da tabela para h₁ e h₂, em MJ/m².",
      ],
    },
    {
      id: "fora-da-tabela",
      question: "E se a altura for menor que 1 m ou maior que 10 m?",
      answer:
        "O Anexo B só tabela alturas de 1 a 10 metros. A FireLoad não extrapola fora dessa faixa, porque a norma não traz valores para ela. Nesses casos, o enquadramento deve ser analisado por profissional habilitado junto às demais regras da IT 14/2025.",
    },
  ] satisfies GuideAnswer[],
  steps: [
    "Busque o material armazenado, como papel, pneus ou paletes de madeira.",
    "Informe a altura de armazenamento, em metros, entre 1 e 10 m.",
    "Informe a área de armazenamento do pavimento para estimar os extintores.",
    "Leia a carga de incêndio, a classe de risco e a estimativa de extintores por cenário.",
  ],
  example: (ex: StorageExample): WorkedExampleContent => {
    const a = ex.estimate.classA;
    const b = ex.estimate.classB;
    return {
      title: `Exemplo resolvido: depósito de papel com pilhas de ${n(ex.heightM)} m`,
      intro:
        "O cálculo abaixo usa a tabela e o motor de cálculo da própria calculadora.",
      scenario: `Depósito de papel com pilhas de ${n(ex.heightM)} m de altura em ${n(ex.areaM2)} m² de área de armazenamento.`,
      steps: [
        `No Anexo B, papel tem ${n(ex.lower.load)} MJ/m² a ${n(ex.lower.heightM)} m e ${n(ex.upper.load)} MJ/m² a ${n(ex.upper.heightM)} m de altura.`,
        `Interpolando para ${n(ex.heightM)} m: ${n(ex.lower.load)} + (${n(ex.heightM)} − ${n(ex.lower.heightM)}) / (${n(ex.upper.heightM)} − ${n(ex.lower.heightM)}) × (${n(ex.upper.load)} − ${n(ex.lower.load)}) = ${n(ex.load)} MJ/m².`,
        `${n(ex.load)} MJ/m² está na faixa "${lowerFirst(risk[ex.risk].range)}": ${lowerFirst(risk[ex.risk].label)}.`,
        `Classe A ${a.capacity} e classe B ${b.capacity}, com até ${a.travelDistanceM} m de caminhamento: ${n(a.count.free)} + ${n(b.count.free)} extintores em livre acesso.`,
      ],
      result: `Carga de incêndio de ${n(ex.load)} MJ/m², ${lowerFirst(risk[ex.risk].label)}. Estimativa de ${n(a.count.free + b.count.free)} extintores em livre acesso e ${n(a.count.many + b.count.many)} com muitos obstáculos.`,
      note: "Em depósitos, vale a tabela do Anexo B. A soma de massas do Anexo C fica para explosivos e ocupações especiais sem carga tabelada.",
    };
  },
  faq: [
    {
      q: "A soma de massas (Anexo C) vale para depósitos?",
      a: "Não. Pelo item 4.1 da IT 14/2025, o método determinístico do Anexo C se aplica a explosivos (Grupo L) e ocupações especiais (Grupo M) sem carga de incêndio pré-definida. Depósitos (Grupo J) seguem obrigatoriamente o Anexo B.",
    },
    {
      q: "Meu material não está no Anexo B. E agora?",
      a: "O item 4.2 da IT 14/2025 admite definir a carga de incêndio por similaridade para ocupações não listadas nos Anexos A e B. Use o material de comportamento mais próximo e documente a escolha no projeto.",
    },
    {
      q: "A tabela do Anexo B é proporcional à altura?",
      a: "Na prática, sim: em todas as 90 linhas da tabela, a carga de incêndio cresce na mesma proporção da altura de armazenamento, com diferenças apenas de arredondamento. Por isso a interpolação linear reproduz a tabela.",
    },
    {
      q: "Qual área devo informar?",
      a: "A área do pavimento protegida pelos extintores. A carga de incêndio do Anexo B não depende da área, mas a estimativa de extintores sim, porque cada unidade cobre uma área limitada pela distância máxima de caminhamento.",
    },
  ] satisfies FaqItem[],
};
