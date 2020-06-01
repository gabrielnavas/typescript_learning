class Singleton {
    private static instance: Singleton;

    private constructor() { }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public getNum(): number {
        return 1;
    }
}

// let e = new Singleton(); // Error: constructor of 'Singleton' is private.
let v = Singleton.getInstance();
console.log(v.ge tNum());