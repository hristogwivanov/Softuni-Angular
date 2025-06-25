//HTTP Basics
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
//HTTP Server - Client
//Hyper Text Transfer Protocol(HTTP)
// -Client-server protocol for transferring Web resources
//Important properties of HTTP
// -Request-response model
// -Text-based format
// -Relise on a unique resource URLs
// -Provides resource metadata (e.g., encoding
// -Stateless (cookies can overcome this)\
//HTTP: Request-Response Protocol
// -Client program
//  -Running on the end host.
//  -E.g. Web browser
//  -Request a resource
// -Server program
//  -Running at the server
//  -E.g. Web server
//  -Provides resources 
//Example
//GET /index.html
//HTTP/1.0
//HTTP/1.0 200 OK
//"Welcome to our Web Site!"
//Example: Hyper Text Transfer Protocol
//HTTP request
//GET /courses/about.aspx HTTP/1.1
//Host: www.softuni.com
//User-Agent: Mozilla/5.0
//<CRLF>
//HTTP response
//HTTP/1.1 200 OK
//Date: Mon, 5 Jul 2010 13:09:03 GMT
//Server: Microsoft-HTTPAPI/2.0
//Last-Modified; Mon, 12 Jul 2010 15:33:23 GMT
//Content-Length: 54
//<CRLF> 
//<html><title>Hello</title>Welcome to our site</html>
//Routing Overview
//Navigation for Single Page Apps
//What is Routing? 
// -Allows navigation, without reloading the page
// -Pivotal element of writing Single Page Applications
//Single Page Applications
// -A Router loads the appropriate content when the location changes
//  -E.g. when the user manually enters an address
// -Converseley, a change in content is reflected 
//  -E.g. when the user clicks on a link
// -Benefits
//  -Load all scripts only once
//  -Maintain state across multiple pages
//  -Browser history can be used
//  -Build User Interfaces that react quickly
//Angular Overview
//Web Application Platform
//What is Angular
// -Angular is a platform for building complex front-end apps
// -Focused on end-to-end tooling and best practices
// -Developed by the Angular team at Google
//Introduction to TypeScript
// -Install gobally via npm
//  npm install -g typescript
// -TypeScript uses the .ts file extension (supported by VS Code)
//  tsc myfile.ts
// -To compile your code
// -Compilation(transpilation) output is plain JavaScript
//Variable Types
var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = 'red';
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, ".concat(this.greeting);
    };
    return Greeter;
}());
var greeter = new Greeter("world!");
console.log(greeter.greet());
//Inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved ".concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//Generics and Enumerations
function identity(arg) {
    return arg;
}
var output = identity("myString");
// type of output will be 'string'
console.log(typeof output);
var output2 = identity(5); // type inference
//type of output will be 'number
console.log(typeof output2);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
function print2(labelledObj) {
    console.log("".concat(labelledObj.label));
}
var myObj2 = { name: "Pesho", label: "The real Pesho" };
print2(myObj2);
