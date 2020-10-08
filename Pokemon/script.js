"use strict";

setInterval(displayTime,1000);

function displayTime(){
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

var fr=new FileReader("Generation.txt");
fr.onload=function(){
    console.log(fr.result);
}

//fr.readAsText(this.files[0]);


var btn = document.createElement("BUTTON");   // Create a <button> element
btn.innerHTML = "#000";     
btn.classList.add("pokemon_button");
document.getElementById("left_panel").appendChild(btn); 

function renderButtons(){

}

var pokemonHeader=document.getElementById("pokemon_header");
var generationHeader=document.getElementById("generation_header");
var pokemonButtons=document.querySelectorAll('.pokemon_button');
var panelButtons=document.querySelectorAll('.panel_button');
//console.log(panelButtons);

for(var i=0;i<panelButtons.length;i++){
    panelButtons[i].addEventListener('click',function(){
        generationHeader.textContent=this.textContent;
        for(var i=0;i<panelButtons.length;i++){
            panelButtons[i].classList.remove("selected");
        }
        this.classList.add("selected");
    });
}

//console.log(pokemonButtons);

for(var i=0;i<pokemonButtons.length;i++){
    pokemonButtons[i].addEventListener('click',function(){
        pokemonHeader.textContent=getName(this.textContent);
        var pokemonNum=getNum(this.textContent);
        document.getElementById("pokemon_image").setAttribute("src","https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+pokemonNum+".png");
        //document.getElementById("poke_info").textContent=getName(this.textContent);
        for(var i=0;i<pokemonButtons.length;i++){
            pokemonButtons[i].classList.remove("selected");
        }
        this.classList.add("selected");
    });
}

function getName(text){

    var newText="";
    for (var i=0;i<text.length;i++) {
        if((text[i]>='a' && text[i]<='z') || (text[i]>='A' && text[i]<='Z')){
            newText+=text[i];
        }
    }
    return newText;
}

function getNum(text){

    var newText="";
    for (var i=1;i<4;i++) {
        newText+=text[i];
    }
    return newText;
}
