function visBilletter() {
    const billett = [];

    const film = document.getElementById("film").value;
    const antall = parseInt(document.getElementById("antall").value);
    const fnavn = document.getElementById("fnavn").value;
    const enavn = document.getElementById("enavn").value;
    const tlfnr = document.getElementById("tlfnr").value;
    const epost = document.getElementById("epost").value;
    billett.push(film);
    if (isNaN(antall)) {
        document.getElementById("antallsjekk").innerText = "Må skrive noe i antall!";
    } else {
        document.getElementById("antallsjekk").innerText = "";
        billett.push(antall);

    }
    billett.push(fnavn);
    billett.push(enavn);
    billett.push(tlfnr);
    billett.push(epost);


    let ut = "<table><tr>" + "<th>Film</th>" + "<th>Antall</th>"+
        "<th>Fornavn</th>" + "<th>Etternavn</th>" + "<th>Telefonnr</th>"+
        "<th>Epost</th>" + "</tr><tr>";

    for (let b of billett) {
        ut += "<td>";
        ut += b;
        ut += "</td>";
    }
    ut += "</tr></table>";


    document.getElementById("utskrift").innerHTML = ut;


}
