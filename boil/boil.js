import Rectangle from './rectangle.js';
import Button from './button.js';
import Eclipse from './eclipse.js';
import Timer from './timer.js';

console.log('======= BOIL ========');

class Game {

    set color(value) {
        document.body.style.backgroundColor = value;
    }

    set name(value) {
        document.title = value;
    }

    addRectangle = () => {
        let rectangle = new Rectangle();
        document.body.append(rectangle.elem);
        return rectangle;
    }
    
    addButton = () => {
        let button = new Button();
        document.body.append(button.elem);
        return button;
    }
    
    addCircle = () => {
        let circle = new Eclipse();
        document.body.append(circle.elem);
        return circle;
    }
    
    addTimer = () => {
        return new Timer();
    }
}

let game = new Game();

export default game;