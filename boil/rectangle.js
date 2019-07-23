import Element from './element.js';

export default class Rectangle extends Element {
    
    constructor() {
        super();

        this.elem.style.width = "50px";
        this.elem.style.height = "50px";
        this.elem.style.backgroundColor = "#aaa";
    }
}