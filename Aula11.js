//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima 
//cada número Par encontrado.


for (let i = 2; i <= 50; i++) {
   if (i % 2 === 0)  {
    console.log(i);
   } 
    
}

//Solução do prof:

const numeros = [0,1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
    
}
