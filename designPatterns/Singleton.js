"use strict";
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.getNum = function () {
        return 1;
    };
    return Singleton;
}());
// let e = new Singleton(); // Error: constructor of 'Singleton' is private.
var v = Singleton.getInstance();
// console.log(v.ge tNum());
