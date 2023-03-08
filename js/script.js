/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

/*Preparazione
kmTrip - prompt - check !isNaN
userAge - prompt - check !isNaN
const priceKm = 0.21
const discountTwenty = 0.20
const discountForty = 0.40
let fullPrice =
let finalPrice -   if/else
finalPrice.toFixed(2);
*/

//Variables
const priceKm = 0.21
const discountTwenty = 0.80
const discountForty = 0.60
const kmTrip = parseInt(prompt('Inserire numero di chilometri da persorrere'));
const userAge = parseInt(prompt('Inserire età del passeggero'));
console.log(kmTrip);
console.log(userAge);
let fullPrice = priceKm * kmTrip;
let finalPrice;

//Final Price
if (userAge < 18){
    finalPrice = fullPrice * discountTwenty;
} else if (userAge > 65) {
    finalPrice = fullPrice * discountForty;
} else {
    finalPrice = fullPrice;
}
document.getElementById('ticket').innerHTML += `<p>Il tuo viaggio di ${kmTrip} Km per un passeggero di ${userAge} anni costerà: ${finalPrice.toFixed(2)} €</p>`;