
const gasolina = 5.55;
const etanol = 4.80;
const tipoCombust = 'gasolina';
const gastoMedio = 12;
const distancia = 650;

const litrosConsumidos = distancia/gastoMedio

if (tipoCombust === 'etanol') { 
  valorGasto = litrosConsumidos * etanol;
        console.log(valorGasto.toFixed(2));

} else {valorGasto = litrosConsumidos * gasolina;
        console.log(valorGasto.toFixed(2));
}
