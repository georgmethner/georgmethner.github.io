//credit to: https://codepen.io/fractalkitty/pen/xxJxQdB


//I just coded until it looked like I wanted - no comments, horrible variable names and lots of back and forth to make a tangled mess
var duneA = [];
var cnt = 0;
var nD;
var test = 0;
function setup() {
    duneA = [];
    r1 = random(120, 250);
    g1 = random(100, 140);
    b1 = random(50, 150);
    var canv = createCanvas(window.innerWidth, window.innerHeight);
    canv.parent("dunes");
    //noLoop();
    noFill();
    strokeWeight(4);
    angleMode(DEGREES);
    var r2 = random(30);
    var g2 = random(40);
    var b2 = random(40, 50);
    color1 = color(r2, g2, b2);
    nD = int(random(5, 6));
    for (let i = 0; i <= nD; i++) {
        duneA[i] = [];
        dune(i, true);
    }

    var cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.background = "rgba("+ r1*0.1 +"," + g1*0.1 +"," + b1*0.1 +",1)";
        cards[i].style.filter = "drop-shadow(0 0 0.5rem rgb("+ r2*0.3 +"," + g2*0.3 +"," + b2*0.3+"))";
    }
    cards = document.getElementsByClassName("boxtext");
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.color = "rgba("+ r1 +"," + g1 +"," + b1 +",1)";
    }
    cards = document.getElementsByClassName("text1");
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.color = "rgba("+ r1 +"," + g1 +"," + b1 +",1)";
    }



    drawOnce();
}
function drawOnce() {
    t = frameCount * 10;
    translate(width / 2, height / 2);
    push();
    background(color1);

    pop();
    for (let i = 0; i < nD; i++) {
        duneDraw(i);
    }
}

function duneDraw(n) {
    for (let j = 0; j < int(height * 1.2); j += 4.5) {
        stroke(r1 - j, g1 - j, b1 - j);
        beginShape();
        for (let i = 0; i < duneA[n].length; i++) {
            vertex(duneA[n][i].x, duneA[n][i].y + j / 1.5+(height/4.8));
        }
        endShape();
    }
}

function dune(n) {
    a = random(5, 20);
    b = random(4, 10);
    c = random(20, 360);
    cnt = 0;
    for (let i = round(-width / 2); i < round(width / 2 + 1); i += 4) {
        oldy = random(1);
        if (n % 2 === 0) {
            y =
                -oldy -
                a * b * sin(i / (a + b) + c) * cos(-i / b) +
                b * cos(i / b + c) * sin(i / c) +
                n * 10;
        } else {
            y =
                oldy +
                a * b * sin(i / (a + b) + c) * cos(-i / b) -
                b * cos(i / b + c) * sin(i / c) +
                n * 10;
        }
        duneA[n][cnt] = createVector(i, y);
        cnt++;
    }
}


