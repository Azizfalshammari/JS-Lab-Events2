// When the user chooses one of the channel buttons, change the src attribute of the img inside the .tv-show div
// You should write a single function to change the channel that accepts a single input, the channel number, and uses a conditional statement to change the TV to the image specific to that channel.
// When you set up your event listeners for the buttons, the callback function should call upon that change channel function
// Use a conditional statement to evaluate which channel they've chosen, so you can set a specific image for each channel
// Feel free to look up and use any images of your choice and include them in your conditional statement! Be sure to use an absolute path to the image file.

console.log("linked!");

let btn1 = document.getElementById("one");
let btn2 = document.getElementById("two");
let btn3 = document.getElementById("three");
let btn4 = document.getElementById("four");
let btn5 = document.getElementById("five");
let btn6 = document.getElementById("six");
let btn7 = document.getElementById("seven");
let btn8 = document.getElementById("eight");
let btn9 = document.getElementById("nine");
let pics = [
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg",
];

var screenContent = document.getElementById("test");
const buttons = document.querySelectorAll(".channel");
console.log(buttons);
// loop through each button and add a click event listener

function changeChannel(button) {
    let channel = button.srcElement.innerText;
    console.dir(channel)
    screenContent.src = pics[channel - 1]
}
buttons.forEach((button) => {
  button.addEventListener("click", changeChannel);
});
