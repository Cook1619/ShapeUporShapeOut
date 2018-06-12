



let rectBtn =  document.getElementById('create-rectangle');
rectBtn.addEventListener('click', insertRectangle);
let squareBtn = document.getElementById('create-square');
squareBtn.addEventListener('click', insertSquare);
let circleBtn = document.getElementById('create-circle');
circleBtn.addEventListener('click', insertCircle);
let triangleBtn = document.getElementById('create-right-triangle');
triangleBtn.addEventListener('click', insertTriangle)



let container = document.getElementById('shape-container');
const min = 0;
const max = 700;


class Shape {
    constructor(width, height, x , y, shapeName, radius, area, perimeter){
        this.div = document.createElement('div');
        this.div.classList.add('shape');
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.width = width;
        this.div.height = height;
        this.shapeName = shapeName;
        this.radius = radius;
        this.area = area;
        this.perimeter = perimeter;
        container.appendChild(this.div);
        
    }
    insertShape(){

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
    // let xval = randomValue(0,MAX);
    // let yval = randomValue(0,MAX);
    // let rect = new Rectangle(xVal, yVal);
    let rectHeight = document.getElementById("rectHeight").value;
    let rectWidth = document.getElementById("rectWidth").value;

    console.log(rectWidth);
    console.log(rectHeight);
    div = document.createElement('div');
    shapeDiv = document.getElementById('shape-container');
    div.style.width = `${rectWidth}px`;
    div.style.height = `${rectHeight}px`;
    div.style.backgroundColor = 'green';
    shapeDiv.appendChild(div);
    document.body.appendChild(shapeDiv);
   
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
    return Math.floor(Math.random() * (max -min)) + min;
}

