// Generate a random color

const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalID
const startChangingColor = function () {
    if (!intervalID) {
        intervalID = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function () {
    clearInterval(intervalID);
    intervalID = null;
}

document.getElementById("start").addEventListener("click", startChangingColor);

document.getElementById("stop").addEventListener("click", stopChangingColor);