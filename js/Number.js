export class Number {
    constructor(number) {
        this.number = number;
        this.group = [];
        this.text = '';
        this.returned = 0;
    }
    add (number) {
        this.group.push(number);
    }
    num () {
        Number(this.group);
    }
    toString () {
        this.text = this.group.join('');
    }
    cleared () {
        this.number;
        this.group = [];
        this.text = '';
    }
    calculated () {
        this.returned = eval(this.text);
    }
} 