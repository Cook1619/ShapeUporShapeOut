let rectBtn =  document.getElementById('create-rectangle');
rectBtn.addEventListener('click', insertRectangle);
let squareBtn = document.getElementById('create-square');
squareBtn.addEventListener('click', insertSquare);
let circleBtn = document.getElementById('create-circle');
circleBtn.addEventListener('click', insertCircle);
let triangleBtn = document.getElementById('create-right-triangle');
triangleBtn.addEventListener('click', insertTriangle)

class Shape {
    constructor(width, height, background){
        this.width = width;
        this.height = height;
        this.background = background;
    }
    removeShape(){

    }
    describe(){

    }
}

class Circle extends Shape{
    constructor(width, height, background, radius){
        super(width, height, background)
        this.radius = radius;
    }
}

class Triangle extends Shape {
    constructor(width, height, background) {
        super(width, height, background)

    }
}

class Rectangle extends Shape {
    constructor(width, height, background) {
        super(width, height, background)

    }
}

class Square extends Rectangle {
    constructor(width, height, background) {
        super(width, height, background)

    }
}


function insertRectangle(){
    alert('connected!')
}
function insertSquare() {
    alert('connected!')
}
function insertCircle() {
    alert('connected!')
}
function insertTriangle() {
    alert('connected!')
}
function randomValue(min, max){
    return Math.floor(Math.random() * (max -mix)) + min;
}

