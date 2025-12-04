/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare,
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare,
si ma noi cosa vogliamo fare?,
torniamo a scrivere in italiano,
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

//genero un numero random per il giocatore

//genero un numero random per il pc

//confronto i due risultati ottenuti

//se numero giocatore > numero pc - vince il giocatore

//se numero giocatore < numero pc - vince pc

//se numero giocatore = numero pc - pareggio

const playerRoll = Math.floor(Math.random() * 6) + 1;
console.log(playerRoll);

const pcRoll = Math.floor(Math.random() * 6) + 1;
console.log(pcRoll);

if (playerRoll > pcRoll) {
    console.log('vince il giocatore');

} else if (playerRoll < pcRoll) {
    console.log('vince il pc');

} else {
    console.log('pareggio');

}
