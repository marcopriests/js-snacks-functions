/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

// //funzione normale
// function vowelsCounter(string) {
//     let counter = 0

//     for (let i = 0; i < string.length; i++) {

//         if (string[i].toLowerCase() === "a" || string[i].toLowerCase() === "e" || string[i].toLowerCase() === "i" || string[i].toLowerCase() === "o" || string[i].toLowerCase() === "u") {
//             counter++
//         }

//     }

//     return counter
// }

//arrow function
const vowelsCounter = (string) => {
    let counter = 0

    for (let i = 0; i < string.length; i++) {

        if (string[i].toLowerCase() === "a" || string[i].toLowerCase() === "e" || string[i].toLowerCase() === "i" || string[i].toLowerCase() === "o" || string[i].toLowerCase() === "u") {
            counter++
        }

    }

    return counter
}

// Invoca la funzione qui e stampa il risultato in console

console.log(vowelsCounter(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)