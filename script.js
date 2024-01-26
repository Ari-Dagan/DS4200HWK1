const myImage = document.querySelector("img");
const myButton = document.querySelector("button");

let a = 20;
let b = 20;
let c = 20;

let aVal= 10;
let bVal = 20;
let cVal = 30;
let imgCounter = 1;
let images = [
    "images/me1.jpg",
    "images/me2.png",
    "images/me3.jpg",
    "images/me4.JPG",
    "images/me5.jpg",
    "images/me6.jpg",
    "images/me7.jpg",
]

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    myImage.setAttribute("src", images[imgCounter]);
    imgCounter += 1;
    if (imgCounter == images.length) {
        imgCounter = 0;
    }
};

myButton.onclick = () => {
    document.body.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
    if( a < 255) {
        a += aVal;
    }
    else {
        a = 10;
        aVal +=30
    }

    if( b < 255) {
        b += bVal;
    }
    else {
        b = 10;
        bVal +=20
    }

    if( c < 255) {
        c += cVal;
    }
    else {
        c = 10;
        cVal +=10
    }

    if( cVal > 100) {
        cVal = 5;
    }

    if( bVal > 100) {
        bVal = 15;
    }

    if( aVal > 100) {
        aVal = 25;
    }
};
