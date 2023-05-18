// Turn the previous exercises to functions

//const valorEtiqueta = 100;
//const formaPagamento = 3;


function calcularDesconto(valorEtiqueta, formaPagamento) {
    if (formaPagamento === 1) {
        return (valorEtiqueta - (valorEtiqueta * 0, 10));
    } else if (formaPagamento === 2) {
        return (valorEtiqueta - (valorEtiqueta * 0, 15));
    } else if (formaPagamento === 3) {
        return (valorEtiqueta)
    } else {
        return (valorEtiqueta + (valorEtiqueta * 0, 10))
    }
}

console.log(calcularDesconto(100, 4));

//ou: solução do professor

function aplicarDesconto(valor, desconto){
    return (valor -(valor * (desconto/100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * juros/ 100));
}

const preçoEtiqueta = 100;
const formaPagamento = 2;

if (formaPagamento === 1){
    console.log(aplicarDesconto(preçoEtiqueta,10));
}else if (formaPagamento === 2) {
   console.log(aplicarDesconto(preçoEtiqueta,15));
}else if (formaPagamento === 3){
    console.log(preçoEtiqueta);
}else {
    console.log(aplicarJuros(preçoEtiqueta,10));
}