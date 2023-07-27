
class Shape {
    constructor(shapeColor, textColor, text){
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    
}

class Triangle extends Shape {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text);
    }
}

class Circle extends Shape {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text);
    }

}

class Square extends Shape {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text);
    }

}

const svgTemplate = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

                    </svg>`