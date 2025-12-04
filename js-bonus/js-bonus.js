/*
BONUS (a grande richiesta... 

:raised_hands:
Clicca per scoprire di più
 , in questo caso quindi create una terza cartella sempre nella stessa repo che chimate "bonus"):
JSnack 2
L’utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga;,
*/

const firstWord = prompt("inserire la prima parola") //'albero' //poi usa prompt

const secondWord = prompt("inserire la seconda parola") //'casa' //poi usa prompt

//inserisco parola 1 

//inserisco parola 2 

//confronto lunghezza parole

//se parola 1 piú lunga di parola 2 stampo prima parola 2 poi paorla 1

//se parola 1 piú corta di parola 2 stampo prima parola 1 poi paorla 2

//se parola 1 ha stessa lunghezza di parola 2 stampo messaggio "le parole hanno la stessa lunghezza"

if (firstWord.length > secondWord.length) {
    console.log(`${secondWord} ${firstWord}`);

} else if (firstWord.length < secondWord.length) {
    console.log(`${firstWord} ${secondWord}`);

} else {
    console.log('le parole hanno la stessa lunghezza');

}

/*
JSnack 5
Crea un array vuoto. 
Chiedi per 6 volte all’utente di inserire un numero, 
se è dispari inseriscilo nell’array
*/

const arrNumbers = []

for (let i = 0; i < 6; i++) {
    
    let number = parseInt(prompt('inserisci un numero intero'));
    
    if (number % 2 === 1) {
        
        arrNumbers.push(number)
    }

}

console.log(arrNumbers);