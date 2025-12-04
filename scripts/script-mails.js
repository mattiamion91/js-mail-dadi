/*
Esercizio di oggi:
nome repo: js-mail-dadi

Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email
*/

const invitedEmails = [
  "marco.rossi87@example.com",
  "luna.bianchi24@mailtest.com",
  "simone.verdi91@fakeinbox.org",
  "giulia.fontana22@demoemail.net",
  "alessio.pellegrini@mockmail.co",
  "sara.moretto19@testmailbox.com",
  "tommy.ferrara@samplemail.org",
  "elena.costa77@fakemail.it",
  "raffaele.marino@dummyinbox.net",
  "chiara.riva_01@example.org",
  "luca.gentile33@tempmailbox.com",
  "marta.colombo47@demoaccount.net",
  "paolo.franchi@placeholdermail.com",
  "valentina.seri89@mytestmail.org",
  "daniele.conti55@trymail.co",
  "sofia.marcuzzi@inboxfake.com",
  "nicolo.rizzi76@mailplaceholder.com",
  "federica.valli91@mockaccount.net",
  "andrea.deangelis20@testinbox.co",
  "giorgia.zerbi44@fakemailbox.org",
  "matteo.pini08@demoemail.co",
  "arianna.ferri29@emailfinto.com",
  "riccardo.moro73@fakeuser.net",
  "francesca.lodi11@tempmail.org",
  "emanuele.corsi62@sampleinbox.com"
]; //lista degli invitati

let inputEmail = prompt('inserisci la tua mail') //mail inserita da verificare

let declaredEmail = false //imposta di base che la mail non sia presente nella lista con un FALSE

for (i = 0; i < invitedEmails.length; i++) {
    if (invitedEmails[i] === inputEmail) {
        declaredEmail = true;
    }
}
console.log(declaredEmail);
