"use strict";
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
exports.__esModule = true;
var message = "welcome back";
console.log(message);
//variable Declartion
var isBiggner = true;
var num = 0;
var name = "vishwas";
name = "kiran";
// name=true Error booleans is not assingnable to type string
// String literals
var sentence = "My anme is " + name + " and i m just a nioob in js";
console.log(sentence);
//Null and udnefined type in js
var n = null;
var u = undefined;
var isNew = null;
var myname = undefined;
//Array t7ype
var list1 = [1, 2, 3];
var list2 = [1, 2, 34];
console.log(list1);
//tuple Type
var person1 = ['chr9os', 'jordan', 9];
console.log('the perosn 1', person1);
//enum type
// By default  it start with zer0
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Orange"] = 2] = "Orange";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// enum Color1{Red=5,Green,Orange};
// let c1:Color=Color1.Green;
// console.log(c1);  
// Type=Any
//we acan used for bascially handling any dynmic data
var myVars = 10;
// console.log(myVars.name)
// myVars();
// console.log(myVars.findof())
// ..unknow
//It is same of unknow nt the basix didderence is that u cant acess any propery like touppacarse, or nor u can call it as of like method or u can call its is like a function
var myvars = 10;
//Type assertion so that we xan convience we know bettwer it is similary typecasting to other langauges
// (myVars as string).toLowerCase();  
//Type imnfermce does not workm on initialization
var a;
a = 10;
a = true;
// let b=20;
// b=false;
// Union of Type for SafeArray,e vaibale
var multipleType;
multipleType = 230;
multipleType = true;
// multipleType="abc" It will throw aan eerror 
//Functions
function add(num1, num2) {
    return num1 + num2;
}
add(4, 5);
//function with optional paratmer
//the optioanl p[aeramter shoudl be placed at the last 
function adds(num2, num1) {
    if (num1) {
        return num1 + num2;
    }
    else {
        return num2;
    }
}
var vals = adds(11, 12);
console.log(vals);
// /default VREyeParameters
function addson(num1, nums2) {
    if (nums2 === void 0) { nums2 = 10; }
    if (nums2) {
        return num1 + nums2;
    }
    else {
        return num1;
    }
}
var vals1 = addson(10, 70);
console.log(vals1);
//the question mark defines the optional  badically used for input fileds as not all fields are compulsary
function fullName(person) {
    console.log("the " + person.firstname + " and the smaller name is " + person.lastname);
}
var p = {
    firstname: 'ram'
};
fullName(p);
//clasess
var Emp = /** @class */ (function () {
    function Emp(name) {
        this.emp = name;
    }
    Emp.prototype.greet = function () {
        console.log("hey good morning " + this.emp);
    };
    return Emp;
}());
var e1 = new Emp('vishwas');
console.log(e1.emp);
e1.greet();
//ingheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(mname) {
        return _super.call(this, mname) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("manageer dkeeteing work");
    };
    return Manager;
}(Emp));
var m2 = new Manager('vishwas gupta');
m2.delegateWork();
m2.greet();
