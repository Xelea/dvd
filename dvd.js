const objdvd = document.querySelector("#objdvd");

posX = 400;
posY = 250;

speedX = 0.5;
speedY = 0.5;

const dvdHeight = 150;
const dvdWidth = 300;

function moovingDvd() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (posX + dvdWidth >= windowWidth || posX <= 0) {
        speedX *= -1;
        changeLogoColor();
    }
    if (posY + dvdHeight >= windowHeight || posY <= 0) {
        speedY *= -1;
        changeLogoColor();
    }

    posX += speedX;
    posY += speedY;

    objdvd.style.left = posX + "px";
    objdvd.style.top = posY + "px";

    requestAnimationFrame(moovingDvd);
}

function changeLogoColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    objdvd.style.fill = randomColor;
}

moovingDvd();