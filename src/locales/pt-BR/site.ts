export const site = {
  name: "FireLoad",
  tagline: "Calculadora de carga de incêndio e estimativa de extintores",
  domainAction:
    "Calcule a carga de incêndio, o risco e uma estimativa de extintores em segundos.",
  email: "asz.advsys@gmail.com",
  cnpj: "57.488.277/0001-22",
  city: "Uberlândia/MG",
  locality: "Uberlândia",
  region: "MG",
  github: "https://github.com/Cristhianzl/FireLoad",
  buymeacoffee: "https://buymeacoffee.com/cristhianlh",
  tccUrl: "https://repositorio.ufu.br/handle/123456789/21983",
  author: "Cristhian Zanforlin Lousa",
  authorJobTitle: "Engenheiro civil",
  authorSchool: "Universidade Federal de Uberlândia",
  authorSchoolUrl: "https://ufu.br",
  authorGithub: "https://github.com/Cristhianzl",
};

export const nav = {
  home: "Início",
  fireLoad: "Carga de incêndio",
  extinguishers: "Extintores",
  storage: "Depósitos",
  trrf: "TRRF",
  exits: "Saídas",
  tables: "Tabelas",
  methodology: "Metodologia",
  norms: "Normas",
  about: "Sobre",
  primaryCta: "Calcular agora",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
  primaryLabel: "Principal",
  footerLabel: "Navegação do rodapé",
  breadcrumbLabel: "Você está em",
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
  navigate: "Calculadoras",
  reference: "Referência",
  contact: "Contato",
  rights:
    "Uma calculadora processadora. Sem cadastro, sem banco de dados de usuários.",
  disclaimerShort:
    "Os resultados são uma estimativa de apoio e não substituem o projeto assinado por profissional habilitado.",
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
  updatedOn: (isoDate: string) => {
    const [year, month, day] = isoDate.split("-");
    return `Atualizado em ${day}/${month}/${year}`;
  },
  relatedTitle: "Continue por aqui",
  quoteSource: (source: string) => `Texto da norma: ${source}`,
  faqTitle: "Perguntas frequentes",
  howToTitle: "Como usar a calculadora",
};
