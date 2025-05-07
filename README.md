Este código JavaScript realiza cálculos matemáticos relacionados à derivação de uma função simples expressa pelo usuário. Aqui está um resumo das funcionalidades:
Objetivo do Programa
Ele recebe uma expressão matemática digitada pelo usuário, calcula sua derivada e segunda derivada, encontra pontos críticos e determina se esses pontos são mínimos ou máximos locais.
Fluxo de Funcionamento
1.	O usuário insere uma expressão matemática em um campo de entrada.
2.	O código usa a biblioteca math.js para calcular:
o	A primeira derivada da função.
o	A segunda derivada para análise da concavidade.
3.	Os coeficientes da primeira derivada são extraídos e usados para determinar o ponto crítico.
4.	O valor da segunda derivada no ponto crítico é avaliado para classificar o ponto como:
o	Mínimo Local (segunda derivada positiva)
o	Máximo Local (segunda derivada negativa)
o	Ponto de Inflexão (segunda derivada igual a zero)
5.	Os resultados são exibidos na interface do usuário (innerText).
Principais Componentes
•	math.derivative(expressao, 'x'): Calcula a derivada da expressão.
•	math.evaluate(): Avalia a segunda derivada para determinar a natureza do ponto crítico.
•	Manipulação do DOM (document.getElementById()) para exibir os resultados ao usuário.
Tratamento de Erros
Se houver um problema ao calcular a derivada ou ao avaliar a expressão, uma mensagem de erro é exibida ao usuário (alert('Erro ao calcular. Verifique a expressão.')). 
