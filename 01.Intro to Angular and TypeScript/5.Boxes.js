var Box = /** @class */ (function () {
    function Box() {
        this.elements = [];
    }
    Box.prototype.add = function (element) {
        this.elements.push(element);
    };
    ;
    Box.prototype.remove = function () {
        return this.elements.pop();
    };
    Box.prototype.getCount = function () {
        return this.elements.length;
    };
    return Box;
}());
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box);
console.log(box.getCount());
var box2 = new Box();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.getCount());
console.log(box2);
box2.remove();
console.log(box2);
console.log(box2.getCount());
