//previus code
// var colors = ["rgb(255, 0, 0)",
//               "rgb(255, 255, 0)",
//               "rgb(0, 255, 0)",
//               "rgb(0, 255, 255)",
//               "rgb(0, 0, 255)",
//               "rgb(255, 0, 255)",
// ]

var numSquares = 6;

var colors = generateRandomColors(numSquares);
//takes a single argument to decisdes how many colors will generate in the array
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display ="none";
        }
    }

});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display ="block";
    }
});

resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from the array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change the colors of the squares
    this.textContent = "New Colors"
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "steelblue";
});
for(var i = 0; i < squares.length; i++){
//add initial colors to square
    squares[i].style.backgroundColor = colors[i];
//add click listeners to squares
    squares[i].addEventListener("click", function(){
//grab color of clicked square
var clickedColor = this.style.backgroundColor;
//compare color to pickedColor
console.log(clickedColor, pickedColor);
if(clickedColor === pickedColor) {

messageDisplay.textContent = "Correct!";
resetButton.textContent = "Play Again?"
changeColors(clickedColor);
h1.style.background = clickedColor;
}else{
this.style.backgroundColor ="#232323";
messageDisplay.textContent="Try Again!";
}

    });
}

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++) {
    //change each color to match the right color
    squares[i].style.backgroundColor = color;
    }
}

//i will loop through each square

function pickColor() {
    //use Math.random to pick a number between 0 and 1
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
    //returns colors of that number

}

function generateRandomColors(num) {
    //make array
    var arr = []
    //add num random colors to array
    //repeat num times
    for(var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor())
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}