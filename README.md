# FireLoad

**Calculadora de carga de incêndio e estimativa de extintores.**
Site: https://fireload.com.br

[![Licença: MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-0f766e.svg)](./LICENSE)
[![Testes](https://img.shields.io/badge/testes-46%20passando-15803d.svg)](#testes)
[![Cobertura](https://img.shields.io/badge/cobertura%20da%20l%C3%B3gica-100%25-15803d.svg)](#testes)

A FireLoad é uma calculadora processadora, de código aberto, que ajuda a
dimensionar a segurança contra incêndio de uma edificação. Ela calcula a
**carga de incêndio específica**, classifica o **risco** e apresenta uma
**estimativa de extintores**. Todo cálculo roda no navegador, sem cadastro e
sem banco de dados de usuários.

A FireLoad é a reconstrução do **ExtinFire**, aplicativo criado em um trabalho
de conclusão de curso em Engenharia Civil defendido na Universidade Federal de
Uberlândia (UFU) em 2018. O código é aberto justamente para que qualquer pessoa
possa auditar como cada número é calculado e conferir contra a norma.

> **Aviso.** Os resultados são uma estimativa de apoio. Não constituem projeto,
> laudo ou parecer técnico e não substituem a análise de profissional
> habilitado nem a aprovação do Corpo de Bombeiros.

## Funcionalidades

- **Calculadora de carga de incêndio específica** (por material). Método
  determinístico do Anexo C da IT 14/2025, para depósitos, explosivos e
  ocupações especiais sem carga tabelada. São 112 materiais com potencial
  calorífico da Tabela C.1.
- **Estimativa de extintores por ocupação** (por atividade). Usa as 809
  ocupações tabeladas no Anexo A da IT 14/2025.
- Classificação de risco (baixo, médio, alto) conforme a NBR 14432.
- Estimativa de extintores por classe (A e B) para três cenários de layout:
  livre acesso, poucos obstáculos e muitos obstáculos.
- Cada resultado aponta a norma de onde saiu.

## Como os cálculos são feitos

### Carga de incêndio específica

```
qfi = Σ (Mi × Hi) / Af   [MJ/m²]
```

- `Mi`: massa de cada material combustível, em kg.
- `Hi`: potencial calorífico específico do material, em MJ/kg (Tabela C.1 da IT 14/2025).
- `Af`: área do piso considerada para o cálculo, em m².

### Classificação de risco (NBR 14432)

| Risco | Carga de incêndio           |
| ----- | --------------------------- |
| Baixo | até 300 MJ/m²               |
| Médio | acima de 300 até 1200 MJ/m² |
| Alto  | acima de 1200 MJ/m²         |

### Capacidade e distância (ABNT NBR 12693:2021)

| Classe A | Capacidade | Distância | Classe B | Capacidade | Distância |
| -------- | ---------- | --------- | -------- | ---------- | --------- |
| Baixo    | 2-A        | 25 m      | Baixo    | 20-B       | 15 m      |
| Médio    | 3-A        | 20 m      | Médio    | 40-B       | 15 m      |
| Alto     | 4-A        | 15 m      | Alto     | 80-B       | 15 m      |

### Estimativa da quantidade (metodologia do TCC)

A norma define a capacidade e a distância máxima a percorrer, mas não uma
fórmula fechada de quantidade. A FireLoad estima o número de extintores pela
área que cada um cobre, um círculo de raio igual à distância máxima a
percorrer, reduzido conforme os obstáculos do ambiente:

```
N = teto( Af / (π × d² × coeficiente) )
```

- `d`: distância máxima a percorrer da tabela, em metros.
- `coeficiente`: livre acesso 1,0, poucos obstáculos 0,5, muitos obstáculos 0,1.

Detalhes completos em [docs/METODOLOGIA.md](./docs/METODOLOGIA.md).

## Normas de referência

- **IT 14/2025** (CBPMESP) — Carga de incêndio nas edificações e áreas de risco.
- **IT 21/2025** (CBPMESP) — Sistema de proteção por extintores de incêndio.
- **ABNT NBR 12693:2021** — Sistemas de proteção por extintores de incêndio.
- **ABNT NBR 14432:2001** — Classificação da carga de incêndio em risco.
- **TCC UFU 2018** — Método de estimativa por área coberta:
  https://repositorio.ufu.br/handle/123456789/21983

As normas da ABNT são protegidas por direito autoral e não são redistribuídas
neste repositório. Elas são citadas por referência.

## Tecnologia

- [Next.js 16](https://nextjs.org/) (App Router) e React 19.
- [Tailwind CSS 4](https://tailwindcss.com/) e [daisyUI 5](https://daisyui.com/).
- [Vitest](https://vitest.dev/) para testes.
- Deploy na [Vercel](https://vercel.com/).

## Rodando localmente

Pré-requisitos: Node 20 ou superior e [pnpm](https://pnpm.io/).

```bash
make install   # instala as dependências
make dev       # sobe em http://localhost:3000
```

Comandos principais (veja todos com `make help`):

| Comando         | O que faz                         |
| --------------- | --------------------------------- |
| `make dev`      | Servidor de desenvolvimento       |
| `make build`    | Build de produção                 |
| `make test`     | Roda os testes                    |
| `make coverage` | Testes com relatório de cobertura |
| `make lint`     | Linter                            |
| `make format`   | Formata o código com Prettier     |
| `make check`    | Lint, typecheck e testes          |

## Testes

A lógica principal (a pasta `src/lib`) tem cobertura de 100%, acima da meta de
90%. São 45 testes cobrindo a fórmula da carga de incêndio, a classificação de
risco, a estimativa de extintores, a busca, os dados normativos e o fluxo da
calculadora na interface.

```bash
make coverage
```

## Estrutura do projeto

```
src/
  app/          páginas (App Router), sitemap, robots, manifest, imagem OG
  components/   componentes de interface e as calculadoras
  data/         dados extraídos das normas (materiais, ocupações, referências)
  lib/          lógica principal (motor de cálculo, tabelas, busca, formatação)
  locales/      textos da interface em PT-BR
docs/           documentação do projeto
```

## Contribuindo

Contribuições são bem-vindas. Veja o [guia de contribuição](./CONTRIBUTING.md).
O código é escrito em inglês e a documentação em português.

## Licença

Distribuído sob a licença [MIT](./LICENSE).
