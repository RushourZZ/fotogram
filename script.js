const popupImages = [
    "./img/Berge.jpg",
    "./img/cyberpunk.png",
    "./img/ente.png",
    "./img/fischer.png",
    "./img/himmel.png",
    "./img/kitten.png",
    "./img/schnee.png",
    "./img/see.png",
    "./img/vogel-auf-ast.png",
    "./img/vogel-auf-stein.png",
    "./img/weltraum.png",
    "./img/wolken.png",
];

let currentIndex = 0;

// * Öffnet den Dialog (Popup)
function openDialog(index) {
    const dialogRef = document.getElementById("openPicture");
    dialogRef.showModal();
    currentIndex = index;
    // onkeydown = "event.code === 'Enter' && openDialog() ";
    render();
    counter();
}
// * Der Zähler der Bilder wird aus dem HTML picture Number übernommen -> wurde in openDialog definiert.
function counter() {
    console.log(currentIndex);
}

// * schließ das Popup
function closeDialog() {
    const dialogRef = document.getElementById("openPicture");
    dialogRef.close();
}
// *Sobald das Popup geöffnet ist soll anhand des Indexes das richtige Bild angezeigt werden..

// ! Diese Funktion leert den Dialog Bereich und bereitet diesen auf innerHtml vor

function render() {
    setImageName();
    setPictureName();
    setNumber();
}

function setImageName() {
    let pictureRef = document.getElementById("bigPicture");

    pictureRef.src = popupImages[currentIndex];
}
// * Bildname
function setPictureName() {
    let nameRef = document.getElementById("fileName");

    let imageName = popupImages[currentIndex].replace("./img/", "");
    nameRef.innerText = imageName;
}
//  * Weiter Button
function next() {
    currentIndex++;
    if (currentIndex >= popupImages.length) {
        currentIndex = 0;
    }
    render();
}
//* Zurück button
function previous() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = popupImages.length - 1;
    }

    render();
}

// *Zähler verändern
function setNumber() {
    let numberRef = document.getElementById("navNumbering");
    numberRef.innerText = currentIndex + 1 + "/" + popupImages.length;
}

// * Hier weiterarbeiten für Keyboard Steuerung

document.addEventListener("keydown", function (event) {
  
  if (event.key === "Enter") {
    event.preventDefault();

    
    const open = document.getElementById("gallery");
    if (open) {
        open.click();
        
    }
  }
  
  
    if (event.key === "ArrowRight") {
        event.preventDefault(); // verhindert nur Fokus-Verschiebung

        const dialog = document.getElementById("openPicture");
        if (dialog && dialog.open) {
            // nur wenn mein Popup offen ist
            const nextBtn = document.getElementById("nextClick");
            if (nextBtn) {
                nextBtn.click(); // ruft mein onclick="next()" auf
            }
        }
    } else if (event.key === "ArrowLeft") {
        event.preventDefault();

        const dialog = document.getElementById("openPicture");
        if (dialog && dialog.open) {
            const preButton = document.getElementById("previousClick");
            if (preButton) {
                preButton.click();
            }
        }
    }
});

document.addEventListener("keydown", function (event) {
    // Nur reagieren, wenn Enter gedrückt wurde
    if (event.key === "Enter") {
    
        const active = document.activeElement; // aktuelles fokussiertes Element

        // Prüfen, ob das fokussierte Element ein Bild aus der Galerie ist
        if (active && active.matches(".picture-show img")) {
            const indexAttr = active.getAttribute("data-index");
            if (indexAttr !== null) {
                const index = parseInt(indexAttr, 10);
                openDialog(index); // öffnet Dialog mit passendem Bild
            }
        }
    }
});
