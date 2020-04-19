var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.isAnimal = function (a) {
        return a instanceof Animal;
    };
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    Animal.categoies = ['mammal', 'bird'];
    return Animal;
}());
console.log(Animal.categoies);
var snake = new Animal('lily');
console.log(Animal.isAnimal(snake));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        return this.name + " is barking";
    };
    return Dog;
}(Animal));
var xiaobao = new Dog('xiaobao');
// console.log(xiaobao.run())
// console.log(xiaobao.bark())
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.runn = function () {
        return 'Meow, ' + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
var maomao = new Cat('maomao');
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.switchRadio = function () {
    };
    return Car;
}());
var CellPhone = /** @class */ (function () {
    function CellPhone() {
    }
    CellPhone.prototype.switchRadio = function () {
    };
    CellPhone.prototype.checkBatteryStatus = function () {
    };
    return CellPhone;
}());
var AppleCellPhone = /** @class */ (function () {
    function AppleCellPhone() {
    }
    AppleCellPhone.prototype.switchRadio = function () {
    };
    AppleCellPhone.prototype.checkBatteryStatus = function () {
    };
    return AppleCellPhone;
}());
