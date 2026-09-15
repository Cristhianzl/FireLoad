export const home = {
  eyebrow: "Segurança contra incêndio",
  h1: "Calculadora de carga de incêndio",
  sub: "Some as massas dos materiais, informe a área e receba a carga de incêndio específica, a classe de risco e uma estimativa de extintores. Tudo baseado nas normas vigentes.",
  ctaPrimary: "Calcular carga de incêndio",
  ctaSecondary: "Estimar por ocupação",
  trustLine:
    "Baseado na IT 14/2025, IT 21/2025, ABNT NBR 12693:2021 e NBR 14432.",
  howTitle: "Como o cálculo é feito",
  howSub:
    "Nada aqui é chute. A conta segue a fórmula da norma e o resultado aponta a fonte.",
  featuresTitle: "Duas formas de calcular",
  feature1Title: "Por material",
  feature1Text:
    "Para depósitos e ocupações especiais sem carga tabelada. Você informa a massa de cada material combustível e a área do piso.",
  feature2Title: "Por ocupação",
  feature2Text:
    "Para as ocupações já tabeladas na norma. Busque a atividade e use a carga de incêndio de referência.",
  openSourceTitle: "Aberto de ponta a ponta",
  openSourceText:
    "O código é público sob licença MIT. Qualquer pessoa pode ver exatamente como cada conta é feita e conferir contra a norma. Por trás da ferramenta existe o ExtinFire, um trabalho acadêmico de conclusão de curso em Engenharia Civil de 2018.",
};

export const methodology = {
  h1: "Metodologia e fórmulas",
  intro:
    "Esta página descreve, passo a passo, como a FireLoad calcula a carga de incêndio, classifica o risco e estima a quantidade de extintores. Toda regra aponta a norma de onde saiu.",
  section1Title: "1. Carga de incêndio específica",
  section1Body:
    "A carga de incêndio específica é a energia que os materiais combustíveis de um ambiente liberariam ao queimar, dividida pela área do piso. O método determinístico do Anexo C da IT 14/2025 usa a soma da massa de cada material multiplicada pelo seu potencial calorífico específico.",
  section1Formula: "qfi = Σ (Mi × Hi) / Af",
  section1Legend: [
    "qfi: carga de incêndio específica, em MJ/m².",
    "Mi: massa total de cada material combustível, em kg.",
    "Hi: potencial calorífico específico do material, em MJ/kg (Tabela C.1 da IT 14/2025).",
    "Af: área do piso considerada para o cálculo, em m².",
  ],
  section2Title: "2. Classificação do risco",
  section2Body:
    "Com a carga de incêndio em mãos, o risco é classificado em três faixas, conforme a NBR 14432 e o Regulamento de Segurança Contra Incêndio do Estado de São Paulo.",
  section3Title: "3. Capacidade extintora e distância",
  section3Body:
    "A capacidade extintora mínima e a distância máxima a percorrer até um extintor vêm das Tabelas 6 e 7 da ABNT NBR 12693:2021, alinhadas à Tabela 1 da IT 21/2025.",
  section4Title: "4. Estimativa da quantidade",
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
  trrfTitle: "5. TRRF (tempo requerido de resistência ao fogo)",
  trrfBody:
    "O TRRF é o tempo, em minutos, que os elementos estruturais precisam resistir ao fogo. A consulta usa a tabela do Anexo B da IT 08, cruzando a divisão de ocupação com a classe de altura da edificação (P1 a P8) ou a profundidade do subsolo (S1 e S2).",
  trrfClassesTitle: "Classes de altura (pavimentos acima do solo)",
  trrfNote:
    "A ferramenta faz a consulta base da tabela. Ela não aplica as isenções do Anexo A nem as reduções do Anexo E da IT 08, que dependem de profissional habilitado.",
  exitsTitle: "6. Lotação e saídas de emergência",
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
    it14: "Fórmula da carga de incêndio específica, tabela de potenciais caloríficos e cargas por ocupação.",
    it08: "Tabela de tempo requerido de resistência ao fogo (TRRF) por ocupação e altura, no Anexo B.",
    it11: "Coeficientes de população e capacidade das unidades de passagem para o dimensionamento das saídas (Tabela 1).",
    it21: "Critérios de proteção por extintores e distância máxima a percorrer no Estado de São Paulo.",
    nbr12693:
      "Capacidade extintora mínima e distância por classe de risco (Tabelas 6 e 7).",
    nbr14432:
      "Classificação da carga de incêndio em risco baixo, médio e alto.",
    tcc: "Método de estimativa da quantidade de extintores por área coberta.",
  },
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
};

export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      q: "O que é carga de incêndio?",
      a: "É a quantidade de energia que os materiais combustíveis de um ambiente poderiam liberar ao queimar, dividida pela área do piso. Ela é medida em megajoule por metro quadrado (MJ/m²) e serve para classificar o risco de incêndio de uma edificação.",
    },
    {
      q: "Como a carga de incêndio é calculada?",
      a: "Somando a massa de cada material combustível multiplicada pelo seu potencial calorífico específico, e dividindo pela área do piso. É a fórmula do Anexo C da IT 14/2025: qfi = Σ (Mi × Hi) / Af.",
    },
    {
      q: "Qual a diferença entre risco baixo, médio e alto?",
      a: "Segundo a NBR 14432, a carga de incêndio até 300 MJ/m² é risco baixo, acima de 300 até 1200 MJ/m² é risco médio e acima de 1200 MJ/m² é risco alto.",
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
      a: "Some a massa de cada material combustível multiplicada pelo seu potencial calorífico específico (Hi) e divida pela área do piso. Por exemplo, um depósito de papel com 60.000 kg (Hi 17 MJ/kg) em 1.500 m² dá 680 MJ/m², o que classifica o local como risco médio.",
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
      term: "Distância máxima a percorrer",
      def: "O maior caminho que uma pessoa pode andar até alcançar um extintor, conforme o risco.",
    },
  ],
};

export const example = {
  title: "Exemplo resolvido",
  intro:
    "Um depósito de papel para mostrar o cálculo do começo ao fim, usando a fórmula da norma.",
  scenario: "Depósito de papel: 60.000 kg de papel (Hi 17 MJ/kg) em 1.500 m².",
  steps: [
    "Multiplique a massa pelo potencial calorífico: 60.000 kg × 17 MJ/kg = 1.020.000 MJ.",
    "Divida pela área do piso: 1.020.000 MJ / 1.500 m² = 680 MJ/m².",
    "Classifique o risco: 680 MJ/m² fica entre 300 e 1200, então é risco médio.",
    "Para risco médio, a capacidade mínima classe A é 3-A, com distância máxima de 20 m.",
  ],
  result: "Carga de incêndio de 680 MJ/m², risco médio.",
  note: "Este é o exemplo do trabalho de conclusão de curso que deu origem à ferramenta.",
};
