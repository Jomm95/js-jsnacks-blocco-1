//Consegna: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

//Chiedo all'utente fino a quale numero vuole sapere il valore al cubo
const userNumber = parseInt(prompt("Inserisci il numero fino al quale vuoi conoscere il valore al cubo"));
let numberList = [];

//verifico se il numero inserito è corretto (n > 0)

if (isNaN(userNumber) || userNumber < 0) {
    alert("Il numero inserito non è valido");
} else {

//ciclo for che genera i numeri fino al numero scelto
    for( let i = 0; i <= userNumber - 1 ; i++) {
        numberList[i] = Math.pow((i + 1), 3);
    }
}

    console.log(numberList);