import type { GuideAnswer } from "@/lib/content-types";

export const home = {
  eyebrow: "Segurança contra incêndio",
  h1: "Calculadora de carga de incêndio",
  sub: "Some as massas dos materiais, informe a área e receba a carga de incêndio específica, a classe de risco e uma estimativa de extintores, pelo método do Anexo C da IT 14/2025.",
  ctaPrimary: "Calcular carga de incêndio",
  ctaSecondary: "Buscar carga por ocupação",
  trustLine:
    "Baseado na IT 14/2025, IT 21/2025, ABNT NBR 12693:2021 e NBR 14432.",
  answers: [
    {
      id: "o-que-e-carga-de-incendio",
      question: "O que é carga de incêndio?",
      answer:
        "Carga de incêndio é a energia que todos os materiais combustíveis de um ambiente podem liberar ao queimar. Dividida pela área do piso, ela vira a carga de incêndio específica, medida em megajoule por metro quadrado (MJ/m²), que classifica o risco da edificação e define o nível de exigência das medidas de segurança contra incêndio.",
      quote: {
        text: "Esta Instrução Técnica (IT) aplica-se às edificações e áreas de risco para classificação do risco e determinação do nível de exigência das medidas de segurança contra incêndio, atendendo ao previsto no Regulamento de segurança contra incêndio das edificações e áreas de risco do Estado de São Paulo.",
        source: "IT 14/2025, item 2",
      },
    },
    {
      id: "risco-baixo-medio-alto",
      question: "Qual carga de incêndio é risco baixo, médio ou alto?",
      answer:
        "A carga de incêndio específica de até 300 MJ/m² classifica a edificação como risco baixo. Acima de 300 e até 1200 MJ/m², o risco é médio. Acima de 1200 MJ/m², o risco é alto. A classe de risco define a capacidade dos extintores e a distância máxima até eles.",
      table: {
        caption: "Classificação do risco pela carga de incêndio específica",
        head: ["Classe de risco", "Carga de incêndio específica"],
        rows: [
          ["Baixo", "até 300 MJ/m²"],
          ["Médio", "acima de 300 até 1200 MJ/m²"],
          ["Alto", "acima de 1200 MJ/m²"],
        ],
      },
    },
    {
      id: "tabela-ou-calculo",
      question: "Quando usar a tabela e quando calcular a carga de incêndio?",
      answer:
        "Na maioria das edificações, a carga de incêndio vem pronta das tabelas da IT 14/2025: o Anexo A traz o valor por ocupação e o Anexo B, por altura de armazenamento em depósitos. A soma de massas do Anexo C é para explosivos e ocupações especiais sem carga pré-definida.",
      quote: {
        text: "Para edificações destinadas a explosivos (Grupo “L”) e ocupações especiais (Grupo “M”), que não possuam carga de incêndio pré-definida conforme o Anexo A, aplica-se a metodologia constante do Anexo C (método determinístico).",
        source: "IT 14/2025, item 4.1",
      },
    },
    {
      id: "area-do-levantamento",
      question: "Qual área usar no levantamento da carga de incêndio?",
      answer:
        "Pela IT 14/2025, o levantamento pelo Anexo C é feito em módulos de no máximo 1000 m² de piso. Módulos maiores só valem quando os materiais têm potencial calorífico parecido e estão distribuídos por igual. A carga do piso analisado é a média dos 2 módulos de maior valor.",
      quote: {
        text: "O levantamento da carga de incêndio específica constante do Anexo C deve ser realizado em módulos de, no máximo, 1000 m² de área de piso considerado para o cálculo.",
        source: "IT 14/2025, item 4.4",
      },
    },
  ] satisfies GuideAnswer[],
  howTitle: "Como o cálculo é feito",
  howSub:
    "Nada aqui é chute. A conta segue a fórmula da norma e o resultado aponta a fonte.",
  featuresTitle: "Outras calculadoras",
  featuresSub:
    "Cada uma segue a tabela ou a fórmula da instrução técnica correspondente.",
  answersTitle: "Carga de incêndio em poucas palavras",
  tablesTitle: "Tabelas oficiais em texto pesquisável",
  tablesSub:
    "Os valores das instruções técnicas que as calculadoras usam, abertos para consulta linha a linha.",
  openSourceTitle: "Aberto de ponta a ponta",
  openSourceText:
    "O código é público sob licença MIT. Qualquer pessoa pode ver exatamente como cada conta é feita e conferir contra a norma. Por trás da ferramenta existe o ExtinFire, um trabalho acadêmico de conclusão de curso em Engenharia Civil de 2018.",
};

export const methodology = {
  h1: "Metodologia e fórmulas",
  intro:
    "Esta página descreve, passo a passo, como a FireLoad calcula a carga de incêndio, classifica o risco e estima a quantidade de extintores. Toda regra aponta a norma de onde saiu.",
  section1Title: "1. Carga de incêndio específica (Anexo C)",
  section1Body:
    "A carga de incêndio específica é a energia que os materiais combustíveis de um ambiente liberariam ao queimar, dividida pela área do piso. O método determinístico do Anexo C da IT 14/2025 usa a soma da massa de cada material multiplicada pelo seu potencial calorífico específico.",
  section1Formula: "qfi = Σ (Mi × Hi) / Af",
  section1Legend: [
    "qfi: carga de incêndio específica, em MJ/m².",
    "Mi: massa total de cada material combustível, em kg.",
    "Hi: potencial calorífico específico do material, em MJ/kg (Tabela C.1 da IT 14/2025).",
    "Af: área do piso considerada para o cálculo, em m².",
  ],
  section1Note:
    "Pelos itens 4.1, 4.4 e 4.4.1 da IT 14/2025, este método vale para explosivos (Grupo L) e ocupações especiais (Grupo M) sem carga tabelada. O levantamento é feito em módulos de até 1000 m² de piso, e a carga do piso é a média dos 2 módulos de maior valor.",
  storageTitle: "2. Carga de incêndio de depósitos (Anexo B)",
  storageBody:
    "Depósitos (Grupo J) não usam a soma de massas. Pelo item 4.3 da IT 14/2025, a carga de incêndio sai da tabela do Anexo B, pelo material armazenado e pela altura de armazenamento, de 1 a 10 metros. Entre as alturas tabeladas, a nota do Anexo B permite interpolar.",
  storageFormula: "q = q₁ + (h − h₁) / (h₂ − h₁) × (q₂ − q₁)",
  storageLegend: [
    "q: carga de incêndio do depósito na altura h, em MJ/m².",
    "h₁ e h₂: alturas da tabela logo abaixo e logo acima de h, em metros.",
    "q₁ e q₂: cargas de incêndio da tabela nessas alturas.",
    "Fora da faixa de 1 a 10 m a ferramenta não extrapola, porque a tabela não traz valores.",
  ],
  section2Title: "3. Classificação do risco",
  section2Body:
    "Com a carga de incêndio em mãos, o risco é classificado em três faixas, conforme a NBR 14432 e o Regulamento de Segurança Contra Incêndio do Estado de São Paulo.",
  section3Title: "4. Capacidade extintora e distância",
  section3Body:
    "A capacidade extintora mínima e a distância máxima a percorrer até um extintor vêm das Tabelas 6 e 7 da ABNT NBR 12693:2021, alinhadas à Tabela 1 da IT 21/2025.",
  section4Title: "5. Estimativa da quantidade",
  section4Body:
    "A norma define a capacidade e a distância, mas não uma fórmula fechada de quantidade. A FireLoad estima o número de extintores pela área que cada um cobre: um círculo de raio igual à distância máxima a percorrer, reduzido conforme os obstáculos do ambiente. Esse é o método proposto no ExtinFire, o trabalho de conclusão de curso de 2018 que deu origem à ferramenta, validado contra projetos reais.",
  section4Formula: "N = teto( Af / (π × d² × coeficiente) )",
  section4Legend: [
    "N: número estimado de extintores.",
    "Af: área do piso, em m².",
    "d: distância máxima a percorrer da tabela, em metros.",
    "coeficiente: livre acesso 1,0, poucos obstáculos 0,5, muitos obstáculos 0,1.",
  ],
  section4Note:
    "Por ser uma estimativa geométrica, o resultado é um ponto de partida. O projeto final é sempre responsabilidade de profissional habilitado.",
  trrfTitle: "6. TRRF (tempo requerido de resistência ao fogo)",
  trrfBody:
    "O TRRF é o tempo, em minutos, que os elementos estruturais precisam resistir ao fogo. A consulta usa a tabela do Anexo B da IT 08, cruzando a divisão de ocupação com a classe de altura da edificação (P1 a P8) ou a profundidade do subsolo (S1 e S2).",
  trrfClassesTitle: "Classes de altura (pavimentos acima do solo)",
  trrfNote:
    "A ferramenta faz a consulta base da tabela. Ela não aplica as isenções do Anexo A nem as reduções do Anexo E da IT 08, que dependem de profissional habilitado.",
  exitsTitle: "7. Lotação e saídas de emergência",
  exitsBody:
    "A população de um pavimento vem de um coeficiente por ocupação (Tabela 1 da IT 11): por área, por dormitório, por leito ou por vaga. A largura das saídas é dimensionada por unidades de passagem, cada uma com 0,55 m.",
  exitsFormula: "N = teto( População / C )   e   Largura = N × 0,55 m",
  exitsLegend: [
    "População: coeficiente da Tabela 1 aplicado à área ou aos elementos do ambiente.",
    "C: capacidade da unidade de passagem, por componente (acessos e descargas, escadas e rampas, portas).",
    "N: número de unidades de passagem, sempre arredondado para cima.",
    "Largura: N multiplicado por 0,55 m.",
  ],
  exitsNote:
    "A ferramenta calcula a largura por unidades de passagem. Larguras mínimas absolutas, número mínimo de saídas e distâncias máximas a percorrer dependem dos demais itens da IT 11 e de profissional habilitado.",
};

export const methodologyTable = {
  fireClass: "Classe de fogo",
  low: "Risco baixo",
  medium: "Risco médio",
  high: "Risco alto",
  classA: "Classe A",
  classB: "Classe B",
};

export const norms = {
  h1: "Normas de referência",
  intro:
    "Todo cálculo da FireLoad sai de uma destas fontes oficiais. As versões abaixo eram as vigentes na última atualização da ferramenta. Consulte sempre a publicação oficial mais recente.",
  updatedAt: "Última verificação das versões: setembro de 2026.",
  usageTitle: "Onde cada norma é usada",
  usage: {
    it14: "Cargas de incêndio por ocupação (Anexo A) e por altura de armazenamento em depósitos (Anexo B), fórmula da carga de incêndio específica (Anexo C) e tabela de potenciais caloríficos (Tabela C.1).",
    it08: "Tabela de tempo requerido de resistência ao fogo (TRRF) por ocupação e altura, no Anexo B.",
    it11: "Coeficientes de população e capacidade das unidades de passagem para o dimensionamento das saídas (Tabela 1).",
    it21: "Critérios de proteção por extintores e distância máxima a percorrer no Estado de São Paulo.",
    nbr12693:
      "Capacidade extintora mínima e distância por classe de risco (Tabelas 6 e 7).",
    nbr14432:
      "Classificação da carga de incêndio em risco baixo, médio e alto.",
    tcc: "Método de estimativa da quantidade de extintores por área coberta.",
  },
  publicationLabel: "Publicação",
  publication: {
    it14: "Atualizada pela Portaria nº CCB 003/800/25, Diário Oficial do Estado de 20/03/2025.",
    it21: "Atualizada pela Portaria nº CCB 003/800/25, Diário Oficial do Estado de 20/03/2025.",
    it11: "Atualizada pela Portaria nº CCB 003/800/25, Diário Oficial do Estado de 20/03/2025.",
    it08: "Atualizada pela Portaria nº CCB 021/800/20, Diário Oficial do Estado nº 132, de 04/07/2020.",
  } as Record<string, string>,
};

export const about = {
  h1: "Sobre a FireLoad",
  body1:
    "A FireLoad é a reconstrução do ExtinFire, aplicativo criado em um trabalho de conclusão de curso em Engenharia Civil na Universidade Federal de Uberlândia, defendido em 2018. A ideia era simples: transformar as contas de carga de incêndio, que costumam ficar presas em planilhas e tabelas, em uma ferramenta rápida e confiável.",
  body2:
    "Esta versão web refaz aquele aplicativo do zero, agora aberta a todos e atualizada para as normas vigentes. É uma calculadora processadora: tudo acontece no seu navegador, sem cadastro e sem guardar dados pessoais.",
  body3:
    "O código é público sob licença MIT justamente para que qualquer pessoa possa auditar como cada número é calculado. Segurança contra incêndio se faz com transparência.",
  tccTitle: "O estudo por trás",
  tccText:
    "Leia o trabalho de conclusão de curso completo no repositório da UFU.",
  tccLink: "Ver o TCC na UFU",
  author:
    "Autoria: Cristhian Zanforlin Lousa, engenheiro civil formado pela Universidade Federal de Uberlândia (UFU). O método e os dados vêm das normas citadas e do trabalho de conclusão de curso.",
  authorTitle: "Quem mantém a ferramenta",
  authorProfile: "Perfil no GitHub",
  knowsAbout: [
    "Carga de incêndio",
    "Segurança contra incêndio em edificações",
    "Dimensionamento de extintores de incêndio",
    "Instruções Técnicas do Corpo de Bombeiros de São Paulo",
  ],
  updatesTitle: "Como as normas são verificadas",
  updatesText:
    "Cada valor foi transcrito da publicação oficial da norma e é conferido por testes automatizados. Quando uma instrução técnica é atualizada, a tabela correspondente é revisada e a data de verificação muda na página de normas.",
};

export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      q: "Como a carga de incêndio é calculada?",
      a: "Somando a massa de cada material combustível multiplicada pelo seu potencial calorífico específico, e dividindo pela área do piso. É a fórmula do Anexo C da IT 14/2025: qfi = Σ (Mi × Hi) / Af.",
    },
    {
      q: "A quantidade de extintores é exata?",
      a: "Não. A norma define a capacidade e a distância máxima a percorrer, mas a quantidade depende do layout real. A FireLoad dá uma estimativa por área coberta, considerando o nível de obstáculos do ambiente. O número final deve ser definido por profissional habilitado.",
    },
    {
      q: "A ferramenta serve para aprovar projeto no Corpo de Bombeiros?",
      a: "Ela ajuda no dimensionamento, mas não substitui o projeto técnico. O projeto de segurança contra incêndio precisa de responsável técnico habilitado e da aprovação do Corpo de Bombeiros.",
    },
    {
      q: "A FireLoad é gratuita?",
      a: "Sim, é gratuita e de código aberto sob licença MIT. Você pode conferir todos os cálculos no repositório público do projeto.",
    },
    {
      q: "Como calcular a carga de incêndio de um depósito?",
      a: "Pela IT 14/2025, depósitos (Grupo J) usam obrigatoriamente a tabela do Anexo B, que dá a carga de incêndio em MJ/m² pelo material armazenado e pela altura de armazenamento, de 1 a 10 metros. Entre as alturas da tabela, a norma permite interpolar. A FireLoad tem uma calculadora própria para depósitos.",
    },
    {
      q: "O que significa MJ/m²?",
      a: "Megajoule por metro quadrado. É a unidade da carga de incêndio: quanta energia por metro quadrado de piso os materiais do ambiente poderiam liberar ao queimar. Quanto maior, maior o risco.",
    },
    {
      q: "Quantos extintores são necessários por metro quadrado?",
      a: "A norma não define uma quantidade fixa por metro quadrado. Ela define a capacidade extintora mínima e a distância máxima a percorrer até um extintor. A FireLoad estima a quantidade pela área que cada extintor cobre, ajustada pelos obstáculos do local.",
    },
    {
      q: "Qual a diferença entre a IT 14 e a NBR 12693?",
      a: "A IT 14 do Corpo de Bombeiros de São Paulo trata da carga de incêndio (quanto o ambiente pode queimar). A ABNT NBR 12693 trata do sistema de proteção por extintores (capacidade e distância). A FireLoad usa a IT 14 para a carga e a NBR 12693, junto da IT 21, para os extintores.",
    },
  ],
};

export const glossary = {
  title: "Glossário rápido",
  intro: "Os termos que aparecem no cálculo, explicados em uma linha.",
  items: [
    {
      term: "Carga de incêndio",
      def: "Energia que os materiais combustíveis de um ambiente liberariam ao queimar, dividida pela área do piso. Medida em MJ/m².",
    },
    {
      term: "Carga de incêndio específica (qfi)",
      def: "A carga de incêndio calculada para um ambiente específico pelo método do Anexo C da IT 14/2025.",
    },
    {
      term: "Potencial calorífico (Hi)",
      def: "Energia que 1 kg de um material libera ao queimar, em MJ/kg. Vem da Tabela C.1 da IT 14/2025.",
    },
    {
      term: "Classe de risco",
      def: "Baixo (até 300 MJ/m²), médio (300 a 1200) ou alto (acima de 1200), conforme a NBR 14432.",
    },
    {
      term: "Capacidade extintora",
      def: "A eficácia mínima do extintor, como 2-A ou 20-B, definida na NBR 12693:2021.",
    },
    {
      term: "Altura de armazenamento",
      def: "Altura das pilhas ou prateleiras de um depósito. Define a carga de incêndio no Anexo B da IT 14/2025.",
    },
    {
      term: "TRRF",
      def: "Tempo requerido de resistência ao fogo: tempo mínimo que um elemento construtivo resiste ao incêndio-padrão (IT 08).",
    },
    {
      term: "Unidade de passagem",
      def: "Largura de 0,55 m usada para dimensionar acessos, escadas e portas de saídas de emergência (IT 11/2025).",
    },
    {
      term: "Distância máxima a percorrer",
      def: "O maior caminho que uma pessoa pode andar até alcançar um extintor, conforme o risco.",
    },
  ],
};

export const example = {
  title: "Exemplo resolvido",
  intro:
    "O exemplo do trabalho de conclusão de curso que deu origem à ferramenta, para mostrar a fórmula do Anexo C do começo ao fim.",
  scenario: "Depósito de papel: 60.000 kg de papel (Hi 17 MJ/kg) em 1.500 m².",
  steps: [
    "Multiplique a massa pelo potencial calorífico: 60.000 kg × 17 MJ/kg = 1.020.000 MJ.",
    "Divida pela área do piso: 1.020.000 MJ / 1.500 m² = 680 MJ/m².",
    "Classifique o risco: 680 MJ/m² fica entre 300 e 1200, então é risco médio.",
    "Para risco médio, a capacidade mínima classe A é 3-A, com distância máxima de 20 m.",
  ],
  result: "Carga de incêndio de 680 MJ/m², risco médio.",
  note: "O caso ilustra a fórmula. Pela IT 14/2025, um depósito real usa a tabela do Anexo B, pelo material e pela altura de armazenamento.",
};
