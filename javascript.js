let cero = document.querySelector('#cero');
let uno = document.querySelector('#uno');
let dos = document.querySelector('#dos');
let tres = document.querySelector('#tres');
let cuatro = document.querySelector('#cuatro');
let cinco = document.querySelector('#cinco');
let seis = document.querySelector('#seis');
let siete = document.querySelector('#siete');
let ocho = document.querySelector('#ocho');
let nueve = document.querySelector('#nueve');
let display = document.querySelector('.numberDisplay');
let clear = document.querySelector('#c');
let sumar = document.querySelector('#sumar');
let restar = document.querySelector('#resta');
let multiplicar = document.querySelector('#multipli');
let dividir = document.querySelector('#dividir');
let punto = document.querySelector('#punto');
let funcion = document.querySelector('.funcion');
let calButtons = document.querySelector('.boton');
let equivale = document.querySelector('#equivale');
let lastValue = document.querySelector('#ac');


let arrA = [];
let arrB = [];
let arrC = [];

let arrF = [];

/*calButtons.addEventListener ('click', () =>{
    display.innerHTML = arrA ;
})*/


function add(a, b) {
    let sumar = (a + b);
    return sumar;
}

function subtract(a, b) {
    let quitar = (a - b);
    return quitar;
}

function multiply(a, b) {
    let multiplicar = (a * b);
    return multiplicar;
}

function divide(a, b) {
    let dividir = (a / b);
    return dividir;
}

function operate(arrC, arrB) {
    let oper = arrF[0];
    {if (arrB.length !== 0 && oper === '+'){
        let a = Number(arrC[0]);
        let b = Number(arrB.join(""));
        arrC[0] = add(a, b);
        return add(a, b);}
        else if (arrB.length !== 0 && oper === '-') {
        let a = Number(arrC[0]);
        let b = Number(arrB.join(""));
        arrC[0] = subtract(a, b);
        return subtract(a, b);}
        else if (arrB.length !== 0 && oper === 'x') {
        let a = Number(arrC[0]);
        let b = Number(arrB.join(""));
        arrC[0] = multiply(a, b);
        return multiply(a, b);}
        else if (arrB.length !== 0 && oper === '/') {
        let a = Number(arrC[0]);
        let b = Number(arrB.join(""));
        arrC[0] = divide(a, b);
        return divide(a, b)
        }
    }
}
cero.addEventListener('click', () =>{
    arrB.push(0);
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
})

punto.addEventListener('click', () =>{
    arrB.push('.');
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
})
uno.addEventListener('click', () =>{
    arrB.push(1);
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
   })
dos.addEventListener('click', () =>{
    arrB.push(2);
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
    })
tres.addEventListener('click', () =>{
    arrB.push(3);
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
   })
cuatro.addEventListener('click', () =>{
    arrB.push(4);
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
   })
cinco.addEventListener('click', () =>{
    arrB.push(5);
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
   })
seis.addEventListener('click', () =>{
    arrB.push(6);
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
   })
siete.addEventListener('click', () =>{
    arrB.push(7);
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
    })
ocho.addEventListener('click', () =>{
    arrB.push(8);
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
    })
nueve.addEventListener('click', () =>{
    arrB.push(9);
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
    })

clear.addEventListener('click', ()=>{
    display.innerHTML = null;
    funcion.innerHTML = null;
    arrA.length = 0;
    arrB.length = 0;
    arrC.length = 0;
})

lastValue.addEventListener('click', () => {
    arrB.length = 0;
    display.innerHTML = null;
    arrF.length = 0;
})

sumar.addEventListener('click', ()=>{
    funcion.innerHTML = '+';
    if (arrC.length === 0) {
    arrF[0] = '+';
    arrA = arrB;
    arrA.length = 10;
    let AArrA = arrA.join('');
    arrC[0] = AArrA;{
        arrB.length = 0;
    }}
    else if (arrC.length !== 0 && arrB.length !== 0){
        if(arrF[0] !== '+') {
        {operate(arrC, arrB); {
        arrF[0] = '+'
        arrB.length = 0;}
        display.innerHTML = arrC[0];
        funcion.innerHTML = '+';}}
        else if (arrF[0] === '+')
        operate(arrC, arrB); {
        arrB.length = 0;}
        display.innerHTML = arrC[0];
        funcion.innerHTML = '+';}
    })

restar.addEventListener('click', ()=>{
    funcion.innerHTML = "-";
    if (arrC.length === 0) {
        arrF[0] = '-';
        arrA = arrB;
        arrA.length = 10;
        let AArrA = arrA.join('');
        arrC.push(AArrA);{
            arrB.length = 0;
        }}
        else if (arrC.length !== 0 && arrB.length !== 0){
            if(arrF[0] !== '-') {
                {operate(arrC, arrB); {
                arrF[0] = '-'
                arrB.length = 0;}
                display.innerHTML = arrC[0];
                funcion.innerHTML = '-';}}
                else if (arrF[0] === '-')
                operate(arrC, arrB); {
                arrB.length = 0;}
                display.innerHTML = arrC[0];
                funcion.innerHTML = '-';}
        })
   
multiplicar.addEventListener('click', ()=>{
    funcion.innerHTML = "x";
    if (arrC.length === 0) {
        arrF[0] = 'x';
        arrA = arrB;
        arrA.length = 10;
        let AArrA = arrA.join('');
        arrC.push(AArrA);{
            arrB.length = 0;
        }}
        else if (arrC.length !== 0 && arrB.length !== 0){
            if(arrF[0] !== 'x') {
                {operate(arrC, arrB); {
                arrF[0] = 'x'
                arrB.length = 0;}
                display.innerHTML = arrC[0];
                funcion.innerHTML = 'x';}}
                else if (arrF[0] === 'x')
                operate(arrC, arrB); {
                arrB.length = 0;}
                display.innerHTML = arrC[0];
                funcion.innerHTML = 'x';}
        })
   
dividir.addEventListener('click', ()=>{
    funcion.innerHTML = "÷" ;
    if (arrC.length === 0) {
        arrF[0] = '/';
        arrA = arrB;
        arrA.length = 10;
        let AArrA = arrA.join('');
        arrC.push(AArrA);{
            arrB.length = 0;
        }}
        else if (arrC.length !== 0 && arrB.length !== 0){
            if(arrF[0] !== '/') {
                {operate(arrC, arrB); {
                arrF[0] = '/'
                arrB.length = 0;}
                display.innerHTML = arrC[0];
                funcion.innerHTML = '÷';}}
                else if (arrF[0] === '/')
                operate(arrC, arrB); {
                arrB.length = 0;}
                display.innerHTML = arrC[0];
                funcion.innerHTML = '÷';}
        })
   

equivale.addEventListener('click', () => {
        if (funcion.innerHTML = "+" && arrC.length !== 0 && arrB.length !== 0){
            let firstChoice = arrC[0];
            let a = Number(firstChoice);
            let secondChoice = arrB.slice(0, 10);
            let b = Number(secondChoice.join('')); {
                display.innerHTML = add(a, b);
                funcion.innerHTML = '=';
                arrC[0] = Number(add(a, b));}
            arrB.length = 0;
            arrF.length = 0;}
        else if (funcion.innerHTML = "-" && arrC.length !== 0 && arrB.length !== 0){
            let firstChoice = arrC[0];
            let a = Number(firstChoice);
            let secondChoice = arrB.slice(0, 10);
            let b = Number(secondChoice.join(''));    
                {display.innerHTML = subtract(a, b);
                funcion.innerHTML = '=';
                arrC[0] = Number(subtract(a, b));}
            arrB.length = 0;
            arrF.length = 0;}
        else if (funcion.innerHTML = "x" && arrC.length !== 0 && arrB.length !== 0){
            let firstChoice = arrC[0];
            let a = Number(firstChoice);
            let secondChoice = arrB.slice(0, 10);
            let b = Number(secondChoice.join(''));
                {display.innerHTML = multiply(a, b);
                funcion.innerHTML = '=';
                arrC[0] = Number(multiply(a, b));}
            arrB.length = 0;
            arrF.length = 0;}
        else if (funcion.innerHTML = "÷" && arrC.length !== 0 && arrB.length !== 0){
            let firstChoice = arrC[0];
            let a = Number(firstChoice);
            let secondChoice = arrB.slice(0, 10);
            let b = Number(secondChoice.join('')); {
                {display.innerHTML = divide(a, b);
                funcion.innerHTML = '=';
                arrC[0] = Number(divide(a, b));}
            arrB.length = 0;
            arrF.length = 0;}
        }
    })