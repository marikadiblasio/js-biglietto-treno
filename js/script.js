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
if ((kmTrip && !isNaN(kmTrip)) && (userAge && !isNaN(userAge))){
    if (userAge < 18){
        finalPrice = fullPrice * discountTwenty;
    } else if (userAge > 65) {
        finalPrice = fullPrice * discountForty;
    } else {
        finalPrice = fullPrice;
    }
    document.getElementById('ticket').innerHTML += `<p class="fs-4 ms-3 py-3">Il tuo viaggio di <span class="text-success border border-1 border-success px-1 rounded fw-semibold">${kmTrip} Km</span> per un passeggero di <span class="text-success border border-1 border-success px-1 rounded fw-semibold">${userAge} anni</span> costerà: <span class="text-success fs-1 fw-semibold">${finalPrice.toFixed(2)} € </span></p>`;

} else {
    document.getElementById('ticket').innerHTML += `<p class="text-danger border border-danger border-2 rounded ms-3 fs-4">Inserire <span class="fw-semibold fs-1"> numeri </span>nel campo chilometri e nel campo età!</p>`;
}