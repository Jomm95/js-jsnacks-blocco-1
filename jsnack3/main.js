//Consegna: Calcola la somma e la media dei primi 10 numeri.


let sum = 0;
let averageValue = 0;
const limitValue = 11;
//ciclo for che parte da 1 e arriva a 10
for (let i = 1; i < limitValue; i++) {
    sum += i;
}
averageValue = sum / 10;

console.log("La somma dei primi 10 numeri è " + sum);
console.log("La media dei primi 10 numeri è " + averageValue);