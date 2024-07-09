# Desafio: Encontrar Elementos Únicos em um Array

## Enunciado

Este problema foi solicitado pelo Facebook.

Dado um array de inteiros em que dois elementos aparecem exatamente uma vez e todos os outros elementos aparecem exatamente duas vezes, encontre os dois elementos que aparecem apenas uma vez.

Por exemplo, dado o array `[2, 4, 6, 8, 10, 2, 6, 10]`, retorne `4` e `8`. A ordem não importa.

## Solução em JavaScript

Vamos resolver este problema utilizando JavaScript. A ideia principal é usar um objeto (ou mapa) para contar as ocorrências de cada número e, em seguida, identificar quais números aparecem apenas uma vez.
