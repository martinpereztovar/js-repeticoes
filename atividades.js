function somaDosNaturais() {
    const n = 10;
    let soma = 0;
    
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    
    console.log(`A soma dos primeiros ${n} números naturais é: ${soma}`);
}

somaDosNaturais();

function calculaFatorial() {
    const numero = 5;  
    let fatorial = 1;
    
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}

calculaFatorial();

function ehPrimo() {
    const numero = 17;  
    let ehPrimo = numero > 1;

    for (let i = 2; i < numero && ehPrimo; i++) {
        if (numero % i === 0) {
            ehPrimo = false;
        }
    }

console.log(`${numero} é${ehPrimo ? '' : ' não'} um número primo`);
}
ehPrimo();

function imprimeTabuada() {
    const numero = 7;  

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
imprimeTabuada();

function calculaMedia() {
        
    const quantidade = 5;

    
    const numeros = [10, 20, 30, 40, 50];

   
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }


    const media = soma / numeros.length;

    console.log(`A média dos ${quantidade} números é: ${media}`);
}
calculaMedia();

function contarDigitos() {
    const numero = 12345; 
    const numeroDigitos = numero.toString().length;

console.log(`O número ${numero} tem ${numeroDigitos} dígitos`);
}
contarDigitos();

function imprimirPrimos() {

    function ehPrimo(numero) {
        if (numero <= 1) return false;
    
        let ehPrimo = true;
    
        for (let i = 2; i < numero && ehPrimo; i++) {
            if (numero % i === 0) {
                ehPrimo = false;
            }
        }
    
        return ehPrimo;
    }
     
    const n = 5; 
    const primos = [];
    let numero = 2;
        
    while (primos.length < n) {
        if (ehPrimo(numero)) {
            primos.push(numero);
        }
        numero++;
    }
    
    console.log(`Os ${n} primeiros números primos são: ${primos.join(', ')}`);
}
imprimirPrimos();