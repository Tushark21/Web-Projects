/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,isPlaying;

function init(){
    isPlaying=true;
    activePlayer=0;
    scores=[0,0];
    roundScore=0;

    document.querySelector('.dice').style.display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-1').textContent='0';
}

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(!isPlaying){
        return;
    }

    var dice,i=0;

    var diceDom = document.querySelector('.dice');
    diceDom.style.display='block';
    
    var anim=setInterval(function(){
        dice = Math.floor(Math.random()*6)+1;
        diceDom.src='dice-'+dice+'.png';
        i++;
        if(i>5){
            clearInterval(anim);
            update();
        }
        //console.log(dice);
    },100);

    function update(){
        if(dice!==1){
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }

        else{
            updateGame();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click',function(){
    
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
    //document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    document.querySelector('#name-'+activePlayer).textContent='player '+(activePlayer+1);

    
    
    document.querySelector('.player-0-panel').classList.add('active');

    init();

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(!isPlaying){
        return;
    }

    scores[activePlayer]+=roundScore;
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer]>=100){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        isPlaying=false;
    }
    else{
        updateGame();
    }

});

function updateGame(){
    //document.getElementById('btn-roll').disable=false;
    
    roundScore=0;
    document.querySelector('#current-'+activePlayer).textContent=roundScore;
    activePlayer===0?activePlayer=1:activePlayer=0;
    
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.dice').style.display='none';
}