// 3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário a ser transferido é calculado da seguinte maneira: 

// valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('./funcoes-auxiliares-ex3');
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    }
    else if (salario > 1100 && salario <= 2500) {
        aliquota = 0.10;
        
   } else { (salario > 2500)
        aliquota = 0.15;
       }  
    //TODO Criar as demais condições para as aliquotas de 10.00% e 15.00%.
    return aliquota * salario;
}

//Calcula o imposto através da função "calcularImposto":
const valorImposto = calcularImposto(valorSalario);
//Calcula e imprime a Saída (com 2 casas decimais):
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));

