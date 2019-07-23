import Rectangle from './rectangle.js';
import Button from './button.js';
import Eclipse from './eclipse.js';

console.log('======= BOIL ========');

const addRectangle = () => {
    let rectangle = new Rectangle();
    document.body.append(rectangle.elem);
    return rectangle;
}

const addButton = () => {
    let button = new Button();
    document.body.append(button.elem);
    return button;
}

const addCircle = () => {
    let circle = new Eclipse();
    document.body.append(circle.elem);
    return circle;
}

export {
    addRectangle,
    addCircle,
    addButton
}