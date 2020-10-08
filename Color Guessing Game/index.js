var noOfColors=6;
var colors=generateRandomColor(noOfColors);

var pickedColor=pickRandomColor();

var colorDisplay= document.querySelector("#color_code");
colorDisplay.textContent=pickedColor;

var sqs=document.querySelectorAll(".square");

var h1=document.querySelector("h1");
var messageDisplay=document.getElementById("message");

var resetButton=document.getElementById("reset_button");

var hardButton=document.querySelector("#hard_button");
var easyButton=document.querySelector("#easy_button");

hardButton.addEventListener("click",function(){
    noOfColors=6;
    reset();
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
});

easyButton.addEventListener("click",function(){
    noOfColors=3;
    reset();
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");

    for(var i=3;i<6;i++){
        sqs[i].style.backgroundColor="#232323";
    }
});

resetButton.addEventListener("click",reset);


for(var i=0;i<noOfColors;i++){
    sqs[i].style.backgroundColor=colors[i];

    sqs[i].addEventListener("click", function(){
            if(this.style.backgroundColor===pickedColor){
                messageDisplay.textContent="CORRECT";
                resetButton.textContent="New Game";
                changeColor();
            }
            else{
                messageDisplay.textContent="WRONG";
                this.style.backgroundColor="#232323";
            }
        }
    );
}

function changeColor(){
    h1.style.backgroundColor=pickedColor;
    for(var i=0;i<noOfColors;i++){
        sqs[i].style.backgroundColor=pickedColor;
    }
}

function pickRandomColor(){
    var randColor=Math.floor(Math.random()*colors.length);
    return colors[randColor];
}

function generateRandomColor(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);

    return ("rgb("+r+", "+g+", "+b+")");
}

function reset(){
    h1.style.backgroundColor="steelblue";
    colors=generateRandomColor(noOfColors);
    pickedColor=pickRandomColor();
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
    
    for (var i = 0; i < noOfColors; i++) {
        sqs[i].style.backgroundColor=colors[i];
    }
}
