# Guia de contribuição

Obrigado pelo interesse em contribuir com a ExtinFire. Este documento explica
como o projeto é organizado e o que esperar de uma contribuição.

## Princípio inegociável

Todo cálculo, regra ou número da ferramenta precisa sair de uma norma oficial
(Instruções Técnicas do Corpo de Bombeiros, ABNT ou norma técnica equivalente).
Nada é inventado. Se você propõe um novo dado ou regra, cite a fonte e a versão.

A única exceção é o método de estimativa da quantidade de extintores, que vem do
trabalho de conclusão de curso que originou o projeto e é sempre apresentado
como uma estimativa, nunca como exigência da norma.

## Idioma

- **Código, identificadores, comentários e mensagens de commit em inglês.**
- **Documentação e textos da interface em português.**
- Os textos da interface ficam no catálogo `src/locales/pt-BR.ts`. Não coloque
  texto fixo em português dentro de componentes.

## Ambiente

Pré-requisitos: Node 20 ou superior e pnpm.

```bash
make install
make dev
```

## Antes de abrir um Pull Request

Rode a verificação completa e garanta que tudo passa:

```bash
make check      # lint, typecheck e testes
make format     # formata o código
```

A lógica principal (`src/lib`) deve manter cobertura de testes de pelo menos 90%.
Toda função nova precisa de teste, cobrindo o caso de sucesso e o de erro.

## Commits

Usamos commits no formato convencional, em inglês:

```
feat: add occupancy search by fire division
fix: correct class B travel distance for high risk
docs: update methodology references
```

Tipos: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `ui`.

## Estrutura

- `src/lib` — lógica principal (motor de cálculo, tabelas, busca).
- `src/data` — dados extraídos das normas, em JSON.
- `src/components` — componentes de interface.
- `src/locales` — textos em português.
- `docs` — documentação do projeto.
