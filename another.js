//node another.js da se pokrene kod
let broj = 23;
console.log(broj);
broj = "deset";
console.log(typeof broj);
broj = null;//brisanje iz memorije null== nista
console.log(typeof broj);

//1. Primitivni/Value Types
//1.1String
//1.2Number
//1.3Boolean
//1.4undefined
//1.null

//2.Referencni tipovi
//2.1.object
//2.2array
//2.3function

//Objekat:
let person = {
    name: "Arnaldo",
    surname: "Arnaldovic",
    age: 13
    //string==name, surname
    //number==age
};
//age
let personAge = person.age;
console.log("Age: " + person.age);
console.log("Ime: " + person.name);
console.log("Prezime: " + person.surname);

let selection = //kod koji ce pustiti korisnika da odabere name surname i age
//moze se korisitit . ili [] da se pristupi podacima
    let prezime = person["surname"];

console.log(person);





