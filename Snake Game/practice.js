//JS Basics
/*
var a="HEllo";
var b=5.5;
var=c=10;
d=b+c;

//Output
//Append on the document(whole web page)
document.write("Hello!");   //output on document

//used for debugging
console.log("World");

//Alert Box
//alert("Game Over");

//Prompt Box
//name=prompt("Enter your Name"); //return type is string

//Functions - 2 ways

fun()       //no error
function fun(){
    console.log("Have Fun");
}

fun();

funtoo();   //error
//Another way to write function (these type of functions are not hoisted)
var funtoo=function() {
    apple=10;       //Global Variable
    console.log("Too much Fun");
}

funtoo();
console.log(apple);


//Arrays and Loops
a=['Apple',"Mango",10,20.7];

console.log(a);

for(var i=0;i<a.length;i++){
    console.log(i+":"+a[i]);
}


//for Each Loop
a.forEach(function(fruit,i){
    console.log(i+"-"+fruit);
});

a.forEach(function(fruit){
    console.log(fruit);
});

//Operations on array
//push add at end of the array
a.push("Grapes");
console.log(a);

//remove from the end
a.pop();
console.log(a);

//remove from the fornt
a.shift();
console.log(a);

//add to the front
a.unshift("Papaya");
console.log(a);

//Linear Search
console.log(a.indexOf("Grapes"));
*/

/*
//Event Listener
myDiv=document.getElementById("mydiv");
console.log(myDiv);

function mousePressed(info){
    console.log("Mouse Pressed");
    console.log(info);
}

myDiv.addEventListener('mousedown',mousePressed);
//Events:mouseup,keypressed,keydown,keyup

//JSON JS Object Notation

var bird={
    x:10,
    y:30,
    color:"blue";
    eggs:[1,2,3];

    fly:function(){
        console.log("flying");
        console.log(this);
        console.log(this.x);
    }
};
*/

 
