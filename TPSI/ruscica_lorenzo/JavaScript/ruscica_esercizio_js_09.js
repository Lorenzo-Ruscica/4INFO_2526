        const USER = "Lorenzo Ruscica";
        const PASS = "babbo";
  
        const username = prompt("Inserisci il tuo username:");
        const password = prompt("Inserisci la tua password:");

        const messaggio =
          (username === USER && password === PASS && " Accesso effettuato con successo!") ||
          (username !== USER && password === PASS && " Username errato!") ||
          (username === USER && password !== PASS && "Password errata!") ||
          "Username e password errati!";
  
        alert(messaggio);
