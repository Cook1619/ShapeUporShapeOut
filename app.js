let rectBtn =  document.getElementById('create-rectangle');
rectBtn.addEventListener('click', function(){
    alert('hello');
})
let squaretBtn = document.getElementById('create-square');
squareBtn.addEventListener('click', function () {
    alert('hello');
})
let circleBtn = document.getElementById('create-circle');
circleBtn.addEventListener('click', function () {
    alert('hello');
})
let triangleBtn = document.getElementById('create-right-triangle');
triangleBtn.addEventListener('click', function () {
    alert('hello');
})


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

