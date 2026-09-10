# Arquitetura e decisões

## Visão geral

A ExtinFire é um site estático gerado com Next.js (App Router). Não há back-end
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

Os 112 materiais (Tabela C.1 da IT 14/2025), as 809 ocupações (Anexo A) e as
referências normativas ficam em `src/data/*.json`. Separar dado de código deixa
claro o que é norma e facilita a auditoria e a atualização quando uma norma muda.

### Motor de cálculo puro

Toda a lógica fica em funções puras em `src/lib` (`engine.ts`, `norms/tables.ts`).
Elas não dependem de interface, o que torna o cálculo fácil de testar. A cobertura
de testes dessa pasta é de 100%.

### Textos em um catálogo

Os textos da interface, em português, ficam em `src/locales/pt-BR.ts`. O código e
os identificadores são em inglês. Separar os dois permite manter o código
padronizado e o produto no idioma do usuário.

### Medição de acesso sem dados pessoais

Para saber quantos cálculos são feitos por dia, usamos a medição de acesso
anônima e agregada da Vercel (Vercel Web Analytics). Não há login, cookie de
rastreamento nem coleta de dado pessoal. Cada cálculo dispara um evento anônimo
com o nível de risco.

### SEO

Cada página tem título e descrição próprios, URL descritiva, canonical, dados
estruturados (JSON-LD de WebApplication, FAQPage e BreadcrumbList), sitemap,
robots e imagem de compartilhamento gerada dinamicamente. O objetivo é ranquear
para buscas de carga de incêndio e estimativa de extintores.

Os dados estruturados são inseridos com um script `application/ld+json` cujo
conteúdo é escapado para nunca fechar a tag antes da hora, já que é dado nosso e
confiável.

## Estrutura de pastas

```
src/
  app/
    page.tsx                calculadora de carga de incêndio (home)
    extintores/             estimativa por ocupação
    metodologia/            fórmulas e normas
    normas/                 lista das normas de referência
    sobre/ termos/ privacidade/
    sitemap.ts robots.ts manifest.ts opengraph-image.tsx
  components/               interface e calculadoras
  data/                     materiais, ocupações e referências (JSON)
  lib/
    engine.ts               motor de cálculo
    norms/tables.ts         tabelas normativas
    materials.ts occupancies.ts search.ts format.ts schema.ts
  locales/pt-BR.ts          textos da interface
```

## Testes

- `src/lib/*.test.ts` cobrem o motor, a busca, a formatação, o schema e os dados.
- `src/components/SpecificLoadCalculator.test.tsx` cobre o fluxo da calculadora.
- Meta de cobertura da lógica principal: 90% no mínimo. Atual: 100%.
