var fish;
var myenemies = [];
var myScore;

function startGame() {
    fish = new component(60, 20, "media/goldie.png", 10, 120, "image");
    myScore = new component("30px", "Consolas", "white", 280, 40, "text");
    myGameArea.start();
}


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}


function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }
        else if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        }  
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y + 15;
        var mybottom = this.y + (this.height) - 19;
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myenemies.length; i += 1) {
        if (fish.crashWith(myenemies[i])) {
            myGameArea.stop();
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 500;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        otherHeight = Math.floor(Math.random()*(maxHeight-minHeight+10));
        randomHeight = Math.floor(Math.random()*(maxHeight+minHeight-5));
        minGap = 100;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+5)+minGap);
        
        
        myenemies.push(new component(60, 80, "media/shark.png", x, height, "image"));
        myenemies.push(new component(60, 80, "media/eel.gif", gap, randomHeight, "image"));
        myenemies.push(new component(40, 60, "media/jellyfish.png", x, otherHeight, "image"));
        
        
        
    }
    for (i = 0; i < myenemies.length; i += 1) {
        myenemies[i].speedX = -1;
        myenemies[i].newPos();
        myenemies[i].update();
    }
    myScore.text="SCORE: " + myGameArea.frameNo;
    myScore.update();
    fish.newPos();    
    fish.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveup() {
    fish.speedY = -1; 
}

function movedown() {
    fish.speedY = 1; 
}

function moveleft() {
    fish.speedX = -1; 
}

function moveright() {
    fish.speedX = 1; 
}

function clearmove() {
    fish.speedX = 0; 
    fish.speedY = 0; 
}