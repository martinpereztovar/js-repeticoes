/*

let numeros = [1,2,3,4,5,6,7,8,9,10];

let alunos = ['marcus', 'nagila', 'camila', 'leonardo'];
alunos[25] = 'Isaac'

let booleans = [true, true, false, true, false];

for (let index = 0; index < alunos.length; index ++) {
    console.log(`Bem vindo(a) ${alunos[index]}`);
    
}
*/

for (let i = 1; i <= 31; i++) {
    dia.innerHTML += `<option>${i}</option>`;
}

for (let i = 1; i <= 12; i++) {
    mes.innerHTML += `<option>${i}</option>`;
}

for (let i = new Date().getFullYear(); i >= new Date().getFullYear() - 50; i--) {
    ano.innerHTML += `<option>${i}</option>`;
}

/*let dia = document.getElementById(dia);
let mes = document.getElementById(mes);
let ano = document.getElementById(ano);*/

function verificar(){
    alert(`Quem nasceu em ${dia.value}/${mes.value}/${ano.value}, nasceu em ano bissexto`);
}