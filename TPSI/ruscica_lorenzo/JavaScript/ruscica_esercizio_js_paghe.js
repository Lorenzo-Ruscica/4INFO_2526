function aggiungi() {
    let prodotto = document.getElementById("prodoo").value.trim();
    let quantita = parseInt(document.getElementById("qty").value);
    let costo = parseFloat(document.getElementById("costo").value);

    if (!prodotto || isNaN(quantita) || isNaN(costo) || quantita < 1) {
        alert("Compila tutti i campi correttamente!");
        return;
    }

    let tabella = document.getElementById("carrello");
    let nuovaRiga = tabella.insertRow(tabella.rows.length - 2);

    let cellaProdotto = nuovaRiga.insertCell(0);
    let cellaQuantita = nuovaRiga.insertCell(1);
    let cellaCosto = nuovaRiga.insertCell(2);
    let cellaImporto = nuovaRiga.insertCell(3);
    let cellaRimuovi = nuovaRiga.insertCell(4);

    cellaProdotto.innerText = prodotto;

    let inputQuantita = document.createElement("input");
    inputQuantita.type = "number";
    inputQuantita.min = 1;
    inputQuantita.value = quantita;
    inputQuantita.onchange = function () {
        if (inputQuantita.value < 1) inputQuantita.value = 1;
        let nuovoImporto = inputQuantita.value * costo;
        cellaImporto.innerText = nuovoImporto.toFixed(2) + " €";
        aggiornaTotale();
    };
    cellaQuantita.appendChild(inputQuantita);

    cellaCosto.innerText = costo.toFixed(2) + " €";

    let importoTotale = quantita * costo;
    cellaImporto.innerText = importoTotale.toFixed(2) + " €";
    cellaImporto.className = "importo";

    let bottoneRimuovi = document.createElement("span");
    bottoneRimuovi.className = "material-icons icon-remove";
    bottoneRimuovi.innerText = "remove_shopping_cart";
    bottoneRimuovi.style.cursor = "pointer";
    bottoneRimuovi.onclick = function () {
        nuovaRiga.remove();
        aggiornaTotale();
    };
    cellaRimuovi.appendChild(bottoneRimuovi);

    aggiornaTotale();
    document.getElementById("prodoo").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("costo").value = "";
}

function aggiornaTotale() {
    let importi = document.getElementsByClassName("importo");
    let somma = 0;

    for (let i = 0; i < importi.length; i++) {
        let testo = importi[i].innerText.replace("€", "").trim();
        somma += parseFloat(testo);
    }

    let tabella = document.getElementById("carrello");
    let rigaTotale = tabella.rows[tabella.rows.length - 1];
    rigaTotale.cells[3].innerText = somma.toFixed(2) + " €";
}

function totale() {
    aggiornaTotale();
    alert("Totale carrello aggiornato!");
}
