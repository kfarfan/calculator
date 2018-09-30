export class Number {
    constructor(number) {
        this.number = number;
        this.group = [];
        this.text = '';
        this.returned = undefined;
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
        this.group = [this.returned+''];
        this.text = '';
    }
    calculated () {
        this.returned = eval(this.text);
    }
} 