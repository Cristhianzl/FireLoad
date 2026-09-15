import type { GuideAnswer } from "@/lib/content-types";

export const tablesHub = {
  h1: "Tabelas de segurança contra incêndio",
  intro:
    "As tabelas das instruções técnicas saem em PDF, difíceis de pesquisar e de copiar. Aqui cada linha está em texto, com a fonte, e usa os mesmos valores que alimentam as calculadoras da FireLoad.",
  listTitle: "Tabelas disponíveis",
  sourceNote:
    "Transcrição das instruções técnicas do Corpo de Bombeiros da Polícia Militar do Estado de São Paulo. Em caso de divergência, vale sempre a publicação oficial.",
};

export const tableHeat = {
  breadcrumb: "Potencial calorífico",
  variables: ["Material", "Potencial calorífico específico (MJ/kg)"],
  h1: "Tabela de potencial calorífico dos materiais (Hi)",
  intro:
    "Os 112 valores de referência da Tabela C.1 da IT 14/2025, em megajoule por quilograma, usados no cálculo da carga de incêndio pelo método determinístico do Anexo C.",
  answer: {
    id: "o-que-e-potencial-calorifico",
    question: "O que é potencial calorífico específico?",
    answer:
      "Potencial calorífico específico (Hi) é a energia que 1 kg de um material libera ao queimar, medida em megajoule por quilograma (MJ/kg). Na IT 14/2025, a massa de cada material combustível é multiplicada pelo seu Hi, e a soma dividida pela área do piso dá a carga de incêndio específica.",
    points: [
      "Conversões da própria IT 14/2025 (item 4.5): 1 kg de madeira equivale a 19,0 MJ; 1 caloria equivale a 4,185 joules; 1 BTU equivale a 252 calorias.",
    ],
    quote: {
      text: "Valores de materiais não listados nesta tabela poderão ser apresentados pelo projetista, desde que citada a fonte bibliográfica.",
      source: "IT 14/2025, nota da Tabela C.1",
    },
  } satisfies GuideAnswer,
  caption: "Tabela C.1 da IT 14/2025: potencial calorífico específico (Hi)",
  colMaterial: "Material",
  colHi: "Hi (MJ/kg)",
  cta: "Calcular a carga de incêndio com estes valores",
};

export const tableOccupancy = {
  breadcrumb: "Carga por ocupação",
  variables: [
    "Atividade",
    "Divisão de ocupação",
    "Carga de incêndio específica (MJ/m²)",
  ],
  h1: "Tabela de carga de incêndio por ocupação",
  intro:
    "As 809 atividades do Anexo A da IT 14/2025, com a divisão e a carga de incêndio específica em MJ/m², organizadas por grupo de ocupação.",
  answer: {
    id: "como-usar-anexo-a",
    question: "Como usar a tabela de carga de incêndio por ocupação?",
    answer:
      "Encontre a atividade da edificação, confira a divisão e leia a carga de incêndio específica em MJ/m². Esse valor classifica o risco: até 300 MJ/m² é baixo, acima de 300 até 1200 MJ/m² é médio e acima de 1200 MJ/m² é alto. Depósitos não aparecem aqui, porque seguem o Anexo B.",
    quote: {
      text: "A Classificação pelo Código CNAE é apenas uma referência para enquadramento do tipo de atividade econômica, sendo que prevalece a ocupação da edificação e ou área de risco para fins da definição da carga de Incêndio.",
      source: "IT 14/2025, Anexo A, nota 6",
    },
  } satisfies GuideAnswer,
  jumpLabel: "Ir para o grupo",
  groupHeading: (letter: string, label: string) => `Grupo ${letter}: ${label}`,
  groupCount: (count: number) =>
    `${count} ${count === 1 ? "atividade" : "atividades"}`,
  caption: (letter: string) =>
    `Carga de incêndio específica das ocupações do grupo ${letter} (IT 14/2025, Anexo A)`,
  colDescription: "Atividade",
  colDivision: "Divisão",
  colLoad: "Carga de incêndio (MJ/m²)",
  cta: "Estimar extintores para uma ocupação",
};

export const tableStorage = {
  breadcrumb: "Depósitos",
  variables: [
    "Material armazenado",
    "Altura de armazenamento (m)",
    "Carga de incêndio específica (MJ/m²)",
  ],
  h1: "Tabela de carga de incêndio de depósitos",
  intro:
    "Carga de incêndio específica, em MJ/m², de 90 materiais armazenados para alturas de 1, 2, 4, 6, 8 e 10 metros, conforme o Anexo B da IT 14/2025.",
  answer: {
    id: "como-ler-anexo-b",
    question: "Como ler a tabela de carga de incêndio de depósitos?",
    answer:
      "Localize o material armazenado e siga a linha até a coluna da altura de armazenamento. O número é a carga de incêndio específica do depósito, em MJ/m². Para alturas entre duas colunas, a nota da própria tabela permite interpolar entre os valores vizinhos.",
    quote: {
      text: "Pode haver interpolação entre os valores.",
      source: "IT 14/2025, nota do Anexo B",
    },
  } satisfies GuideAnswer,
  caption:
    "Anexo B da IT 14/2025: carga de incêndio (MJ/m²) por altura de armazenamento",
  colMaterial: "Material armazenado",
  heightColumn: (meters: number) => `${meters} m`,
  cta: "Calcular a carga de incêndio de um depósito",
};

export const tableTrrf = {
  breadcrumb: "TRRF",
  variables: ["Divisão de ocupação", "Classe de altura", "TRRF (min)"],
  h1: "Tabela de TRRF por ocupação e altura",
  intro:
    "Tempos requeridos de resistência ao fogo, em minutos, para cada divisão de ocupação e classe de altura (P1 a P8) ou de subsolo (S1 e S2), conforme o Anexo B da IT 08.",
  answer: {
    id: "como-ler-trrf",
    question: "Como ler a tabela de TRRF?",
    answer:
      "Cada linha é uma divisão de ocupação e cada coluna, uma classe de altura acima do solo (P1 a P8) ou de profundidade de subsolo (S1 e S2). O número da célula é o TRRF em minutos. Um traço indica que a tabela não define valor, e 'ver' remete a um item específico da IT 08.",
    quote: {
      text: "Tabela para a classificação detalhada das ocupações (Grupo e Divisão), consultar a Tabela 1 do Regulamento de Segurança contra Incêndio",
      source: "IT 08/2019, cabeçalho do Anexo B",
    },
  } satisfies GuideAnswer,
  caption: "Anexo B da IT 08: TRRF em minutos",
  colGroup: "Grupo",
  colDivision: "Divisão",
  cellNa: "—",
  cellNaLabel: "sem valor na tabela",
  cellSeeItem: (item: string) => `ver ${item}`,
  legend:
    "Valores em minutos. “—”: a tabela não define TRRF. “ver”: o valor depende do item indicado da IT 08.",
  cta: "Consultar o TRRF de uma edificação",
};

export const tableExits = {
  breadcrumb: "Lotação e saídas",
  variables: [
    "Divisão de ocupação",
    "Regra de população",
    "Capacidade da unidade de passagem",
  ],
  h1: "Tabela de lotação e capacidade das unidades de passagem",
  intro:
    "Regras de população e capacidade da unidade de passagem de acessos, escadas e portas para cada ocupação, conforme a Tabela 1 do Anexo A da IT 11/2025.",
  answer: {
    id: "como-usar-tabela-1",
    question: "Como usar a Tabela 1 da IT 11?",
    answer:
      "Encontre a ocupação e leia duas informações: a regra de população, que diz quantas pessoas considerar por área ou por elemento, e a capacidade da unidade de passagem de cada componente. Divida a população pela capacidade, arredonde para cima e multiplique por 0,55 m para ter a largura.",
    quote: {
      text: "Capacidade de uma unidade de passagem: é o número de pessoas que passa por esta unidade em 1 minuto",
      source: "IT 11/2025, item 4.4.1.2, nota 2",
    },
  } satisfies GuideAnswer,
  caption: "Tabela 1 da IT 11/2025: dados para o dimensionamento das saídas",
  colGroup: "Grupo",
  colDivision: "Divisão",
  colPopulation: "População",
  colAcessos: "Acessos e descargas",
  colEscadas: "Escadas e rampas",
  colPortas: "Portas",
  capacityNote: "Capacidades em pessoas por unidade de passagem de 0,55 m.",
  cta: "Dimensionar as saídas de um pavimento",
};
