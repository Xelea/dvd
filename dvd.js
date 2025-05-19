const objdvd = document.querySelector("#objdvd"); // Select the DVD logo element

/* Initial position of the DVD logo */
posX = 400;
posY = 250;

/* Speed of the DVD logo */
speedX = 0.5;
speedY = 0.5;

/* Height and Width of the DVD logo */
const dvdHeight = 150; // reduce the gap on the bottom present because the background of the logo is too big
const dvdWidth = 300;

function moovingDvd() {
    /* Get the height and width of the window */
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (posX + dvdWidth >= windowWidth || posX <= 0) {  // Check if the logo as reach the end of the window
        speedX *= -1; // Reverse the speed
        changeLogoColor(); // Change the color of the logo when it hits the wall
    }
    if (posY + dvdHeight >= windowHeight || posY <= 0) {
        speedY *= -1;
        changeLogoColor();
    }

    /* Update the position x and y of the logo */
    posX += speedX;
    posY += speedY;

    /* Update the position of the logo */
    objdvd.style.left = posX + "px";
    objdvd.style.top = posY + "px";

    requestAnimationFrame(moovingDvd); // Call the function again to create an animation
}

/* Function to change the color of the logo*/
function changeLogoColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`; // Generate a random color
    objdvd.style.fill = randomColor; // Change the color of the logo by changing the fill property
}

moovingDvd(); // Call the function to start the animation