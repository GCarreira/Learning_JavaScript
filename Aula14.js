// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.
//         Entrada: 5, 3, 4, 1, 10, 8
//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');
const n = gets();
let maiorPar = 0;
let menorImpar = 0;

for (let i = 0; i < n; i++) {
    const lista = gets();
    if (lista % 2 === 0) {
        if (lista > maiorPar) {
            maiorPar = lista;
        }
    } else {
        if (menorImpar === 0) {
            menorImpar = lista;
        } else if (lista < menorImpar) {
            menorImpar = lista;
        }
    } 
}print(maiorPar)
    print(menorImpar)