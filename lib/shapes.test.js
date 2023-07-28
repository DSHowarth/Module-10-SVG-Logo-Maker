const rest = require('jest')
const shapes = require('./shapes.js')

describe('Triangle Color Generation', () => {
    it('should insert shape color value into triangle html', () => {
        const testTri = new shapes.Triangle();
        testTri.setColor('blue');
        expect(testTri.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe('Circle Color Generation', () => {
    it('should insert shape color value into circle html', () => {
        const testCirc = new shapes.Circle();
        testCirc.setColor('blue');
        expect(testCirc.render()).toEqual('<circle cx="50%" cy="50%" r="100px" fill="blue" />');
    })
})

describe('Square Color Generation', () => {
    it('should insert shape color value into square html', () => {
        const testSquare = new shapes.Square();
        testSquare.setColor('blue');
        expect(testSquare.render()).toEqual('<rect x="50px" width="200px" height="200px" fill="blue" />');
    })
})