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

export const specific = {
  h1: "Calculadora de carga de incêndio específica",
  intro:
    "Método determinístico do Anexo C da IT 14/2025, que a norma aplica a explosivos e ocupações especiais sem carga de incêndio tabelada. Para depósitos, use a calculadora por altura de armazenamento.",
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
    "Abaixo de 100 m² a ABNT NBR 12693:2021 permite uma única unidade extintora de pó ABC. No Estado de São Paulo, a IT 21/2025 só admite essa unidade única em áreas inferiores a 50 m².",
  mandatoryExit:
    "Ao menos um extintor deve ficar a no máximo 5 metros da entrada principal e das escadas nos demais pavimentos.",
  estimateWarning:
    "Isto é uma estimativa de apoio. A quantidade final depende do layout real, dos obstáculos e do posicionamento, e deve ser definida por profissional habilitado.",
  abcNote:
    "O extintor de pó ABC pode substituir extintores das classes A, B e C na mesma edificação.",
  placeholder: "O resultado do cálculo aparece aqui.",
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

export const storage = {
  h1: "Calculadora de carga de incêndio de depósitos",
  intro:
    "Pelo Anexo B da IT 14/2025: escolha o material armazenado, informe a altura das pilhas e a área, e veja a carga de incêndio, a classe de risco e uma estimativa de extintores.",
  hint: "São 90 materiais do Anexo B. Comece a digitar para filtrar.",
  searchLabel: "Material armazenado",
  searchPlaceholder: "Busque o material (ex.: papel, pneus, paletes)",
  heightLabel: "Altura de armazenamento",
  heightUnit: "m",
  heightHelp: "Altura das pilhas ou prateleiras, de 1 a 10 metros.",
  heightPlaceholder: "Ex.: 3",
  areaLabel: "Área de armazenamento",
  areaUnit: "m²",
  areaPlaceholder: "Ex.: 1500",
  selectedLabel: "Material selecionado",
  tableValuesLabel: "Carga de incêndio na tabela por altura",
  calculate: "Calcular carga de incêndio",
  reset: "Limpar",
  noResults: "Nenhum material encontrado. Tente outro termo.",
  errorSelect: "Selecione um material na busca.",
  errorHeight: "Informe uma altura de armazenamento entre 1 e 10 metros.",
  errorArea: "Informe uma área maior que zero.",
  resultLabel: "Carga de incêndio do depósito",
  interpolatedNote: (height: string) =>
    `Valor interpolado entre as alturas vizinhas da tabela para ${height} m, como permite a nota do Anexo B.`,
  exactNote: "Valor lido diretamente na tabela do Anexo B.",
};
