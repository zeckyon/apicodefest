/* Exercícios de interpretação de código

    1. Leia o código abaixo
    
    function minhaFuncao(variavel) {
    	return variavel * 5
    }
    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    ```
    
    a) O que vai ser impresso no console?
        No primeiro console será impresso o número 10. No segundo console será impresso o número 50.
    
    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
        Não seria impresso nada no console, pois se necessita do console.log para que o resultado ser impresso.

2. Leia o código abaixo
    
    
let textoDoUsuario = prompt("Insira um texto:")

const outraFuncao= function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(texto)

    
    a. Explique o que essa função faz e qual é sua utilidade
        Ela verifica se foi digitada a palavra "cenoura" no prompt e retorna true or false 
    
    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura // Retorna true
         ii.  `CENOURA é bom pra vista // Retorna true
         iii. `Cenouras crescem na terra // Retorna true

Exercícios de escrita de código

1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

    function meuNome() {
        alert("Eu sou Rodrigo, tenho 25 anos, moro em São Leopoldo e sou estudante.")
    }

    meuNome() 
    
    
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) 
    e uma profissão (`string`).  Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

    function informacoes(nome, idade, cidade, profissao){
        alert("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao +".")
    }

    informacoes(prompt("Digite seu nome:"), prompt("Digite sua idade:"), prompt("Digite a cidade que mora:"), prompt("Digite sua profissão:"))*/

    /*2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no 
    console o resultado.

    function soma (num1, num2){
        return num1 + num2
    }

    alert (soma(2,5))
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

    function maiorMenorIgual(num1, num2) {
        return num1 >= num2
    }
    
    console.log(maiorMenorIgual(5, 8))
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não:

    function par(num){
        return num%2 === 0
    }

    console.log(par(5))

    
    //d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

    
    function frase(mensagem) {
        return mensagem.toUpperCase() + ", " + mensagem.length
    }

    console.log(frase(prompt("Digite uma frase:")))

   3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 
      funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

      let num1 = (parseFloat(prompt("Digite um número:")))
      let num2 = (parseFloat(prompt("Digite outro número:")))      

      function soma (){
        return num1 + num2
      }

      function subtracao (){
        return num1 - num2
      }

      function multiplicacao () {
        return num1 * num2
      }

      function divisao () {
        return num1 / num2
      }

      alert("Números inseridos: " + num1 + " e " + num2 +
      "\n\nSoma: " + soma() + 
      "\nSubtração: " + subtracao() +
      "\nMultiplicação: " + multiplicacao() +
      "\nDivisão: " + divisao())

      DESAFIOS

      1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem 
      chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    
    a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
    let numero = (num1) => {
        alert(num1)
    }
    
    console.log(numero(5))
    
    
    b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este 
     resultado da soma como entrada para imprimi-lo


   let numero = (num1) => {
    console.log(num1)
}


let soma = (numUm, numDois) => {
    total = numUm + numDois
    return total
}

    numero(soma(2,5))
 
 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no
    console. 

    function pitagoras (cat1, cat2){
        return Math.sqrt (cat1 * cat1 + cat2 * cat2)
    }

    console.log (pitagoras(3, 4))*/