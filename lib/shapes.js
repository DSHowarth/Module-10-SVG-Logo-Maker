
//Each Shape class stores all of the info except shape, which is defined by the child classes.
class Shape {
    constructor(shapeColor, textColor, text){
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    
    //adding a function to fulfill test case listed in requirements. Otherwise, I'd just use objName.shapeColor = X.
    setColor(color) {
        this.shapeColor = color;
    }
    //HTML template for the logo Text
    renderText(){
        return `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${textColor}" font-weight="bold", font-size="80px">${text}</text>`;
    }
}

//Class for Triangle Logos
class Triangle extends Shape {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text);
    }
    //HTML template for the logo Shape
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
    }
    //Triangle gets its own renderText because it needs to be slightly off center to look correct
    renderText(){
        return `<text x="50%" y="70%" text-anchor="middle" dominant-baseline="central" fill="${textColor}" font-weight="bold", font-size="45px">${text}</text>`;
    }
}

//Class for Circle Logos
class Circle extends Shape {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text);
    }
    render(){
        return `<circle cx="50%" cy="50%" r='100px' fill="${shapeColor}" />`;
    }
}

//Class for Square Logos
class Square extends Shape {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text);
    }
    //Square: a rectangle where width === height
    render(){
        return `<rect x="50px" width="200px" height="200px" fill="${shapeColor}" />`;
    }

}

module.exports = {
    Shape: Shape,
    Triangle: Triangle,
    Circle: Circle,
    Square: Square
}