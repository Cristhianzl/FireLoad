import type {
  FaqItem,
  GuideAnswer,
  WorkedExampleContent,
} from "@/lib/content-types";
import type { ExitsExample, TrrfExample } from "@/lib/examples";
import { formatNumber } from "@/lib/format";

const n = (value: number, digits = 0) => formatNumber(value, digits);
const meters = (value: number) => `${formatNumber(value, 2)} m`;

export const trrfGuide = {
  answers: [
    {
      id: "o-que-e-trrf",
      question: "O que é TRRF?",
      answer:
        "TRRF é o tempo requerido de resistência ao fogo: o tempo mínimo, em minutos, que um elemento estrutural ou de compartimentação precisa resistir ao incêndio-padrão sem colapsar. Ele garante tempo para a saída segura das pessoas e para a entrada do Corpo de Bombeiros. No Estado de São Paulo, o TRRF é definido pela IT 08.",
      quote: {
        text: "Tempo requerido de resistência ao fogo (TRRF): tempo mínimo de resistência ao fogo de um elemento construtivo quando sujeito ao incêndio-padrão.",
        source: "IT 08/2019, item 4.3",
      },
    },
    {
      id: "como-consultar",
      question: "Como descobrir o TRRF de uma edificação?",
      answer:
        "O TRRF sai do cruzamento de duas informações na tabela do Anexo B da IT 08: a divisão de ocupação da edificação e a sua classe de altura. Acima do solo, as classes vão de P1 (até 6 m) a P8 (até 250 m). Em subsolos, a classe é S1 (até 10 m) ou S2 (mais de 10 m).",
      table: {
        caption: "Classes de altura e de subsolo (IT 08, Anexo B)",
        head: ["Classe", "Faixa"],
        rows: [
          ["P1", "h ≤ 6 m"],
          ["P2", "6 m < h ≤ 12 m"],
          ["P3", "12 m < h ≤ 23 m"],
          ["P4", "23 m < h ≤ 30 m"],
          ["P5", "30 m < h ≤ 80 m"],
          ["P6", "80 m < h ≤ 120 m"],
          ["P7", "120 m < h ≤ 150 m"],
          ["P8", "150 m < h ≤ 250 m"],
          ["S1", "hs ≤ 10 m"],
          ["S2", "hs > 10 m"],
        ],
      },
    },
    {
      id: "como-comprovar",
      question: "Como comprovar que a estrutura atende ao TRRF?",
      answer:
        "A IT 08 aceita três caminhos para comprovar o TRRF: ensaios de resistência ao fogo em laboratório, tabelas elaboradas a partir de resultados desses ensaios e modelos matemáticos normatizados ou reconhecidos internacionalmente. Para elementos de compartimentação, só valem os ensaios e as tabelas.",
      points: [
        "Ensaios específicos de resistência ao fogo em laboratórios (item 5.2, a).",
        "Tabelas elaboradas a partir de resultados de ensaios (item 5.2, b).",
        "Modelos matemáticos normatizados ou internacionalmente reconhecidos, aceitos após análise em Comissão Técnica (itens 5.2, c, e 5.2.2).",
      ],
    },
  ] satisfies GuideAnswer[],
  steps: [
    "Busque a divisão de ocupação, como residencial, escritório ou indústria.",
    "Diga se o pavimento analisado fica acima do solo ou no subsolo.",
    "Informe a altura da edificação ou a profundidade do subsolo, em metros.",
    "Leia o TRRF base em minutos e verifique se alguma isenção ou redução se aplica.",
  ],
  example: (ex: TrrfExample): WorkedExampleContent => ({
    title: `Exemplo resolvido: prédio de escritórios com ${n(ex.heightM)} m`,
    intro:
      "A consulta abaixo usa a mesma tabela transcrita que alimenta a calculadora.",
    scenario: `Edifício de escritórios (divisão D-1) com ${n(ex.heightM)} m de altura, sem subsolo.`,
    steps: [
      `A divisão D-1 está na linha "${ex.row.grupoLabel}" (${ex.row.divisao}) do Anexo B da IT 08.`,
      `${n(ex.heightM)} m fica na ${ex.heightClass.label} (${ex.heightClass.range}).`,
      `No cruzamento da linha com a coluna ${ex.heightClass.label}, a tabela indica ${n(ex.minutes)} minutos.`,
    ],
    result: `TRRF base de ${n(ex.minutes)} minutos para os elementos estruturais.`,
    note: "Isenções do Anexo A e reduções do Anexo E da IT 08 podem mudar esse valor e dependem de profissional habilitado.",
  }),
  faq: [
    {
      q: "O TRRF pode ser reduzido?",
      a: "Pode. A IT 08 traz isenções no Anexo A e um procedimento de redução do TRRF no Anexo E. A FireLoad mostra apenas o valor base do Anexo B, porque aplicar isenções e reduções exige análise da edificação por profissional habilitado.",
    },
    {
      q: "A cobertura também precisa atender ao TRRF?",
      a: "Sim, salvo isenção. Pelo item 5.6 da IT 08, as estruturas das coberturas que não atendam aos requisitos de isenção do Anexo A devem ter no mínimo o mesmo TRRF das estruturas principais da edificação.",
    },
    {
      q: "Qual a diferença entre a IT 08 e a NBR 14432?",
      a: "A ABNT NBR 14432 é a norma nacional de exigências de resistência ao fogo de elementos construtivos. A IT 08 é a instrução técnica do Corpo de Bombeiros de São Paulo que define os TRRF exigidos no estado, com tabela própria no Anexo B.",
    },
    {
      q: "Por que algumas células mostram 'ver item'?",
      a: "Porque, para certas divisões e alturas, a própria tabela do Anexo B remete a um item da IT 08 em vez de dar um número. Nesses casos, o TRRF depende das condições descritas naquele item.",
    },
  ] satisfies FaqItem[],
};

export const exitsGuide = {
  answers: [
    {
      id: "como-calcular-largura",
      question: "Como calcular a largura da saída de emergência?",
      answer:
        "A largura da saída de emergência é calculada em unidades de passagem. Divida a população pela capacidade da unidade de passagem do componente (acesso, escada ou porta), arredonde para cima e multiplique por 0,55 m. A população vem dos coeficientes da Tabela 1 da IT 11/2025.",
      points: [
        "N = P ÷ C, arredondado para o número inteiro imediatamente superior.",
        "P: população, pelos coeficientes da Tabela 1 (Anexo A).",
        "C: capacidade da unidade de passagem, também da Tabela 1.",
        "Largura mínima = N × 0,55 m.",
      ],
    },
    {
      id: "unidade-de-passagem",
      question: "O que é unidade de passagem?",
      answer:
        "Unidade de passagem é a largura mínima para a passagem de um fluxo de pessoas, fixada em 0,55 m pela IT 11/2025. A capacidade de uma unidade de passagem é o número de pessoas que passa por ela em 1 minuto, e varia conforme a ocupação e o componente da saída.",
      quote: {
        text: "Unidade de passagem: largura mínima para a passagem de um fluxo de pessoas, fixada em 0,55 m.",
        source: "IT 11/2025, item 4.4.1.2, nota 1",
      },
    },
    {
      id: "largura-minima",
      question: "Qual a largura mínima de uma escada de emergência?",
      answer:
        "Pelo item 4.4.2 da IT 11/2025, acessos, escadas e rampas têm largura mínima de 1,20 m nas ocupações em geral. Nas divisões de saúde H-2 e H-3, escadas e seus acessos precisam de 1,65 m, que equivale a 3 unidades de passagem de 0,55 m.",
      points: [
        "Ocupações em geral: 1,20 m para acessos, escadas e rampas.",
        "Divisões H-2 e H-3: 1,65 m para escadas e seus acessos.",
        "Divisão H-2: 1,65 m para rampas e seus acessos.",
      ],
    },
    {
      id: "calculo-populacao",
      question: "Como calcular a população (lotação) do pavimento?",
      answer:
        "A população de cada pavimento é calculada pelos coeficientes da Tabela 1 da IT 11/2025, conforme a ocupação: por área, como uma pessoa por 5 m² no comércio, ou por elemento, como duas pessoas por dormitório em residências. Acessos seguem o pavimento que servem; escadas, o pavimento de maior população.",
      quote: {
        text: "A população de cada pavimento da edificação é calculada pelos coeficientes da Tabela 1 do Anexo “A” desta IT, considerando a classificação das edificações e áreas de risco quanto à ocupação.",
        source: "IT 11/2025, item 4.3.2",
      },
    },
  ] satisfies GuideAnswer[],
  steps: [
    "Busque a ocupação do pavimento, como comercial, escola ou escritório.",
    "Informe a área do pavimento ou, quando a regra não for por área, a população.",
    "Veja a população calculada e as unidades de passagem de acessos, escadas e portas.",
    "Compare cada largura com os mínimos absolutos do item 4.4.2 da IT 11/2025.",
  ],
  example: (ex: ExitsExample): WorkedExampleContent => {
    const { acessos, escadas, portas } = ex.components;
    const perM2 = ex.density.perM2;
    return {
      title: `Exemplo resolvido: loja com ${n(ex.areaM2)} m²`,
      intro:
        "Os valores saem do mesmo motor de cálculo usado pela calculadora de saídas.",
      scenario: `Loja (divisão C-2) com ${n(ex.areaM2)} m² de área de pavimento.`,
      steps: [
        `A Tabela 1 da IT 11 dá ${ex.row.popRule.toLowerCase()} para o grupo C: ${n(ex.areaM2)} ÷ ${n(perM2)} = ${n(ex.population)} pessoas.`,
        `Acessos e descargas, ${n(ex.row.cap.acessos)} pessoas por unidade: ${n(ex.population)} ÷ ${n(ex.row.cap.acessos)} → ${n(acessos.units)} UP = ${meters(acessos.widthM)}.`,
        `Escadas e rampas, ${n(ex.row.cap.escadas)} pessoas por unidade: ${n(ex.population)} ÷ ${n(ex.row.cap.escadas)} → ${n(escadas.units)} UP = ${meters(escadas.widthM)}.`,
        `Portas, ${n(ex.row.cap.portas)} pessoas por unidade: ${n(ex.population)} ÷ ${n(ex.row.cap.portas)} → ${n(portas.units)} UP = ${meters(portas.widthM)}.`,
        `O item 4.4.2 fixa ${meters(ex.minWidthM)} como mínimo para acessos e escadas. O que ficar abaixo disso sobe para ${meters(ex.minWidthM)}.`,
      ],
      result: `${n(ex.population)} pessoas. Acessos com ${meters(Math.max(acessos.widthM, ex.minWidthM))}, escadas com ${meters(Math.max(escadas.widthM, ex.minWidthM))} e portas com ${meters(portas.widthM)} de largura total.`,
      note: "Número de saídas, distâncias máximas a percorrer e demais requisitos da IT 11 precisam ser verificados à parte.",
    };
  },
  faq: [
    {
      q: "Áreas de sacadas e terraços entram no cálculo da população?",
      a: "Entram, exceto nas ocupações dos grupos A, B e H. O item 4.3.3 da IT 11/2025 inclui na área do pavimento, só para o cálculo da população, as áreas de terraços, sacadas, beirais e platibandas.",
    },
    {
      q: "Posso descontar banheiros da área?",
      a: "Sim. Pelo item 4.3.4 da IT 11/2025, as áreas de sanitários podem ser excluídas do cálculo da população em todas as ocupações. Corredores e elevadores também podem sair nas ocupações D e E, e áreas de elevadores nas ocupações C e F.",
    },
    {
      q: "A calculadora define quantas saídas a edificação precisa?",
      a: "Não. Ela calcula a população e a largura por unidades de passagem. Número mínimo de saídas, distâncias máximas a percorrer e tipo de escada dependem de outros itens da IT 11/2025 e de profissional habilitado.",
    },
    {
      q: "A IT 11 vale para estádios e arenas?",
      a: "Não para os grandes. Pelo item 2.1 da IT 11/2025, as divisões F-3 e F-7 com população total acima de 2.500 pessoas seguem a IT 12, de centros esportivos e de exibição.",
    },
  ] satisfies FaqItem[],
};
