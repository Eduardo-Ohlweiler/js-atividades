//atividade 01
//Escreva uma função chamada fizzBuzz que recebe um parâmetro maxValue.
// Para cada número de 1 até maxValue:

//Se o número for múltiplo de 3, retorne "Fizz".
//Se o número for múltiplo de 5, retorne "Buzz".
//Se o número for múltiplo de ambos 3 e 5, retorne "FizzBuzz".
//Caso contrário, retorne o número.

/*
function fizzBuzz (x) {
    if (x % 3 === 0 && x % 5 === 0) {
        return console.log("FizzBuzz");
    } else if (x % 3 === 0) {
        return console.log ("Fizz");
    } else if (x % 5 === 0) {
        return console.log ("Buzz");
    } else {
        return console.log(x)
    }
}

fizzBuzz(30);
*/


//atividade 2
//Escreva uma função chamada parOuImpar que recebe um número e retorna 
//"Par" se o número for par e "Ímpar" se o número for ímpar

/*
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return console.log ("Par");
    } else {
        return console.log ("Ímpar");
    }
}

parOuImpar(6);
*/


//atividade 3
//Escreva uma função chamada primosAteMax que recebe um número maxValue 
//e retorna uma lista de todos os números primos até maxValue.
 
    function primosAteMax (maxValue) {
        let primos = [];
        for (let i = 2; i <= maxValue;i++) {
            let primo = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    primo = false;
                    break;
                }
                
            }
            if (primo) {
                primos.push(i);
            }
        }
        return console.log(primos);
    }
    primosAteMax(60);

    

//atividade 4
//Escreva uma função chamada multiplicadores que recebe dois parâmetros, 
//maxValue e divisor. A função deve retornar todos os números até 
//maxValue que são divisíveis por divisor.
/*
    function multiplicadores (maxValue, divisor) {
        let divisiveis = [];
        for (let i = 0; i <= maxValue; i++) {
            if(i % divisor === 0) {
                divisiveis.push(i);
            } else{
                continue;
            }
        }
        return console.log (divisiveis);
    }

    multiplicadores(80, 4);
*/

//atividade 5
//Escreva uma função chamada fibonacciAteMax que recebe um número maxValue 
//e retorna uma lista contendo os números da sequência de Fibonacci até 
//que o último número seja menor ou igual a maxValue.




//atividade 6
//Escreva uma função snapCrackle que recebe um parâmetro maxValue.
//Condições:
//Se o número for ímpar, ela deve retornar, "Snap" .
//Se o número for múltiplo de 5, retornar, "Crackle".
//Se o número não for nem ímpar e nem múltiplo de 5, retornar o próprio número.
/*
function snapCrackle (maxValue) {
    if (maxValue % 2 !== 0) {
        return console.log ("Snap")
    } if (maxValue % 5 === 0) {
        return console.log ("Crackle")
    } else {
        return console.log (maxValue)
    }
}

snapCrackle(3)*/