//1 oppgave
let navn = "Vadym";
console.log("Hei" + navn);

//2 oppgave
let tall1 = 5;
let tall2 = 10;
let sum = tall1 + tall2;
console.log("Summen av " + tall1 + " og " + tall2 + " er " + sum);
console.log("Summen av *{tall1}* og *{tall2}* er *{sum}");

//3 oppgave 
let alder = 25(promt("Hvor gamell er du?:"));
if (alder < 18) {
    console.log("Du får ikke kjøpe øl");
} if (alder >= 18) {
    console.log("Du får kjøpe øl");
}

//4 oppgave
let number = number(prompt("Hvor gamell er du?:"));
if (alder < 0) {
    console.log("Du er ikke født enda");
} if (alder == 0) {
    console.log("Du er akkurat født");
} if (alder > 0 && alder < 18) {
    console.log("Du er et barn");
} if (alder >= 18 && alder < 67) {
    console.log("Du er voksen");
} if (alder >= 67) {
    console.log("Du er pensjonist");
} else {
    console.log("Ugyldig alder");
}   