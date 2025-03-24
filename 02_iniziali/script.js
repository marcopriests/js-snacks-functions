/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

//funzione normale
function firstLetters(array) {  

    const firstLettersArr = []

    for (let i = 0; i < array.length; i++) {

        firstLettersArr.push(array[i][0])
        
    }

    return firstLettersArr

}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetters(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]