/*Consegna: Il software deve chiedere per 10 volte
 all’utente di inserire un numero. Il programma 
 stampa la somma di tutti i numeri inseriti. */


//dichiaro array e numero utente
 let number;
 let numbers= [];
 let somma = 0;

 //creo un ciclo che chiede 10 numeri all'utente

 for (let i = 1; i <= 10; i++ ) {

    number = parseInt(prompt(`Inserisci il numero in posizione ${i}`));
    numbers.push(number);
 }

 console.log(numbers);

 /* Fuori dal ciclo ho l'array e con
  un ciclo ne faccio la somma degli elementi */

for ( let i = 0; i < numbers.length; i++) {

    somma += numbers[i];
}
console.log(`La somma è: `, somma);