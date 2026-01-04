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

// * open the dialog (popup)
function openDialog(index) {
    const dialogRef = document.getElementById("openPicture");
    dialogRef.showModal();
    document.body.style.overflow = "hidden";
    currentIndex = index;
    render();
}

// * close the Popup
function closeDialog() {
    const dialogRef = document.getElementById("openPicture");
    dialogRef.close();
    document.body.style.overflow = "";
}

function render() {
    setImageName();
    setPictureName();
    setNumber();
}

function setImageName() {
    let pictureRef = document.getElementById("bigPicture");

    pictureRef.src = popupImages[currentIndex];
}
// * picture name
function setPictureName() {
    let nameRef = document.getElementById("fileName");

    let imageName = popupImages[currentIndex].replace("./img/", "");
    nameRef.innerText = imageName;
}
//  * next button
function next() {
    currentIndex++;
    if (currentIndex >= popupImages.length) {
        currentIndex = 0;
    }
    render();
}
//* back button
function previous() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = popupImages.length - 1;
    }

    render();
}

// *change counter
function setNumber() {
    let numberRef = document.getElementById("navNumbering");
    numberRef.innerText = currentIndex + 1 + "/" + popupImages.length;
}

// * keyboard controll

function handleEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();

        const open = document.getElementById("gallery");
        if (open) {
            open.click();
        }
    }
}

function handleArrowRight(event) {
    if (event.key === "ArrowRight") {
        event.preventDefault(); 

        const dialog = document.getElementById("openPicture");
        if (dialog && dialog.open) {
            
            const nextBtn = document.getElementById("nextClick");
            if (nextBtn) {
                nextBtn.click(); 
            }
        }
    }
}

function handleArrowLeft(event) {
    if (event.key === "ArrowLeft") {
        event.preventDefault();

        const dialog = document.getElementById("openPicture");
        if (dialog && dialog.open) {
            const preButton = document.getElementById("previousClick");
            if (preButton) {
                preButton.click();
            }
        }
    }
}

document.addEventListener("keydown", function (event) {
    handleEnter(event);
    handleArrowRight(event);
    handleArrowLeft(event);
});

document.addEventListener("keydown", function (event) {
    
    if (event.key === "Enter") {
        const active = document.activeElement; 

     
        if (active && active.matches(".picture-show img")) {
            const indexAttr = active.getAttribute("data-index");
            if (indexAttr !== null) {
                const index = parseInt(indexAttr, 10);
                openDialog(index); // 
            }
        }
    }
});
