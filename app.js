let hexColor = document.querySelectorAll(".hexColor");
let generateBtn = document.querySelector("#generate");
let colorBackground = document.querySelectorAll(".colorBackground");
let colorPalette = document.querySelectorAll(".colorPalette");
let generator = document.querySelector(".generator");
let display = document.getElementById("display");
let copyColor = document.querySelectorAll(".copyColor");
let colorFooter = document.querySelectorAll(".colorFooter");

let hexCollection = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let randomStorage = [];
let elCount = 0;

generateBtn.addEventListener("click", () => {
    elCount = 0;
    generateColors();
});

copyColor.forEach((copyEl) => {
copyEl.addEventListener("click", () => {
    let choosEl = copyEl.id - 1;
    copyingColor(hexColor[choosEl]);
});
});

hexColor.forEach((hexEl) => {
hexEl.addEventListener("click", () => {
    copyingColor(hexEl);
});
});

function randomColors() {
    let random = Math.floor(Math.random() * 15);
    randomStorage.push(hexCollection[random]);
}

function generateColors(){
    colorPalette.forEach((hex) => {
    for(let i = 0; i < 6; i++){
    randomColors();
    }
    hex = `#${randomStorage.join("")}`;
    randomStorage = [];
    applyOnElement(hex);
});
}

function applyOnElement(col) {
    hexColor[elCount].textContent = col;
    colorBackground[elCount].style.backgroundColor = `${col}`;
    elCount++;
    
}

generateColors();


function copyingColor(color) {
        display.innerHTML = "";
        let choosen = color.textContent;
        navigator.clipboard.writeText(choosen);
        setTimeout(() => {
            display.style.visibility = `visible`;
            let tickImg = document.createElement("img");
            tickImg.src = `check.png`;
            tickImg.classList.add("tickImg");
            let copiedText = document.createElement("div");
            copiedText.classList.add("copiedText");
            let span = document.createElement("span");
            span.textContent = `${choosen} `;
            span.style.color = choosen;
            copiedText.textContent = `Copied   `;
            copiedText.appendChild(span);
            display.appendChild(tickImg);
            display.appendChild(copiedText);
            setTimeout(() => {
                display.style.visibility = `hidden`;
            }, 1000);
        
        }, 0);

}