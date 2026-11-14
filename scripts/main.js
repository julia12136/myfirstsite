// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Hello world!";



const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/images (3).jpeg") {
    myImage.setAttribute("src", "images/images (4).jpeg");
  } else {
    myImage.setAttribute("src", "images/images (3).jpeg");
  }
});

let myButton = document.querySelector("button");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
    //if my myName has no value, run setUserName()
    //again from the start
  }
    else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hey yall, ${myName}`;
    }
    //if it does have a value, aka the statement above
    //false, then store the value in localStorage
    //and set it as the heading's text
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hey yall, ${storedName}`;
}
myButton.addEventListener("click", () => {
    setUserName();
});
