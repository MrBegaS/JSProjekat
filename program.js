//1-9 JavaScript Fundamentals
console.log("Hello World");

//varijable u javi su var, let i const
//number1 je proizvoljno ime ali se slijedi konvencija
// = nije jednako vec dodjela vrijednosti
//jednako je operator == ili ===
// 23 vrijednost
//; moze da se pise a i ne mora ali se preporucuje
var number1 = 23;
var number2 = 34;
var rezultat = number1 + number2;
console.log(rezultat);

let temperature = 33;
//tip varijable mozemo promijeniti npr u tekst
//temperature = "danas je divan dan"
//ne moze let temperature ponovo upisat
console.log(temperature);

let number = 9;
console.log(number);

const piConstant = 3.14;
console.log(piConstant);

//Razlika izmedju let i var

let number1 = 10;
let number2 = 15;

let sum = suma(number1 + number2);

let rezultat = sum(15 + 20);
//funkcija sluzi da izbjegnemo ponavljanje
function sum(num1, num2) {
  var rez = num1 + num2;
  return rez;
}
//ovaj rezultat let vidi samo unutar funkcije
console.log(rez);
//







//2-9 JavaScript Fundamentals//////////////////
//
//ECMA je specifikacija-standard, set principa.
//JavaScript je programski jezik koji implementira(potvrdjuje) tu specifikaciju.



