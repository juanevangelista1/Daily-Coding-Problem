### Documentação e Exemplo de Código

#### Objetivo

Resolver o problema de determinar o número de maneiras únicas de subir uma escada de N degraus, dado um conjunto de passos permitidos X.

**Abordagem:**

1. Usamos um array `ways` para armazenar o número de maneiras de alcançar cada degrau.
2. Inicializamos `ways[0]` com 1 porque há uma maneira de ficar no degrau 0 (não subir).
3. Para cada degrau de 1 a N, calculamos o número de maneiras de alcançá-lo somando as maneiras de alcançar os degraus anteriores, com base nos passos permitidos em X.
4. Finalmente, retornamos `ways[N]`, que contém o número de maneiras de alcançar o degrau N.

**Motivação:**

Usar um array para armazenar resultados parciais permite um cálculo eficiente através de programação dinâmica. Somar os caminhos anteriores com base nos passos permitidos generaliza a solução para qualquer conjunto de passos X.

**Melhores Práticas:**

- **SOLID:** O código tem uma única responsabilidade: resolver o problema específico de contar as maneiras de subir a escada.
- **Clean Code:** Variáveis descritivas (`ways`, `step`) e lógica clara e linear.
