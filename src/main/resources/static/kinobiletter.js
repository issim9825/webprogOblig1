let billetter = [];
function visBilletter() {
    let film = document.getElementById("film").value;
    let antall = parseInt(document.getElementById("antall").value)
    let tlfnr = document.getElementById("tlfnr").value;
    let epost = document.getElementById("epost").value

    // Sjekker om en film er valgt
    if (film.match(/^Velg film her$/)) {
        film = "";
    }

    // Skjekker om et tall er skrevet inn
    if (isNaN(antall)) {
        document.getElementById("antallsjekk").innerText = "Må skrive noe i antall!";
        antall = "";
    } else {
        document.getElementById("antallsjekk").innerText = "";
    }

    // Skjekker om et gyldig telefonnummer er skrevet inn
    if (validateTlfnr(tlfnr)) {
        document.getElementById("tlfnrsjekk").innerText = "";
    } else {
        tlfnr = "";
        document.getElementById("tlfnrsjekk").innerText = "Må skrive noe i telefonnr";
    }

    // Skjekker om epost er gyldig
    if (validateEpost(epost)) {
        document.getElementById("epostsjekk").innerText = "";
    } else {
        epost = "";
        document.getElementById("epostsjekk").innerText = "Må skrive noe i telefonnr";
    }

    // Oppretter billetten som objekt
    let billett = {
        film: film,
        antall: antall,
        fnavn: document.getElementById("fnavn").value,
        enavn: document.getElementById("enavn").value,
        tlfnr: tlfnr,
        epost: epost
    };

    /*
    if (validateTicket(billett)) {
        billetter.push(billett);
        console.log("Good!")
    }
     */
    billetter.push(billett);


    let ut = "<tr>" + "<th>Film</th>" + "<th>Antall</th>" +
        "<th>Fornavn</th>" + "<th>Etternavn</th>" + "<th>Telefonnr</th>" +
        "<th>Epost</th>" + "</tr>";

    // Skriver ut billetten i tabell
    for (let b of billetter) {
        ut += "<tr><td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fnavn + "</td>" +
            "<td>" + b.enavn + "</td><td>" + b.tlfnr + "</td><td>" + b.epost + "</td></tr>";
    }

    document.getElementById("utskrift").innerHTML = ut;
    emptyInput();
}

function emptyInput() {
    document.getElementById("film").value = "Velg film her";
    document.getElementById("antall").value = "";
    document.getElementById("fnavn").value = "";
    document.getElementById("enavn").value = "";
    document.getElementById("tlfnr").value = "";
    document.getElementById("epost").value = "";
}

function slett() {
    billetter = [];
    document.getElementById("utskrift").innerHTML = "";
}

function validateTlfnr(tlfnr) {
    // validerer om et nummer er 8 sifre
    const tlfnrRegex = /^\d{8}$/;
    return tlfnrRegex.test(tlfnr);
}

function validateEpost(epost) {
    // validerer om en epost er riktig
    const epostRegex = /^[^\s@]+@+[^\s@]+\.+[^\s@]+$/;
    return epostRegex.test(epost);
}

function validateTicket(ticket) {
    for (let value of ticket) {
        if (!value) {
            return false;
        }
    }
    return true;
}