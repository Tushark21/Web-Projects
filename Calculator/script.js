var a=0.0,b=0.0,result=0.0,op=1;
var inputField=document.querySelector("input");

setInterval(function(){
    r=Math.floor(Math.random()*89+10);
    g=Math.floor(Math.random()*89+10);
    b=Math.floor(Math.random()*89+10);
    document.querySelector("p").style.backgroundColor="#"+r+g+"99";
    console.log("#"+r+g+b);
},1500)

var btns=[];
var next=false;
for(var i=0;i<10;i++){
    btns.push(document.getElementById(""+i));
    //console.log(document.getElementById(""+i));
    btns[i].addEventListener("click",function(){
        if(next){
            inputField.value=this.textContent;
            next=false;
        }
        else{
            inputField.value+=this.textContent;
        }
        //console.log(inputField);
    });
}

btns.push(document.getElementById("dot"));
btns[10].addEventListener("click",function(){
    if(next){
        inputField.value=this.textContent;
        next=false;
    }
    else{
        inputField.value+=this.textContent;
    }
    //console.log(inputField);
});

btns.push(document.getElementById("+"));
btns.push(document.getElementById("-"));
btns.push(document.getElementById("x"));
btns.push(document.getElementById("/"));
btns.push(document.getElementById("="));

for(var i=11;i<15;i++){
    btns.push(document.getElementById(""+i));
    //console.log(document.getElementById(""+i));
    btns[i].addEventListener("click",function(){
        next=true;
        a=parseFloat(inputField.value);
        if(a==NaN){
            inputField.value="Error";
        }
        inputField.value=this.textContent;
        op=btns.indexOf(this)-10;
        console.log(op);
        //console.log(inputField);
    });
}

//console.log(btns[15]);

btns[15].addEventListener("click",function(){
    b=parseFloat(inputField.value);
    if(b==NaN){
        inputField.value="Error";
        next=true;
    }
    switch(op){
        case 1:
            result=a+b;
        break;
        
        case 2:
            result=a-b;
        break;
        
        case 3:
            result=a*b;
        break;
        
        case 4:
            result=a/b;
        break;
        default:
            console.log("Error");
    }
    inputField.value=result;
    next=true;
    //console.log(inputField);
});
