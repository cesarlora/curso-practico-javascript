// Codigo del cuadrado
console.group("cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}


function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo

console.group("triangulo");


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base ;
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2 ;
}


console.groupEnd();


// Codigo del circulo

console.group("circulo");



// diametro

function diametroCirculo(radio) {
    return radio * 2;
}

// Pi
const PI = Math.PI;
console.log("La Pi del circulo es de: " + PI );

// cincunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// area 

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// comienza la magia 

function calcularPerimetroCuadrado() {
    var input = document.getElementById("inputCuadrado");
    var value = input.value;
    var perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    var input = document.getElementById("inputCuadrado");
    var value = input.value;
    var area = areaCuadrado(value);
    alert(area);
}