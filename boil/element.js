import { px, val } from './common.js';

export default class Element {
    
    constructor(elem) {
        this.elem = document.createElement(elem || "div");

        this.elem.style.position = "absolute";
    }

    get left() {
        return val(this.elem.style.left);
    }

    set left(value) {
        this.elem.style.left = px(value);
    }

    get top() {
        return val(this.elem.style.top);
    }

    set top(value) {
        this.elem.style.top = px(value);
    }

    get color() {
        return this.elem.style.backgroundColor;
    }

    set color(value) {
        this.elem.style.backgroundColor = value;
    }

    get visible() {
        return this.elem.style.display == 'block';
    }

    set visible(value) {
        this.elem.style.display = (value ? 'block' : 'none');
    }
}