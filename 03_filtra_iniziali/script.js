/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

// //funzione normale
// function startsWith(array, x) {
//     const startsWithArr = []

//     for (let i = 0; i < array.length; i++) {

//         if (array[i][0] === x) {
//             startsWithArr.push(array[i])
//         }

//     }

//     return startsWithArr
// }

//arrow function
const startsWith = (array, x) => {

    const startsWithArr = []

    for (let i = 0; i < array.length; i++) {
        
        if (array[i][0] === x) {
            startsWithArr.push(array[i])
        }
        
    }

    return startsWithArr

}


// Invoca la funzione qui e stampa il risultato in console

console.log(startsWith(names, "A"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]