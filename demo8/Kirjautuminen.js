document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
   if (localStorage.getItem("kirjautunut") === "kylla") {
    document.getElementById("tervetulo_teksti").textContent += ` ${localStorage.getItem("nimi")}`;
    document.getElementById("kirjautumis_lomake").style.display = "none";
    }
    document.getElementById("kirjauduUlos").style.display = "block";
}

function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}

