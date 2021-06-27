//Cuadrado
console.group("Cuadrado");

const squareSide = 5;
// console.log(`Los lados del cuadrado miden ${squareSide} cm`);

function squarePerimeter(side){
    return side * 4;
}
// console.log(`El perimetro del cuadrado es ${squarePerimeter} cm`);

function squareArea(side){
    return side * side;
}
// console.log(`El area del cuadrado es ${squareArea} cm2`);
console.groupEnd();

//Triangulo
// console.group("Triangulo")
// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 4;
// // console.log(`Los lados del triángulo miden: ${triangleSide1} cm y ${triangleSide2} cm, la base mide ${triangleBase}`);

// const triangleHeight = 5.5;
// // console.log(`La altura del triángulo es de ${triangleHeight} cm`);

function trianglePerimeter(side1, side2, base){
    return side1 + side2 + base;
}
    // console.log(`El perímetro del triángulo es de ${trianglePerimeter} cm`);

function triangleArea(base, height){
    return (base * height) / 2;
} 
// console.log(`El area del triángulo es de ${triangleArea} cm2`);

console.groupEnd();

//Circulo
console.group("Circulo")

// const circleRadius = 4;
// console.log(`El radio del circulo es de ${circleRadius} cm`);

function circleDiameter(radius){
    return radius * 2;
}
    // console.log(`El diametro del circulo es de ${circleDiameter} cm`);

const PI = Math.PI;
// console.log(`El valor de PI es ${PI}`);

function circlePerimeter(radius){
    const diameter = circleDiameter(radius)
    return diameter * PI;
}
// console.log(`El perimetro del circulo es de ${circlePerimeter} cm`);

function circleArea(radius){
    return (radius * radius) * PI;
} 
// console.log(`El area del circulo es de ${circleArea} cm2`);


// HTML

function calcSquarePerimeter(){
    const input = document.getElementById("squareInput");
    const value = input.value;
    
    const perimeter = squarePerimeter(value);
    alert(perimeter);
}
function calcSquareArea(){
    const input = document.getElementById("squareInput");
    const value = input.value;
    
    const area = squareArea(value);
    alert(area);
}
function triangleHeight(side1, side2, base){
    return Math.sqrt(side1 * side2 - ((base * base) / 4));
}
function calcTriangleHeight(){
    const side1Input = document.getElementById("triangleSide1Input");
    const side1Value = side1Input.value;

    const side2Input = document.getElementById("triangleSide2Input");
    const side2Value = side2Input.value;

    const baseInput = document.getElementById("triangleBase");
    const baseValue = baseInput.value;

    if (side1Value != side2Value){
        alert("Esto no es un triangulo isosceles")
    }
    else{
        const height = triangleHeight(side1Value, side2Value, baseValue);
        alert(height);
    }
   
}   