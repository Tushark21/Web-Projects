//Snake Game

function init(){
    canvas=document.getElementById("mycanvas");
    pen=canvas.getContext('2d');
    W=canvas.width;
    H=canvas.height;
    score=0;
    game_over=false;
    food=getRandomFood();
    /*
    box={
        x:10,
        y:20,
        w:20,
        h:20,
        speed:5,
    }
    */

    snake={
        init_length:5,
        color:"aqua",
        cells:[],
        directions:"right",
        dx:1,
        dy:0,

        createSnake:function(){
            for(var i=this.init_length-1;i>=0;i--){
                this.cells.push({x:i,y:0});
            }
        },
        drawSnake:function(){
            for(var i=0;i<this.cells.length;i++){
                pen.fillStyle=this.color;
                pen.strokeStyle="black";
                pen.lineWidth=5;
                //pen.strokeRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
                if(i==0){
                    pen.fillStyle="pink";
                }
                pen.fillRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
                //console.log(this.cells[i]);
            }
        },
        updateSnake:function(){

            for(var i=1;i<this.cells.length;i++){
                //console.log(this.cells[i]);
                if(this.cells[0].x==this.cells[i].x && this.cells[0].y==this.cells[i].y){
                    //console.log("true");
                    gameOver();
                }
            }

            var headX=this.cells[0].x;
            var headY=this.cells[0].y;
            //console.log(headX+","+headY);

            //nextHeadX=headX+1;
            nextX=headX+this.dx;
            nextY=headY+this.dy;


            lastX=Math.round(W/10);
            lastY=Math.round(H/10);

            if(this.cells[0].y<0){
                nextY=lastY;
            }if(this.cells[0].x<0){
                nextX=lastX;
            }
            if(this.cells[0].x>lastX){
                nextX=0;
            }
            if(this.cells[0].y>lastY){
                nextY=0;
            }

            this.cells.unshift({x:nextX,y:nextY});

            if(headX==food.x && headY==food.y){
                food=getRandomFood();
                score+=10;
            }
            else{
                this.cells.pop();
            }
        }

    };

    snake.createSnake();

    function keyPressed(e){

        if(e.key=="ArrowRight"){
            if(snake.dx!=-1){
                snake.dx=1;
                snake.dy=0;
            }
        }
        else if(e.key=="ArrowLeft"){
            if(snake.dx!=1){
                snake.dx=-1;
                snake.dy=0;
            }
        }
        else if(e.key=="ArrowDown"){
            if(snake.dy!=-1){
                snake.dx=0;
                snake.dy=1;
            }
        }
        else if(e.key=="ArrowUp"){
            if(snake.dy!=1){
                snake.dx=0;
                snake.dy=-1;
            }
        }

    }
    document.addEventListener('keydown',keyPressed);
}

function draw(){
    pen.clearRect(0,0,W,H);
    //pen.fillStyle="red";
    //pen.fillRect(box.x,box.y,box.w,box.h);
    
    snake.drawSnake();

    pen.fillStyle="white";
    pen.font="10px Comic Sans MS";
    pen.fillText("Score: "+score,10,10);

    //draw food
    pen.fillStyle=food.color;
    pen.fillRect(food.x*10,food.y*10,10,10);
}

function update(){
    /*
    box.x+=box.speed;
    if(box.x>=W){
        box.speed*=-1;
    }
    */
    snake.updateSnake();
}

function gameLoop(){
    if(game_over){
        clearInterval(gL);
    }
    else{
        draw();
        update();
    }
}

function getRandomFood(){
    var foodX=Math.round(Math.random()*(W-10)/10);
    var foodY=Math.round(Math.random()*(H-10)/10);

    foodColor=["red","green","yellow","coral","orchid"];
    var i=Math.abs(Math.round(Math.random()*foodColor.length-1));
    //console.log("color index "+i);
    
    var food={
        x:foodX,
        y:foodY,
        color:foodColor[i],
    };

    return food;
}

function gameOver(){
    alert("Game Over");
    game_over=true;
}

init();

//call gameLoop after 100ms again and again
var gL=setInterval(gameLoop,100);