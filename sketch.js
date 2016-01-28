console.log("hello reading from js");

var b = 38;


function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch'); //Link to id mySketch from header tag
}

function draw() {
    background(b);
    var i = 0;

    // While i is less than the width of the window
    while (i < width) {
        noStroke();
        // The distance between the current rectangle and the mouse is equal to the absolute value of the difference between i and mouseX.
        var distance = (mouseX - i);
        // That distance is used to fill the color of a rectangle at horizontal location i.
        fill(distance);
        rect(i, 0, 4, height);
        i += 30;
    }

    if (mouseX > 0 && mouseX < 800 && mouseY > 0 && mouseY < 270) {
        b = b + 4;

    } else {
        b = 38;
    }
    if (b > 230) {
        b = 230;
    }

}