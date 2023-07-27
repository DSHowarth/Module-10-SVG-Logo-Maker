
class Shape {
    constructor(shapeColor, textColor, text){
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    
    setColor(color) {
        this.shapeColor = color;
    }
}

class Triangle extends Shape {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text);
    }

    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
    }
    renderText(){
        return `<text x="50%" y="70%" text-anchor="middle" dominant-baseline="central" fill="${textColor}" font-weight="bold", font-size="45px">${text}</text>`;
    }
}

class Circle extends Shape {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text);
    }
    render(){
        return `<circle cx="50%" cy="50%" r='100px' fill="${shapeColor}" />`;
    }
    renderText(){
        return `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${textColor}" font-weight="bold", font-size="80px">${text}</text>`;
    }
}

class Square extends Shape {
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text);
    }
    render(){
        return `<rect x="50px" width="200px" height="200px" fill="${shapeColor}" />`;
    }
    renderText(){
        return `<text x="50%" y="62%" text-anchor="middle" fill="${textColor}" font-weight="bold", font-size="80px">${text}</text>`;
    }

}

module.exports = {
    Shape: Shape,
    Triangle: Triangle,
    Circle: Circle,
    Square: Square
}