const popupImages = [
    "./img/Berge.png",
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

//#region open/close Dialog
function openDialog(index) {
    const dialogRef = document.getElementById("openPicture");
    dialogRef.showModal();
    document.body.style.overflow = "hidden";
    currentIndex = index;
    render();
}

function closeDialog() {
    const dialogRef = document.getElementById("openPicture");
    dialogRef.close();
    document.body.style.overflow = "";
}
//#endregion

//#region render
function render() {
    setImageName();
    setPictureName();
    setNumber();
}

function setImageName() {
    let pictureRef = document.getElementById("bigPicture");
    pictureRef.src = popupImages[currentIndex];
}

function setPictureName() {
    let nameRef = document.getElementById("fileName");
    let imageName = "Name:" + " " + popupImages[currentIndex].replace("./img/", "").replace(".png", "").replace(".png", "");
    nameRef.innerText = imageName;
}

function setNumber() {
    let numberRef = document.getElementById("navNumbering");
    numberRef.innerText = currentIndex + 1 + "/" + popupImages.length;
}
//#endregion

//#region buttons next/forward
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
//#endregion

//#region keyboard controll
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
                openDialog(index);  
            }
        }
    }
});
//#endregion