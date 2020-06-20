"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    getNum() {
        return 1;
    }
}
// let e = new Singleton(); // Error: constructor of 'Singleton' is private.
let v = Singleton.getInstance();
// console.log(v.ge tNum());
//# sourceMappingURL=Singleton.js.map