# Metodologia

Este documento descreve, com as fontes, exatamente como a ExtinFire calcula a
carga de incêndio, classifica o risco e estima a quantidade de extintores.

## 1. Carga de incêndio específica

Método determinístico do Anexo C da IT 14/2025 (CBPMESP), indicado para
depósitos, explosivos e ocupações especiais sem carga tabelada.

```
qfi = Σ (Mi × Hi) / Af
```

| Símbolo | Significado                                              | Unidade |
| ------- | ------------------------------------------------------- | ------- |
| qfi     | carga de incêndio específica                            | MJ/m²   |
| Mi      | massa total de cada material combustível                | kg      |
| Hi      | potencial calorífico específico (Tabela C.1, IT 14/2025)| MJ/kg   |
| Af      | área do piso considerada para o cálculo                 | m²      |

Os 112 valores de potencial calorífico usados vêm literalmente da Tabela C.1 da
IT 14/2025 e estão em `src/data/materials.json`.

**Exemplo do TCC.** Depósito de papel com 60.000 kg em 1.500 m². Papel tem
Hi = 17 MJ/kg. Então qfi = (60.000 × 17) / 1.500 = 680 MJ/m². Este caso é um
teste automatizado do projeto.

## 2. Classificação de risco

Conforme a NBR 14432 e o Regulamento de Segurança Contra Incêndio do Estado de
São Paulo.

| Risco | Carga de incêndio            |
| ----- | ---------------------------- |
| Baixo | até 300 MJ/m²                |
| Médio | acima de 300 até 1200 MJ/m²  |
| Alto  | acima de 1200 MJ/m²          |

## 3. Capacidade extintora e distância

Tabelas 6 e 7 da ABNT NBR 12693:2021, alinhadas à Tabela 1 da IT 21/2025.

| Risco | Classe A | Distância A | Classe B | Distância B |
| ----- | -------- | ----------- | -------- | ----------- |
| Baixo | 2-A      | 25 m        | 20-B     | 15 m        |
| Médio | 3-A      | 20 m        | 40-B     | 15 m        |
| Alto  | 4-A      | 15 m        | 80-B     | 15 m        |

Observação: as distâncias da classe A foram atualizadas em relação ao aplicativo
original de 2018 (que usava a IT do Corpo de Bombeiros de Minas Gerais), para
seguir a NBR 12693:2021 e a IT 21/2025 vigentes.

## 4. Estimativa da quantidade de extintores

A norma define a capacidade mínima e a distância máxima a percorrer, mas não uma
fórmula fechada para a quantidade. A quantidade depende do posicionamento e dos
obstáculos do local.

A ExtinFire estima o número de extintores pela área que cada um cobre: um círculo
de raio igual à distância máxima a percorrer, reduzido por um coeficiente que
representa os obstáculos do ambiente. Este é o método proposto no TCC de 2018,
validado contra projetos reais.

```
Área coberta por extintor = π × d² × coeficiente
N = teto( Af / área coberta por extintor )
```

| Cenário            | Coeficiente |
| ------------------ | ----------- |
| Livre acesso       | 1,0         |
| Poucos obstáculos  | 0,5         |
| Muitos obstáculos  | 0,1         |

O resultado é sempre apresentado como uma estimativa de apoio.

## 5. Regras mínimas aplicadas

- Cada pavimento deve ter no mínimo duas unidades extintoras, uma para classe A
  e outra para classes B e C (NBR 12693:2021, item 5.5.1.3).
- Abaixo de 100 m² é permitida uma única unidade de pó ABC (NBR 12693:2021).
- Ao menos um extintor a no máximo 5 m da entrada principal e das escadas
  (IT 21/2025, item 4.2.1.12.3).
- O extintor de pó ABC pode substituir extintores das classes A, B e C.

## Fontes

- IT 14/2025, CBPMESP. https://www.corpodebombeiros.sp.gov.br/
- IT 21/2025, CBPMESP. https://www.corpodebombeiros.sp.gov.br/
- ABNT NBR 12693:2021.
- ABNT NBR 14432:2001.
- Lousa, C. Z. Aplicativo para cálculo de cargas de incêndio específicas. TCC,
  UFU, 2018. https://repositorio.ufu.br/handle/123456789/21983
