class Rectangle {
    constructor(len, wid) {
        this.len = len;
        this.wid = wid;
    }

    area() {
        return this.len * this.wid;
    }

    print() {
        console.log("Area: " + this.area());
    }
}

class Square extends Rectangle {
    constructor(len) {
        super(len,len);
    }
}

let r1 = new Rectangle(5,3);
r1.print();

let s1 = new Square(5);
s1.print();