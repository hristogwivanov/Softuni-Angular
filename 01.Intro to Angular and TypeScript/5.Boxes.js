var Box = /** @class */ (function () {
    function Box() {
        this.elements = [];
        this.count = 0;
    }
    Box.prototype.add = function (element) {
        this.elements.push(element);
        this.count++;
    };
    ;
    Box.prototype.remove = function () {
        this.elements.shift();
        this.count--;
    };
    Box.prototype.getCount = function () {
        return this.count;
    };
    return Box;
}());
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
var box2 = new Box();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
box2.remove();
console.log(box2.count);
