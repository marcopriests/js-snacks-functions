/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

//funzione normale
function greetingsByTime(string) {
    const d = new Date()

    if (d.getHours <= 13) {
        return "Buongiorno " + string
    } else if (d.getHours <= 17) {
        return "Buon pomeriggio " + string        
    } else {
        return "Buonasera " + string
    }
}

// Invoca la funzione qui e stampa il risultato in console

console.log(greetingsByTime(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.