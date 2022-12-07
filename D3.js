/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function number(a) {
//   let result;
//   if (a > 10) {
//     result = 'Maggiore';
//   } else {
//     result = 'Non maggiore';
//   }
//   return result;
// }
// console.log(number(20));

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const number= 5

// if (number === 5) {
//   console.log("equal");
// } else if (number !== 5) {
//   console.log("not equal")
// }


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number= 344

// if ((number % 5) === 0) {
//   console.log("divisibile per 5")
// } else {
//   console.log("non divisibile per 5")
// }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart= 49;

// if (totalShoppingCart > 50) {
//   console.log ("Spedizione gratis , Tot", totalShoppingCart)
// } else if (totalShoppingCart <= 50){
//   console.log("Costo spedizione 10 , Tot", (totalShoppingCart + 10))
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart= 51; //alternativa
// let num = parseFloat(totalShoppingCart);
// let val = num - (num * .20);
// console.log(val);

// let totalShoppingCart= 51;
// let sconto= totalShoppingCart - ((totalShoppingCart * 20) / 100);

// if (sconto > 50) {
//   console.log ("Spedizione gratis , Tot", totalShoppingCart)
// } else if (sconto <= 50) {
//   console.log("Costo spedizione 10 , Tot", (totalShoppingCart + 10))
// }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number1 = 3
// let number2 = 13
// let number3 = 10

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number = 742
// if ((number % 2) === 0 ){
//   console.log("Pari")
// }
// else {
//   console.log("dispari")
// }

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let val = 11
// if (val >= 5 && val < 10) {
//     console.log("Meno di 10");
//   } else if (val < 5) {
//     console.log("Meno di 5");
//   } else if (val >= 10) {
//     console.log("Uguale a 10 o maggiore");
//   }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


/* SCRIVI QUI LA TUA RISPOSTA */

// const me = {
//   name: 'John',
//   lastName: 'Doe',
//  skills: ['javascript', 'html', 'css'],
// }
// me.city = 'Toronto'
// console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const me = {
//   name: 'John',
//   lastName: 'Doe',
//  skills: ['javascript', 'html', 'css'],
// }

// delete me.lastName
// console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const me = {
//   name: 'John',
//   lastName: 'Doe',
//  skills: ['javascript', 'html', 'css'],
// }

// me.skills.pop()
// console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const numbers = []
// // console.log(numbers)
// numbers.push(1,2,3,4,5,6,7,8,9,10)
// console.log(numbers)

/* ESERCIZIO 15
Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// numbers.pop()
// console.log(numbers)
// numbers.push(100)
// console.log(numbers)
