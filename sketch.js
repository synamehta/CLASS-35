var database,pos;
var ball;

function setup(){
    createCanvas(500,500);
    database=firebase.database()

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    var ballPosition=database.ref('ball/position');
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
pos=data.val();
ball.x=pos.x;
ball.y=pos.y;
}

function changePosition(a,b){
    database.ref('ball/position').set({
    x:pos.x+a,
    y:pos.y+b
    });
}

function showError(){
    console.log("dataBase error")
}
