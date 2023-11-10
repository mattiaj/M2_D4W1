/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* Abbiamo diversi tipi di dati: il number praticamente definisce un numero in javascript e viene usato per operazioni algebriche;
 con la string puoi andare a scrivere del testo al suo interno, nello specifico una serie di caratteri;
 il tipo boolean invece è un dato logico e si esprime in "vero" o "falso";
 Il dato undefined è un valore che non è stato ancora dato. es. assegni una variabile senza dare nessun valore il riusltato sarà "undefined";
 Il dato null invece viene dato alla variabile in assegnazione e la definisce come vuota, in assenza di contenuto
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
/* Gli oggetti sono una raccolta di informazioni presi in coppia, si potrebbe definire come una variabile all'interno di una variabile.
Vengono usati per dare più informazioni per una variabile, poiché i singoli dati primitivi non sono sufficienti*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(12+20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x
x = 12
console.log(x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Mattia"
console.log(name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4-x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let name1 = "jonh"
// let name2 = "John"
// console.log(name1==name2)

let name1 = "jonh"
let name2 = "John"
name2 = name2.toLowerCase
name1 = name1.toLowerCase
console.log(name1==name2)

/* Esercizio 6 lato slide
*/
let student = {
    name:"Mattia",
    surname:"Giavatto",
    age:24,
    hobby:"lettura"
}
console.log(student)
