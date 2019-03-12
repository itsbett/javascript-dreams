let color1 = document.getElementById("box1");
let color2 = document.getElementById("box2");
let img = document.getElementById("hedgehog")
let theta = 0
let i = 0

function flashColors() {
    spinHedgehog();

    if (i % 2 == 0) {
        color1.style.backgroundColor = "green";
        color2.style.backgroundColor = "purple";
        i++
    } else {
        color1.style.backgroundColor = "purple";
        color2.style.backgroundColor = "green";
        i++
    }
}

function calculateAngle (theta) {
    phi = 'rotate(' + theta.toString() + 'deg)';
    return phi
}
function spinHedgehog() {
    theta += 10;
    phi = calculateAngle(theta);
    img.style.transform = phi;
}

let killMe = setInterval(flashColors, 30);