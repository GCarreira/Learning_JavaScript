/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carro {
    marca;
    cor;
    gastoMedioKm;
    
    constructor(marca,cor,gastoMedioKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularGastoViagem(distancia,precoCombustivel){
        return distancia * this.gastoMedioKm * precoCombustivel;
    }
}

const fox = new Carro('Volks','branco',1/11);
const c4 = new Carro('Citroen','branco',1/10);

console.log(fox.calcularGastoViagem(200,5.55));
console.log(c4.calcularGastoViagem(200,5.55));