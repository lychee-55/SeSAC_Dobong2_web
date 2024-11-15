class Shape{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        console.log(this.width*this.height)
    }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea());

// ------rectangle------
class Rectangle extends Shape{
    constructor(width,height){
        super(width,height)
    }

    getLine(){
        
    }
}