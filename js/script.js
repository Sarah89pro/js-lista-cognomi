/*Instructions
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc...(non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array)
del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico*/


//array with surnames list
var surnames = ["PROIETTI", "DI VITA", "PACINI", "MAROCCHINI", "FRASCATANI", "ROMANELLI", "ANSELMI"];

//Ask surname to user
var userSurname = prompt("Inserisci il tuo Cognome").toUpperCase();

//WHILE loop to get the data we want
while (userSurname.length <= 0) { //altro modo while (cognomeUtente=== null II cognomeUtente.trim() === " ") {
  userSurname = prompt("Inserisci il tuo Cognome").toUpperCase();
}

//add data to the array surnames and put it in alphabetical order
surnames.push(userSurname);
surnames.sort();

for (var i = 0; i < surnames.length; i++) {
  document.getElementById("surnames-list").innerHTML += "<ul>" + surnames[i] + "</ul>";
}
// New Surname position
var position = surnames.indexOf(userSurname) + 1;
document.getElementById("position").innerHTML = "Sei il numero " + position + " nell'elenco";