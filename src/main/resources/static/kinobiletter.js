let billetter = [];

function visBilletter() {
    let film = document.getElementById("film").value;
    let antall = parseInt(document.getElementById("antall").value)
    const fnavn = document.getElementById("fnavn").value;
    const enavn = document.getElementById("enavn").value;
    let tlfnr = document.getElementById("tlfnr").value;
    let epost = document.getElementById("epost").value;

    let error = NaN;

    // Sjekker om en film er valgt
    if (film.match(/^Velg film her$/)) {
        error = 1;
    }

    // Skjekker om et tall er skrevet inn
    if (isNaN(antall) || antall <= 0) {
        document.getElementById("antallsjekk").innerText = "Må skrive noe i antall";
        document.getElementById("antall").value = "";
        error = 1;
    } else {
        document.getElementById("antallsjekk").innerText = "";
    }

    // Skjekker om navn er skrevet inn riktig
    const navnRegex = /^(\s+|)$/;
    if (navnRegex.test(fnavn)) {
        document.getElementById("fnavnsjekk").innerText = "Må skrive noe inn i fornavnet";
        error = 1;
    } else {
        document.getElementById("fnavnsjekk").innerText = "";
    }

    if (navnRegex.test(enavn)) {
        document.getElementById("enavnsjekk").innerText = "Må skrive noe inn i fornavnet";
        error = 1;
    } else {
        document.getElementById("enavnsjekk").innerText = "";
    }


    // Skjekker om et gyldig telefonnummer er skrevet inn
    if (validateTlfnr(tlfnr)) {
        document.getElementById("tlfnrsjekk").innerText = "";
    } else {
        document.getElementById("tlfnr").value = "";
        document.getElementById("tlfnrsjekk").innerText = "Må skrive noe i telefonnr";
        error = 1;
    }

    // Skjekker om epost er gyldig
    if (validateEpost(epost)) {
        document.getElementById("epostsjekk").innerText = "";
    } else {
        document.getElementById("epost").value = "";
        document.getElementById("epostsjekk").innerText = "Må skrive noe i epost";
        error = 1;
    }

    // Oppretter billetten som objekt
    let billett = {
        film: film,
        antall: antall,
        fnavn: fnavn,
        enavn: enavn,
        tlfnr: tlfnr,
        epost: epost
    };

    // Legger inn billett hvis input er skrevet inn riktig
    if (isNaN(error)) {
        billetter.push(billett);
        emptyInput()
    }

    let ut = "<tr>" + "<th>Film</th>" + "<th>Antall</th>" +
        "<th>Fornavn</th>" + "<th>Etternavn</th>" + "<th>Telefonnr</th>" +
        "<th>Epost</th>" + "</tr>";

    // Skriver ut billetten i tabell
    for (let b of billetter) {
        ut += "<tr><td>" + b.film + "</td><td style='text-align: end'>" + b.antall +
            "</td><td style='text-align: end'>" + b.fnavn + "</td><td style='text-align: end'>" + b.enavn +
            "</td><td style='text-align: end'>" + b.tlfnr + "</td><td style='text-align: center'>" + b.epost +
            "</td></tr>";
    }

    document.getElementById("utskrift").innerHTML = ut;
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
