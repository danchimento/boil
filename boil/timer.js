export default class Timer {
    delay;
    tick;
    repeat;
    _timeout;
    _interval;

    constructor() {
        this.delay = 1000;
        this.repeat = false;
    }

    start() {
        if (this.repeat) {
            this._interval = setInterval(this.tick, this.delay);
        } else {
            this._timeout = setTimeout(this.tick, this.delay);
        }
    }

    stop() {
        clearTimeout(this._timeout);
        clearInterval(this._interval);
    }
}