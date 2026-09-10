export const site = {
  name: "ExtinFire",
  tagline: "Calculadora de carga de incêndio e estimativa de extintores",
  domainAction:
    "Calcule a carga de incêndio, o risco e uma estimativa de extintores em segundos.",
  email: "asz.advsys@gmail.com",
  cnpj: "57.488.277/0001-22",
  city: "Uberlândia/MG",
  github: "https://github.com/Cristhianzl/extinfire",
  buymeacoffee: "https://buymeacoffee.com/cristhianlh",
  tccUrl: "https://repositorio.ufu.br/handle/123456789/21983",
  author: "Cristhian Zanforlin Lousa",
};

export const nav = {
  home: "Início",
  fireLoad: "Carga de incêndio",
  extinguishers: "Extintores",
  methodology: "Metodologia",
  norms: "Normas",
  about: "Sobre",
  primaryCta: "Calcular agora",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
};

export const footer = {
  description:
    "Ferramenta livre e de código aberto para apoiar o dimensionamento de segurança contra incêndio. Cada número usado vem de uma norma oficial.",
  builtBy: "Feito por",
  sourceCode: "Código-fonte",
  supportLabel: "Curtiu? Me pague uma cerveja",
  legal: "Legal",
  terms: "Termos de uso",
  privacy: "Privacidade",
  navigate: "Navegue",
  contact: "Contato",
  rights:
    "Uma calculadora processadora. Sem cadastro, sem banco de dados de usuários.",
  disclaimerShort:
    "Os resultados são uma estimativa de apoio e não substituem o projeto assinado por profissional habilitado.",
};

export const risk = {
  low: { label: "Risco baixo", range: "Até 300 MJ/m²" },
  medium: { label: "Risco médio", range: "Acima de 300 até 1200 MJ/m²" },
  high: { label: "Risco alto", range: "Acima de 1200 MJ/m²" },
};

export const obstacle = {
  free: {
    label: "Livre acesso",
    help: "Ambiente aberto, sem barreiras entre qualquer ponto e o extintor.",
  },
  few: {
    label: "Poucos obstáculos",
    help: "Alguma divisão ou mobiliário reduz a área efetivamente coberta.",
  },
  many: {
    label: "Muitos obstáculos",
    help: "Layout cheio de barreiras, prateleiras ou salas, que encurta muito o alcance.",
  },
};

export const fireClass = {
  a: "Classe A",
  b: "Classe B",
  aHelp: "Fogo em materiais sólidos comuns, como madeira, papel e tecido.",
  bHelp: "Fogo em líquidos e gases inflamáveis.",
};

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
    "O código é público sob licença MIT. Qualquer pessoa pode ver exatamente como cada conta é feita e conferir contra a norma. Por trás da ferramenta existe um trabalho acadêmico de conclusão de curso em Engenharia Civil.",
};

export const specific = {
  h1: "Calculadora de carga de incêndio específica",
  intro:
    "Método determinístico do Anexo C da IT 14/2025, indicado para depósitos, explosivos e ocupações especiais sem carga de incêndio tabelada.",
  formula: "qfi = Σ (Mi × Hi) / Af",
  areaLabel: "Área do piso (Af)",
  areaUnit: "m²",
  areaHelp: "Área considerada para o cálculo, em metro quadrado.",
  areaPlaceholder: "Ex.: 750",
  addMaterialLabel: "Adicionar material combustível",
  searchPlaceholder: "Busque um material (ex.: papel, etanol, madeira)",
  massLabel: "Massa",
  massUnit: "kg",
  massPlaceholder: "0",
  hiLabel: "Potencial calorífico",
  hiUnit: "MJ/kg",
  emptyMaterials:
    "Nenhum material adicionado ainda. Busque acima para começar.",
  remove: "Remover",
  calculate: "Calcular",
  reset: "Limpar",
  noResults: "Nenhum material encontrado para essa busca.",
  errorArea: "Informe uma área maior que zero.",
  errorMaterials: "Adicione ao menos um material com massa maior que zero.",
  resultTitle: "Carga de incêndio específica",
  totalHeatLabel: "Potencial calorífico total",
  materialsCount: (n: number) => `${n} ${n === 1 ? "material" : "materiais"}`,
};

export const occupancy = {
  h1: "Estimativa de extintores por ocupação",
  intro:
    "Para ocupações já tabeladas no Anexo A da IT 14/2025. Busque a atividade, informe a área e veja a carga de incêndio de referência com uma estimativa de extintores.",
  searchLabel: "Ocupação ou atividade",
  searchPlaceholder: "Busque a ocupação (ex.: igreja, escritório, restaurante)",
  areaLabel: "Área construída",
  areaUnit: "m²",
  areaPlaceholder: "Ex.: 446",
  selectedLabel: "Ocupação selecionada",
  groupLabel: "Grupo",
  divisionLabel: "Divisão",
  loadLabel: "Carga de incêndio de referência",
  calculate: "Estimar extintores",
  reset: "Limpar",
  noResults: "Nenhuma ocupação encontrada. Tente outro termo.",
  errorSelect: "Selecione uma ocupação na busca.",
  errorArea: "Informe uma área maior que zero.",
  hint: "São 809 ocupações da norma. Comece a digitar para filtrar.",
};

export const results = {
  riskTitle: "Classe de risco",
  estimateTitle: "Estimativa de extintores",
  estimateSubtitle:
    "Estimativa por área coberta, para três situações de layout. Escolha a que mais se aproxima do local.",
  capacityLabel: "Capacidade extintora mínima",
  distanceLabel: "Distância máxima a percorrer",
  countLabel: "Estimativa",
  estimatedQuantity: "Quantidade estimada de extintores",
  byScenario: "por cenário de obstáculos",
  unit: (n: number) => `${n} ${n === 1 ? "extintor" : "extintores"}`,
  minRuleTitle: "Regras mínimas da norma",
  minRule2:
    "Cada pavimento deve ter, no mínimo, duas unidades extintoras, sendo uma para classe A e outra para classes B e C.",
  minRuleSingle:
    "Abaixo de 100 m² é permitida uma única unidade extintora de pó ABC que atenda às classes A, B e C.",
  mandatoryExit:
    "Ao menos um extintor deve ficar a no máximo 5 metros da entrada principal e das escadas nos demais pavimentos.",
  estimateWarning:
    "Isto é uma estimativa de apoio. A quantidade final depende do layout real, dos obstáculos e do posicionamento, e deve ser definida por profissional habilitado.",
  abcNote:
    "O extintor de pó ABC pode substituir extintores das classes A, B e C na mesma edificação.",
  placeholder: "O resultado do cálculo aparece aqui.",
};

export const methodology = {
  h1: "Metodologia e fórmulas",
  intro:
    "Esta página descreve, passo a passo, como a ExtinFire calcula a carga de incêndio, classifica o risco e estima a quantidade de extintores. Toda regra aponta a norma de onde saiu.",
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
    "A norma define a capacidade e a distância, mas não uma fórmula fechada de quantidade. A ExtinFire estima o número de extintores pela área que cada um cobre: um círculo de raio igual à distância máxima a percorrer, reduzido conforme os obstáculos do ambiente. Esse é o método proposto no trabalho de conclusão de curso que deu origem à ferramenta, validado contra projetos reais.",
  section4Formula: "N = teto( Af / (π × d² × coeficiente) )",
  section4Legend: [
    "N: número estimado de extintores.",
    "Af: área do piso, em m².",
    "d: distância máxima a percorrer da tabela, em metros.",
    "coeficiente: livre acesso 1,0, poucos obstáculos 0,5, muitos obstáculos 0,1.",
  ],
  section4Note:
    "Por ser uma estimativa geométrica, o resultado é um ponto de partida. O projeto final é sempre responsabilidade de profissional habilitado.",
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
    "Todo cálculo da ExtinFire sai de uma destas fontes oficiais. As versões abaixo eram as vigentes na última atualização da ferramenta. Consulte sempre a publicação oficial mais recente.",
  updatedAt: "Última verificação das versões: setembro de 2026.",
  usageTitle: "Onde cada norma é usada",
  usage: {
    it14: "Fórmula da carga de incêndio específica, tabela de potenciais caloríficos e cargas por ocupação.",
    it21: "Critérios de proteção por extintores e distância máxima a percorrer no Estado de São Paulo.",
    nbr12693:
      "Capacidade extintora mínima e distância por classe de risco (Tabelas 6 e 7).",
    nbr14432:
      "Classificação da carga de incêndio em risco baixo, médio e alto.",
    tcc: "Método de estimativa da quantidade de extintores por área coberta.",
  },
};

export const about = {
  h1: "Sobre a ExtinFire",
  body1:
    "A ExtinFire nasceu de um trabalho de conclusão de curso em Engenharia Civil na Universidade Federal de Uberlândia, defendido em 2018. A ideia era simples: transformar as contas de carga de incêndio, que costumam ficar presas em planilhas e tabelas, em uma ferramenta rápida e confiável.",
  body2:
    "Esta versão web reconstrói aquele aplicativo do zero, agora aberta a todos e atualizada para as normas vigentes. É uma calculadora processadora: tudo acontece no seu navegador, sem cadastro e sem guardar dados pessoais.",
  body3:
    "O código é público sob licença MIT justamente para que qualquer pessoa possa auditar como cada número é calculado. Segurança contra incêndio se faz com transparência.",
  tccTitle: "O estudo por trás",
  tccText:
    "Leia o trabalho de conclusão de curso completo no repositório da UFU.",
  tccLink: "Ver o TCC na UFU",
};

export const terms = {
  h1: "Termos de uso",
  updated: "Atualizado em setembro de 2026.",
  blocks: [
    {
      title: "1. O que a ExtinFire é",
      text: "A ExtinFire é uma ferramenta gratuita de apoio ao cálculo de carga de incêndio e à estimativa de extintores. Os cálculos são feitos no navegador, a partir dos dados que você digita, usando fórmulas e tabelas de normas oficiais.",
    },
    {
      title: "2. Estimativa, não projeto",
      text: "Os resultados têm caráter informativo e de apoio. Não constituem projeto, laudo ou parecer técnico e não substituem a análise de profissional legalmente habilitado nem a aprovação do Corpo de Bombeiros. A responsabilidade pelo dimensionamento final é sempre do responsável técnico.",
    },
    {
      title: "3. Sem garantias",
      text: "A ferramenta é oferecida no estado em que se encontra, sem garantia de adequação a um fim específico. As normas podem ser revisadas a qualquer momento. Confira sempre a versão oficial vigente antes de tomar decisões.",
    },
    {
      title: "4. Limitação de responsabilidade",
      text: "Os autores não se responsabilizam por decisões tomadas com base nos resultados, nem por eventuais divergências entre os dados exibidos e as normas oficiais. Use por sua conta e risco.",
    },
    {
      title: "5. Código aberto",
      text: "A ExtinFire é distribuída sob licença MIT. Você pode usar, estudar, adaptar e redistribuir o código, respeitando os termos da licença.",
    },
    {
      title: "6. Contato",
      text: "Dúvidas ou correções podem ser enviadas pelo e-mail de contato ou pelo repositório no GitHub.",
    },
  ],
};

export const privacy = {
  h1: "Política de privacidade",
  updated: "Atualizado em setembro de 2026.",
  blocks: [
    {
      title: "Resumo",
      text: "A ExtinFire não pede login, não cria conta e não guarda os dados dos seus cálculos. As massas, áreas e resultados ficam apenas no seu navegador enquanto você usa a ferramenta.",
    },
    {
      title: "Dados de uso",
      text: "Usamos uma medição de acesso agregada e anônima, apenas para saber quantos cálculos são feitos por dia e melhorar a ferramenta. Não coletamos nome, e-mail, localização precisa nem qualquer dado que identifique você.",
    },
    {
      title: "Cookies",
      text: "Não usamos cookies de rastreamento publicitário. A medição de acesso é anônima e não cria perfil de navegação.",
    },
    {
      title: "Seus direitos",
      text: "Como não guardamos dados pessoais, não há cadastro para consultar, corrigir ou excluir. Para qualquer dúvida sobre privacidade, fale com a gente pelo e-mail de contato.",
    },
  ],
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
      a: "Não. A norma define a capacidade e a distância máxima a percorrer, mas a quantidade depende do layout real. A ExtinFire dá uma estimativa por área coberta, considerando o nível de obstáculos do ambiente. O número final deve ser definido por profissional habilitado.",
    },
    {
      q: "A ferramenta serve para aprovar projeto no Corpo de Bombeiros?",
      a: "Ela ajuda no dimensionamento, mas não substitui o projeto técnico. O projeto de segurança contra incêndio precisa de responsável técnico habilitado e da aprovação do Corpo de Bombeiros.",
    },
    {
      q: "A ExtinFire é gratuita?",
      a: "Sim, é gratuita e de código aberto sob licença MIT. Você pode conferir todos os cálculos no repositório público do projeto.",
    },
  ],
};

export const notFound = {
  h1: "Página não encontrada",
  text: "O endereço que você tentou abrir não existe ou foi movido.",
  cta: "Voltar ao início",
};

export const common = {
  reference: "Fonte",
  references: "Fontes",
  seeMethodology: "Ver metodologia",
  seeNorms: "Ver normas",
  updatedLabel: "Atualizado",
};

export const seo = {
  home: {
    title: "Calculadora de carga de incêndio e estimativa de extintores",
    description:
      "Calcule a carga de incêndio específica, descubra a classe de risco e receba uma estimativa de extintores. Grátis, sem cadastro e baseado na IT 14/2025 e NBR 12693:2021.",
  },
  extinguishers: {
    title: "Estimativa de extintores por ocupação",
    description:
      "Escolha a ocupação, informe a área e receba a carga de incêndio de referência com uma estimativa de extintores. Baseado na IT 14/2025 e NBR 12693:2021.",
  },
  methodology: {
    title: "Metodologia e fórmulas do cálculo de carga de incêndio",
    description:
      "Veja passo a passo como calculamos a carga de incêndio, classificamos o risco e estimamos extintores, com cada regra apontando a norma de origem.",
  },
  norms: {
    title: "Normas de referência de carga de incêndio e extintores",
    description:
      "Lista das normas oficiais usadas nos cálculos: IT 14/2025, IT 21/2025, ABNT NBR 12693:2021 e NBR 14432, com onde cada uma é aplicada.",
  },
  about: {
    title: "Sobre a ExtinFire e o estudo por trás",
    description:
      "A ExtinFire nasceu de um trabalho de conclusão de curso em Engenharia Civil na UFU. Conheça a história e leia o estudo completo.",
  },
  terms: {
    title: "Termos de uso",
    description:
      "Condições de uso da ExtinFire. Os resultados são uma estimativa de apoio e não substituem projeto de profissional habilitado.",
  },
  privacy: {
    title: "Política de privacidade",
    description:
      "A ExtinFire não pede cadastro e não guarda os dados dos seus cálculos. Entenda como a privacidade é tratada.",
  },
};
