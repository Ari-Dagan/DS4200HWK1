// Changing the header 1
const myHeading = document.querySelector("h1");
myHeading.textContent = "New Dog Title, he ate the other one";
const myImage = document.querySelector("img");

let dogFood;
let nuggetAmt = 0
let myButton = document.querySelector("button");
let myHeading2 = document.querySelector("h2");
/*
This variable represent what I will feed my dog
*/
dogFood = "Chicken";


function feedDog(food) {
    nuggetAmt = nuggetAmt + food;
    return nuggetAmt;
  }

function setFoodAmt() {
const myName = prompt("Please enter what your feeding him");
localStorage.setItem("Food", dogFood);
myHeading2.textContent = `Big heading -  Da DAWG ATE THIS MUCH , ${dogFood}: ${nuggetAmt}`;
}

if (!localStorage.getItem("name")) {
    feedDog(2);
    setFoodAmt();
  } else {
    if (!myName) {
        setFoodAmt();
      }
      else{
    const storedName = localStorage.getItem("name");
    myHeading2.textContent = `Big heading -  Da DAWG ATE THIS MUCH , ${dogFood}: ${nuggetAmt}`;
      }
  }

feedDog(1);

document.querySelector("html").addEventListener("click", function () {
    alert("You fed my dog!");
    feedDog(1);
    if (nuggetAmt < 5) {
        alert("Still Hungry");
    } 
    else {
        alert("My Dog is Chillin now");
        myHeading.textContent = "Full Boy";
        myImage.setAttribute("src", "images/fullBoy.jpg");
    }
  });



  myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/dogHungry.jpg") {
      myImage.setAttribute("src", "images/fullBoy.jpg");
    } else {
      myImage.setAttribute("src", "images/dogHungry.jpg");
    }
  };

  myButton.onclick = () => {
    setFoodAmt();
  };