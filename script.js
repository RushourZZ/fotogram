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


// * Öffnet den Dialog (Popup)
function openDialog(image) {
    const dialogRef = document.getElementById("openPicture");
    dialogRef.showModal();
    const numbering = image.getAttribute("pictureNumber");
    counter(numbering);
     
}
// * Der Zähler der Bilder wird aus dem HTML picture Number übernommen -> wurde in openDialog definiert.
function counter(imageCounter) {
     
    console.log(imageCounter);
    

}

// * schließ das Popup
function closeDialog() {
    const dialogRef = document.getElementById("openPicture");
    dialogRef.close();
    
}
// *Sobald das Popup geöffnet ist soll anhand des Indexes das richtige Bild angezeigt werden..
function showPictures (){
    if(openDialog == true){
        
    }
}
