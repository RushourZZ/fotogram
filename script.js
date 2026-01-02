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
    let pictureRef = document.getElementById("bigPicture");

    pictureRef.src = popupImages[currentIndex];

    setPictureName();
    setNumber();
}

function setPictureName() {
    let nameRef = document.getElementById("fileName");

    let imageName = popupImages[currentIndex].replace("./img/", "");
    nameRef.innerText = imageName;
}

function next() {
    currentIndex++;
    if (currentIndex >= popupImages.length) {
        currentIndex = 0;
    }
    render();
}

function previous() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = popupImages.length - 1;
    }
    render();
}

function setNumber() {
    let numberRef = document.getElementById("navNumbering");
    numberRef.innerText = currentIndex + 1 + "/" + popupImages.length;
}


