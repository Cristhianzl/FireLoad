export const site = {
  name: "FireLoad",
  tagline: "Calculadora de carga de incêndio e estimativa de extintores",
  domainAction:
    "Calcule a carga de incêndio, o risco e uma estimativa de extintores em segundos.",
  email: "asz.advsys@gmail.com",
  cnpj: "57.488.277/0001-22",
  city: "Uberlândia/MG",
  github: "https://github.com/Cristhianzl/FireLoad",
  buymeacoffee: "https://buymeacoffee.com/cristhianlh",
  tccUrl: "https://repositorio.ufu.br/handle/123456789/21983",
  author: "Cristhian Zanforlin Lousa",
};

export const nav = {
  home: "Início",
  fireLoad: "Carga de incêndio",
  extinguishers: "Extintores",
  trrf: "TRRF",
  exits: "Saídas",
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
    "O código é público sob licença MIT. Qualquer pessoa pode ver exatamente como cada conta é feita e conferir contra a norma. Por trás da ferramenta existe o ExtinFire, um trabalho acadêmico de conclusão de curso em Engenharia Civil de 2018.",
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

export const terms = {
  h1: "Termos de uso",
  updated: "Atualizado em setembro de 2026.",
  blocks: [
    {
      title: "1. O que a FireLoad é",
      text: "A FireLoad é uma ferramenta gratuita de apoio ao cálculo de carga de incêndio e à estimativa de extintores. Os cálculos são feitos no navegador, a partir dos dados que você digita, usando fórmulas e tabelas de normas oficiais.",
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
      text: "A FireLoad é distribuída sob licença MIT. Você pode usar, estudar, adaptar e redistribuir o código, respeitando os termos da licença.",
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
      text: "A FireLoad não pede login, não cria conta e não guarda os dados dos seus cálculos. As massas, áreas e resultados ficam apenas no seu navegador enquanto você usa a ferramenta.",
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

export const exits = {
  h1: "Calculadora de lotação e saídas de emergência",
  intro:
    "Calcula a população e a largura mínima das saídas (acessos, escadas e portas) pela Tabela 1 da IT 11. Escolha a ocupação e informe a área do pavimento.",
  divisionLabel: "Ocupação",
  divisionPlaceholder: "Busque a ocupação (ex.: comercial, escola, indústria)",
  popRuleLabel: "Regra de população",
  areaLabel: "Área do pavimento",
  areaHelp: "Área do piso que serve à população, em metro quadrado.",
  areaPlaceholder: "Ex.: 1000",
  populationLabel: "População",
  populationHelp:
    "Esta ocupação não é calculada por área. Informe a população conforme a regra acima.",
  populationPlaceholder: "Ex.: 200",
  calculate: "Dimensionar saídas",
  reset: "Limpar",
  populationResult: "População",
  unitPeople: "pessoas",
  componentAcessos: "Acessos e descargas",
  componentEscadas: "Escadas e rampas",
  componentPortas: "Portas",
  unitsLabel: "Unidades de passagem",
  widthLabel: "Largura mínima",
  capacityLabel: "Capacidade por UP",
  unitWidthNote: "1 unidade de passagem (UP) = 0,55 m. Largura = UP × 0,55 m.",
  errorDivision: "Selecione uma ocupação.",
  noResults: "Nenhuma ocupação encontrada. Tente outro termo.",
  errorArea: "Informe uma área maior que zero.",
  errorPopulation: "Informe uma população maior que zero.",
  warning:
    "A ferramenta calcula a largura por unidades de passagem. Ela não define larguras mínimas absolutas, número mínimo de saídas nem distâncias máximas a percorrer (itens 4.4 e Anexos da IT 11), que dependem de análise de profissional habilitado.",
  placeholder: "O dimensionamento aparece aqui.",
};

export const trrf = {
  h1: "Calculadora de TRRF (tempo requerido de resistência ao fogo)",
  intro:
    "Consulta o TRRF base pela tabela do Anexo B da IT 08. Escolha a divisão de ocupação, diga se é pavimento acima do solo ou subsolo, e informe a altura.",
  divisionLabel: "Divisão de ocupação",
  divisionPlaceholder:
    "Busque a ocupação (ex.: residencial, indústria, hospital)",
  placementLabel: "Situação do pavimento",
  placementAbove: "Acima do solo",
  placementSubsolo: "Subsolo",
  heightLabel: "Altura da edificação (h)",
  heightHelp:
    "Medida do piso do pavimento mais baixo ao piso do último pavimento, em metro.",
  heightPlaceholder: "Ex.: 18",
  subsoloLabel: "Profundidade do subsolo (hs)",
  subsoloHelp:
    "Distância do piso do subsolo mais baixo até o nível do solo, em metro.",
  subsoloPlaceholder: "Ex.: 6",
  calculate: "Consultar TRRF",
  reset: "Limpar",
  noResults: "Nenhuma divisão encontrada. Tente outro termo.",
  resultTitle: "TRRF base",
  resultUnit: "minutos",
  classLabel: "Classe de altura",
  errorDivision: "Selecione uma divisão de ocupação.",
  errorHeight: "Informe uma altura maior que zero.",
  naTitle: "Não tabelado para esta classe",
  naText:
    "A tabela do Anexo B não define TRRF para esta divisão nesta classe de altura. Consulte a IT 08 e um profissional habilitado.",
  seeItemTitle: "Depende de análise específica",
  seeItemText: (item: string) =>
    `Para esta classe, o TRRF depende do item ${item} da IT 08. Consulte a instrução e um profissional habilitado.`,
  outOfRangeTitle: "Fora da faixa da tabela",
  outOfRangeText:
    "A altura informada está fora das classes P1 a P8 (até 250 m). Consulte a IT 08 e um profissional habilitado.",
  placeholder: "O TRRF aparece aqui.",
  warning:
    "Isto é o TRRF base da tabela. A ferramenta não aplica as isenções do Anexo A nem as reduções do Anexo E da IT 08, que dependem de análise de profissional habilitado.",
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
  exits: {
    title: "Calculadora de lotação e saídas de emergência (IT 11)",
    description:
      "Calcule a população e a largura mínima das saídas de emergência (acessos, escadas e portas) pela Tabela 1 da IT 11 do Corpo de Bombeiros de SP.",
  },
  trrf: {
    title: "Calculadora de TRRF, tempo requerido de resistência ao fogo",
    description:
      "Consulte o TRRF base pela tabela do Anexo B da IT 08 do Corpo de Bombeiros de SP. Informe a divisão de ocupação e a altura da edificação.",
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
    title: "Sobre a FireLoad e o estudo por trás",
    description:
      "A FireLoad nasceu de um trabalho de conclusão de curso em Engenharia Civil na UFU. Conheça a história e leia o estudo completo.",
  },
  terms: {
    title: "Termos de uso",
    description:
      "Condições de uso da FireLoad. Os resultados são uma estimativa de apoio e não substituem projeto de profissional habilitado.",
  },
  privacy: {
    title: "Política de privacidade",
    description:
      "A FireLoad não pede cadastro e não guarda os dados dos seus cálculos. Entenda como a privacidade é tratada.",
  },
};
