import { site } from "./site";

export const llms = {
  summary: `${site.name} é uma calculadora gratuita e de código aberto de segurança contra incêndio, em português. Calcula carga de incêndio, classe de risco, estimativa de extintores, TRRF e largura de saídas de emergência pelas Instruções Técnicas do Corpo de Bombeiros de São Paulo e normas ABNT.`,
  facts: [
    "Carga de incêndio específica pelo Anexo C da IT 14/2025: qfi = Σ (Mi × Hi) / Af, em MJ/m², para explosivos (Grupo L) e ocupações especiais (Grupo M).",
    "Classe de risco: até 300 MJ/m² é baixo; acima de 300 até 1200 MJ/m² é médio; acima de 1200 MJ/m² é alto.",
    "Depósitos (Grupo J) usam obrigatoriamente o Anexo B da IT 14/2025, pelo material e pela altura de armazenamento de 1 a 10 m, com interpolação permitida.",
    "Distância máxima até um extintor portátil pela Tabela 1 da IT 21/2025: 25 m em risco baixo, 20 m em risco médio e 15 m em risco alto.",
    "Saídas de emergência pela IT 11/2025: unidade de passagem de 0,55 m; N = teto(população ÷ capacidade); largura = N × 0,55 m; mínimo de 1,20 m para acessos, escadas e rampas nas ocupações em geral.",
    "TRRF (IT 08): tempo mínimo de resistência ao fogo de um elemento construtivo sob o incêndio-padrão, pela divisão de ocupação e pela classe de altura P1 a P8 ou de subsolo S1 e S2.",
    `Autor: ${site.author}, engenheiro civil pela Universidade Federal de Uberlândia. Código aberto sob licença MIT: ${site.github}.`,
    "Os resultados são estimativas de apoio e não substituem o projeto de profissional habilitado nem a aprovação do Corpo de Bombeiros.",
  ],
  calculatorsTitle: "Calculadoras",
  tablesTitle: "Tabelas de referência",
  referenceTitle: "Metodologia e fontes",
};
