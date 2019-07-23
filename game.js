import game from './boil/boil.js';

game.color = "#ddd";
game.name = 'Boxes';

var rectangle1 = game.addRectangle();
rectangle1.left = 400;
rectangle1.top = 200;
rectangle1.color = "blue";  

var circle = game.addCircle();
circle.left = 100;
circle.top = 100;

function button1Click() {
    rectangle1.left += 15;
    rectangle1.visible = true;
    timer.stop();
}

var button1 = game.addButton();
button1.left = 100;
button1.text = "Right"
button1.click = button1Click;

function button2Click() {
    rectangle1.left -= 15;
    rectangle1.visible = false;
}

var button2 = game.addButton();
button2.text = "Left"
button2.click = button2Click;

function timerTick() {
    rectangle1.left -= 10;

    if (rectangle1.left < 0) {
        timer.stop();
    }
}

var timer = game.addTimer();
timer.delay = 32;
timer.tick = timerTick;
timer.repeat = true;
timer.start();


