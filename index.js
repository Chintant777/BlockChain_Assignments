class Shape {
    // if nothing in formula than pass 1
    static PI = 3.14;
    constructor(radius =1, height = 1, shape) {
        this.radius = radius;
        this.height = height;
        this.shape = shape;
    }

    getVolume(){
        let res= 0;
        switch(this.shape){
            case 'Cylinder': 
                res = (Shape.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
                break;
            case 'Sphere':
                res = ((4 * Shape.PI * Math.pow(this.radius, 3))/3).toFixed(4);
                break;
            case 'Cone':
                res = ((Shape.PI * Math.pow(this.radius, 2) * this.height)/3).toFixed(4);
                break;
        }
        this.getPrint(this.shape, res);
    }

    getPrint(shape, res) {
        console.log(`Volume of ${shape} is: ${res}`);
    }
}

class Cylinder extends Shape {
    constructor(radius, height, shape) {
        super(radius, height, shape);
    }
}

class Sphere extends Shape {
    constructor(radius, shape) {
        super(radius, 1, shape);
    }
}

class Cone extends Shape {
    constructor(radius, height, shape) {
        super(radius, height, shape);
    }
}

let c1 = new Cylinder(5,3, "Cylinder");
c1.getVolume();

const c2 = new Sphere(5, shape = "Sphere");
c2.getVolume();

const c3 = new Cone(5,3, "Cone");
c3.getVolume();