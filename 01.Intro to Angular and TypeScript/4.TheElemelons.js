var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.melonSort = melonSort;
        this.elementIndex = weight * melonSort.length;
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Watermelon.prototype.toString = function () {
        return "Element: Water \n Sort: ".concat(this.melonSort, " \nElement Index: ").concat(this.elementIndex, " ");
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Firemelon.prototype.toString = function () {
        return "Element: Fire \n Sort: ".concat(this.melonSort, " \nElement Index: ").concat(this.elementIndex, " ");
    };
    return Firemelon;
}(Melon));
var Earthrmelon = /** @class */ (function (_super) {
    __extends(Earthrmelon, _super);
    function Earthrmelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Earthrmelon.prototype.toString = function () {
        return "Element: Earth \n Sort: ".concat(this.melonSort, " \nElement Index: ").concat(this.elementIndex, " ");
    };
    return Earthrmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Airmelon.prototype.toString = function () {
        return "Element: Air \n Sort: ".concat(this.melonSort, " \nElement Index: ").concat(this.elementIndex, " ");
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elements = ['Water', 'Fire', 'Earth', 'Air'];
        _this.currentElementIndex = 0;
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        this.currentElementIndex = (this.currentElementIndex + 1) % this.elements.length;
    };
    Melolemonmelon.prototype.toString = function () {
        var element = this.elements[this.currentElementIndex];
        return "Element: ".concat(this.elements[this.currentElementIndex], " \n Sort: ").concat(this.melonSort, " \nElement Index: ").concat(this.elementIndex, " ");
    };
    return Melolemonmelon;
}(Watermelon));
var watermelon = new Watermelon(15, 'abcstring');
console.log(watermelon.toString());
var firermelon = new Firemelon(65, 'teststring');
console.log(firermelon.toString());
var specialmelon = new Melolemonmelon(22, 'alabala');
console.log(specialmelon.toString());
specialmelon.morph();
console.log(specialmelon.toString());
specialmelon.morph();
console.log(specialmelon.toString());
// let test : Melon = new Melon(100, "Test");
//Throws error
var watermelon2 = new Watermelon(12.5, "Kingsize");
console.log(watermelon2.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100
