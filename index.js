/*

let numeros = [1,2,3,4,5,6,7,8,9,10];

let alunos = ['marcus', 'nagila', 'camila', 'leonardo'];
alunos[25] = 'Isaac'

let booleans = [true, true, false, true, false];

for (let index = 0; index < alunos.length; index ++) {
    console.log(`Bem vindo(a) ${alunos[index]}`);
    
}
*/



let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
for (let i = 0; i < meses.length; i++) {
    mes.innerHTML += `<option>${meses[i]}</option>`;
}

for (let i = new Date().getFullYear(); i >= new Date().getFullYear() - 50; i--) {
    ano.innerHTML += `<option>${i}</option>`;
}

/*let dia = document.getElementById(dia);
let mes = document.getElementById(mes);
let ano = document.getElementById(ano);
dia.innerHTML += ''; por que isso não funcionou?*/

function verificarMes() {
    dia.innerHTML = '';
    if (mes.value === 'Fevereiro') {
        for (let i = 1; i <= 29; i++) {
            dia.innerHTML += `<option value="${i}">${i}</option>`;
        }
    }
    else {
        for (let j = 1; j <= 31; j++) {
            dia.innerHTML += `<option value="${j}">${j}</option>`;
        }
    }
}
/*Teve que adicionar uma primeira opção de Selecionar mes para poder ler o mes de janeiro, queria entender melhor o porquê*/

function verificar() {
    const divisivelPor4 = ano.value % 4 === 0;
    const divisivelPor100 = ano.value % 100 === 0;
    const divisivelPor400 = ano.value % 400 === 0;
    let bisexxto = divisivelPor4 && (!divisivelPor100 || divisivelPor400);

    let bisexxtoPositivo = 'nasceu';
    let bisexxtoNegativo = 'não nasceu';

    bisexxto ? alert(`Quem nasceu em ${dia.value} de ${mes.value} de ${ano.value}, ${bisexxtoPositivo} em ano bissexto`) : alert(`Quem nasceu em ${dia.value}/${mes.value}/${ano.value}, ${bisexxtoNegativo} em ano bissexto`);
}