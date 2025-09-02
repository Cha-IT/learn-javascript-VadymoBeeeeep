
let navn = (prompt("Hva heter du?"));
if (navn === "Vadym")
console.log("Hei " + navn + "!");

//2 oppgave//
let tall1 = 5;
let tall2 = 10;
let sum = tall1 + tall2;
console.log("Summen av " + tall1 + " og " + tall2 + " er " + sum);


//3 oppgave //
let alder = Number(prompt("Hvor gamell er du?"));
if (alder  <18 ) {
    console.log("Du får ikke kjøpe øl");
} if (alder >18 ) {
    console.log("Du får kjøpe øl");
}

//4 oppgave
let number = Number(prompt("Hvor gamell er du?"));
if (number <18) {
    console.log("Du kan kjope barnebilett"); 
} if (number >18) {
    console.log("Du kan kjøpe voksenbilett");
} if (number >67) {
    console.log("Du kan kjøpe pensjonistbilett");
} if (number <67);