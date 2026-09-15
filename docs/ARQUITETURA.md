# Arquitetura e decisões

## Visão geral

A FireLoad é um site estático gerado com Next.js (App Router). Não há back-end
de aplicação nem banco de dados. As calculadoras rodam inteiramente no navegador,
a partir dos dados que a pessoa digita.

```
Navegador  ──►  Componentes React (client)  ──►  Motor de cálculo (src/lib)
                                                   usa dados de src/data (normas)
```

## Decisões

### Calculadora processadora, sem banco de dados

O cálculo é a razão de existir da ferramenta e ele não precisa de estado
persistente. Manter tudo no cliente deixa o site rápido, barato de hospedar e
respeita a privacidade: nada do que a pessoa digita sai do navegador.

### Dados das normas em JSON

Os 112 materiais (Tabela C.1 da IT 14/2025), as 809 ocupações (Anexo A), os 90
materiais armazenados (Anexo B), as tabelas de TRRF e de saídas e as
referências normativas ficam em `src/data/*.json`. Separar dado de código deixa
claro o que é norma e facilita a auditoria e a atualização quando uma norma muda.

### Motor de cálculo puro

Toda a lógica fica em funções puras em `src/lib` (`engine.ts`, `norms/tables.ts`).
Elas não dependem de interface, o que torna o cálculo fácil de testar. A cobertura
de testes dessa pasta é de 100%.

### Textos em um catálogo

Os textos da interface, em português, ficam em `src/locales/pt-BR/`, um arquivo
por área (calculadoras, conteúdo, guias, tabelas, SEO). O código e
os identificadores são em inglês. Separar os dois permite manter o código
padronizado e o produto no idioma do usuário.

### Medição de acesso sem dados pessoais

Para saber quantos cálculos são feitos por dia, usamos a medição de acesso
anônima e agregada da Vercel (Vercel Web Analytics). Não há login, cookie de
rastreamento nem coleta de dado pessoal. Cada cálculo dispara um evento anônimo
com o nível de risco.

### SEO, respostas diretas e citação por IA

O objetivo é ser encontrado em três frentes: ranquear no Google (SEO), ser a
resposta direta em trechos em destaque e assistentes de voz (AEO) e ser a fonte
citada por ChatGPT, Claude, Perplexity e AI Overviews (GEO).

- **Base técnica.** Título, descrição, canonical e Open Graph por página via
  `pageMetadata` (`src/lib/seo.ts`), imagem OG por rota, sitemap com a data real
  de revisão de cada página (`CONTENT_UPDATED_AT` em `src/lib/config.ts`, nunca
  a data do build) e redirecionamento 308 de `fireload.vercel.app` para o
  domínio canônico.
- **Uma página por intenção.** Calculadoras atendem quem quer calcular; as
  páginas em `/tabelas` atendem quem procura a tabela da norma. Todas se ligam
  entre si (breadcrumbs visíveis e blocos "Continue por aqui").
- **Respostas diretas.** Cada calculadora tem perguntas reais como título, uma
  resposta de 40 a 60 palavras logo abaixo, listas e tabelas, exemplo resolvido
  e FAQ. Os números dos exemplos saem do próprio motor (`src/lib/examples.ts`),
  então não divergem da calculadora.
- **Fonte citável.** Trechos literais das instruções técnicas com o item
  citado, tabelas oficiais em texto e dados estruturados que só descrevem o que
  está visível: WebApplication e Dataset com `isBasedOn` apontando as normas,
  Organization e Person (autor) ligados por `@id`, FAQPage e BreadcrumbList.
- **Robôs de IA.** O `robots.txt` libera todos os robôs, inclusive os de busca e
  de treinamento de IA (OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot e
  outros), porque o conteúdo é aberto e ser citado é o objetivo. O `/llms.txt`
  resume o site e os fatos principais para ferramentas que o leem; o Google o
  ignora, então ele é complemento, não estratégia.

Os dados estruturados são inseridos com um script `application/ld+json` cujo
conteúdo é escapado para nunca fechar a tag antes da hora, já que é dado nosso e
confiável.

## Estrutura de pastas

```
src/
  app/
    page.tsx                calculadora de carga de incêndio (home)
    carga-de-incendio-deposito/  carga de incêndio de depósitos (Anexo B)
    extintores/             estimativa por ocupação
    trrf/                   tempo requerido de resistência ao fogo
    saidas-de-emergencia/   lotação e largura das saídas
    tabelas/                tabelas oficiais em texto (hub e 5 tabelas)
    metodologia/            fórmulas e normas
    normas/                 lista das normas de referência
    sobre/ termos/ privacidade/
    sitemap.ts robots.ts manifest.ts llms.txt/ _og/ (imagens OG)
  components/               interface e calculadoras
  data/                     materiais, ocupações e referências (JSON)
  lib/
    engine.ts               motor de cálculo
    norms/tables.ts         tabelas normativas
    storage.ts trrf.ts exits.ts materials.ts occupancies.ts
    pages.ts seo.ts schema.ts llms.ts examples.ts search.ts format.ts
  locales/pt-BR/            textos da interface, por área
```

## Testes

- `src/lib/*.test.ts` cobrem o motor, a busca, a formatação, o schema e os dados.
- `src/components/*Calculator.test.tsx` cobrem o fluxo das calculadoras.
- `src/app/metadata-routes.test.ts` cobre sitemap e robots.
- Meta de cobertura da lógica principal: 90% no mínimo. Atual: acima de 95%.
