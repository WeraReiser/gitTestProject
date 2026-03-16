// Seite ist vollständig geladen
document.addEventListener('DOMContentLoaded', function () {

    // Intro-Text dynamisch ändern
    const intro = document.getElementById('intro');
    if (intro) {
        intro.textContent = 'JavaScript ist aktiv - die Seite ist bereit!';
    }

    // Aktuelles Datum anzeigen
    const heute = new Date();
    const datumText = document.createElement('p');
    datumText.textContent = 'Heute ist: ' + heute.toLocaleDateString('de-AT');
    document.querySelector('main').appendChild(datumText);

});
