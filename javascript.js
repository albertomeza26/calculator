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
let calButtons = document.querySelectorAll('.boton');
let funButtons = document.querySelectorAll('.botones');
let equivale = document.querySelector('#equivale');
let lastValue = document.querySelector('#ac');


let arrA = [];
let arrB = [];
let arrC = [];

let arrF = [];

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
        let c = add(a, b);
        {if (c.toString().length <= 10){
            arrC[0] = add(a, b);
            return add(a, b);}
        else if (c.toString().length > 10){
            arrC[0] = 'error';
            funcion.innerHTML = 'error';
            arrA.length = 0;
            arrB.length = 0;
            arrF.length = 0;
            disableBtn();}}}
    else if (arrB.length !== 0 && oper === '-') {
        let a = Number(arrC[0]);
        let b = Number(arrB.join(""));
        let c = subtract(a, b);
        {if (c.toString().length <= 10){
            arrC[0] = subtract(a, b);}
        else if (c.toString().length > 10) {
            arrC[0] = 'error';}}}
    else if (arrB.length !== 0 && oper === 'x') {
        let a = Number(arrC[0]);
        let b = Number(arrB.join(""));
        let c = multiply(a, b);
        {if (c.toString().length <= 10){
            arrC[0] = multiply(a, b);}
        else if (c.toString().length > 10) {
            arrC[0] = 'error';}}}
    else if (arrB.length !== 0 && oper === '/') {
        let a = Number(arrC[0]);
        let b = Number(arrB.join(""));
        let c = divide(a, b);
        {if (c.toString().length <= 10){
            arrC[0] = divide(a, b);}
        else if (c.toString().length > 10){
            arrC[0] = 'error';}}}
        }
    }

cero.addEventListener('click', () => {
    if(funcion.innerHTML !== '=' && arrB.length !== 0){
    arrB.push(0);
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
    disableBtn();}
    else if (funcion.innerHTML === '=' && arrB.length !== 0){
    arrA.length = 0;
    arrB.length = 0;
    arrC.length = 0;
    arrF.length = 0;
    funcion.innerHTML = null;
    display.innerHTML = null;{
    arrB.push(0);
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
    disableBtn();
    }}
    else if (funcion.innerHTML === '='){
    arrA.length = 0;
    arrB.length = 0;
    arrC.length = 0;
    arrF.length = 0;
    funcion.innerHTML = null;
    display.innerHTML = '0';
    }
})

punto.addEventListener('click', () => {
    if(funcion.innerHTML !== '='){
    arrB.push('.');
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
    disableBtn();}
    else if (funcion.innerHTML === '='){
    arrA.length = 0;
    arrB.length = 0;
    arrC.length = 0;
    arrF.length = 0;
    funcion.innerHTML = null;
    display.innerHTML = null;{
    arrB.push('.');
    let ARaB = arrB.slice(0, 10);
    let AArrB = ARaB.join("");
    display.innerHTML = AArrB;
    disableBtn();  
    }}
})
function disableBtn(){
    if (arrB.includes('.') === true) {
    document.getElementById('punto').disabled = true;}
    else if (arrB.includes('.') !== true) {
    document.getElementById('punto').disabled = false;
}}
uno.addEventListener('click', () => {
    if(funcion.innerHTML !== '='){
        arrB.push(1);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();}
        else if (funcion.innerHTML === '='){
        arrA.length = 0;
        arrB.length = 0;
        arrC.length = 0;
        arrF.length = 0;
        funcion.innerHTML = null;
        display.innerHTML = null;{
        arrB.push(1);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();  
        }}
    })
dos.addEventListener('click', () => {
    if(funcion.innerHTML !== '='){
        arrB.push(2);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();}
        else if (funcion.innerHTML === '='){
        arrA.length = 0;
        arrB.length = 0;
        arrC.length = 0;
        arrF.length = 0;
        funcion.innerHTML = null;
        display.innerHTML = null;{
        arrB.push(2);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();  
        }}
    })
tres.addEventListener('click', () => {
    if(funcion.innerHTML !== '='){
        arrB.push(3);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();}
        else if (funcion.innerHTML === '='){
        arrA.length = 0;
        arrB.length = 0;
        arrC.length = 0;
        arrF.length = 0;
        funcion.innerHTML = null;
        display.innerHTML = null;{
        arrB.push(3);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();  
        }}
    })
cuatro.addEventListener('click', () => {
    if(funcion.innerHTML !== '='){
        arrB.push(4);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();}
        else if (funcion.innerHTML === '='){
        arrA.length = 0;
        arrB.length = 0;
        arrC.length = 0;
        arrF.length = 0;
        funcion.innerHTML = null;
        display.innerHTML = null;{
        arrB.push(4);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();  
        }}
    })
cinco.addEventListener('click', () => {
    if(funcion.innerHTML !== '='){
        arrB.push(5);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();}
        else if (funcion.innerHTML === '='){
        arrA.length = 0;
        arrB.length = 0;
        arrC.length = 0;
        arrF.length = 0;
        funcion.innerHTML = null;
        display.innerHTML = null;{
        arrB.push(5);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();  
        }}
    })
seis.addEventListener('click', () => {
    if(funcion.innerHTML !== '='){
        arrB.push(6);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();}
        else if (funcion.innerHTML === '='){
        arrA.length = 0;
        arrB.length = 0;
        arrC.length = 0;
        arrF.length = 0;
        funcion.innerHTML = null;
        display.innerHTML = null;{
        arrB.push(6);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();  
        }}
    })
siete.addEventListener('click', () => {
    if(funcion.innerHTML !== '='){
        arrB.push(7);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();}
        else if (funcion.innerHTML === '='){
        arrA.length = 0;
        arrB.length = 0;
        arrC.length = 0;
        arrF.length = 0;
        funcion.innerHTML = null;
        display.innerHTML = null;{
        arrB.push(7);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();  
        }}
    })
ocho.addEventListener('click', () =>{
    if(funcion.innerHTML !== '='){
        arrB.push(8);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();}
        else if (funcion.innerHTML === '='){
        arrA.length = 0;
        arrB.length = 0;
        arrC.length = 0;
        arrF.length = 0;
        funcion.innerHTML = null;
        display.innerHTML = null;{
        arrB.push(8);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();  
        }}
    })
nueve.addEventListener('click', () =>{
    if(funcion.innerHTML !== '='){
        arrB.push(9);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();}
        else if (funcion.innerHTML === '='){
        arrA.length = 0;
        arrB.length = 0;
        arrC.length = 0;
        arrF.length = 0;
        funcion.innerHTML = null;
        display.innerHTML = null;{


        arrB.push(9);
        let ARaB = arrB.slice(0, 10);
        let AArrB = ARaB.join("");
        display.innerHTML = AArrB;
        disableBtn();  
        }}
    })

clear.addEventListener('click', ()=>{
    display.innerHTML = null;
    funcion.innerHTML = null;
    arrA.length = 0;
    arrB.length = 0;
    arrC.length = 0;
    arrF.length = 0;
    disableBtn();
})

lastValue.addEventListener('click', () => {
    if (arrB.length !== 0) {
    arrB.pop();
    display.innerHTML = arrB.join("");
    disableBtn();
}})

sumar.addEventListener('click', ()=>{
    disableBtn();
if (arrC.length === 0) {
    funcion.innerHTML = '+';
    arrF[0] = '+';
    arrA = arrB;
    arrA.length = 10;
    let AArrA = arrA.join('');
    arrC[0] = AArrA;{
        arrB.length = 0;
    }}
else if (arrC.length !== 0 && arrB.length !== 0){
        operate(arrC, arrB);{
        if (arrF[0] !== '+' && arrC[0] !== 'error') {
            arrF[0] = '+'
            arrB.length = 0;
            display.innerHTML = arrC[0];
            funcion.innerHTML = '+';}
        else if (arrF[0] === '+' && arrC[0] !== 'error'){
            arrB.length = 0;
            display.innerHTML = arrC[0];
            funcion.innerHTML = '+';}
        else if (arrC[0] === 'error'){
            display.innerHTML = arrC[0];
            funcion.innerHTML = '=';
        }
    }}
else if (arrC.length !== 0 && arrB.length === 0){
        arrF[0] = '+';
        funcion.innerHTML = '+';
        }
    disableBtn();
    })

restar.addEventListener('click', ()=>{
    disableBtn();
    if (arrC.length === 0) {
        funcion.innerHTML = "-";
        arrF[0] = '-';
        arrA = arrB;
        arrA.length = 10;
        let AArrA = arrA.join('');
        arrC.push(AArrA);{
            arrB.length = 0;
        }}
    else if (arrC.length !== 0 && arrB.length !== 0){
            operate(arrC, arrB);{
            if (arrF[0] !== '-' && arrC[0] !== 'error') {
                arrF[0] = '-'
                arrB.length = 0;
                display.innerHTML = arrC[0];
                funcion.innerHTML = '-';}
            else if (arrF[0] === '-' && arrC[0] !== 'error'){
                arrB.length = 0;
                display.innerHTML = arrC[0];
                funcion.innerHTML = '-';}
            else if (arrC[0] === 'error'){
                display.innerHTML = arrC[0];
                funcion.innerHTML = '=';
            }
        }}
    else if (arrC.length !== 0 && arrB.length === 0){
            arrF[0] = '-';
            funcion.innerHTML = '-';
            }
        disableBtn();
        })
   
multiplicar.addEventListener('click', ()=>{
    disableBtn();
    if (arrC.length === 0) {
        funcion.innerHTML = "x";
        arrF[0] = 'x';
        arrA = arrB;
        arrA.length = 10;
        let AArrA = arrA.join('');
        arrC.push(AArrA);{
            arrB.length = 0;
        }}
    else if (arrC.length !== 0 && arrB.length !== 0){
            operate(arrC, arrB);{
            if (arrF[0] !== 'x' && arrC[0] !== 'error') {
                arrF[0] = 'x'
                arrB.length = 0;
                display.innerHTML = arrC[0];
                funcion.innerHTML = 'x';}
            else if (arrF[0] === 'x' && arrC[0] !== 'error'){
                arrB.length = 0;
                display.innerHTML = arrC[0];
                funcion.innerHTML = 'x';}
            else if (arrC[0] === 'error'){
                display.innerHTML = arrC[0];
                funcion.innerHTML = '=';
            }
        }}
    else if (arrC.length !== 0 && arrB.length === 0){
            arrF[0] = 'x';
            funcion.innerHTML = 'x';
            }
        disableBtn();
        })
   
dividir.addEventListener('click', ()=>{
    disableBtn();
    if (arrC.length === 0) {
        funcion.innerHTML = "÷" ;
        arrF[0] = '/';
        arrA = arrB;
        arrA.length = 10;
        let AArrA = arrA.join('');
        arrC.push(AArrA);{
            arrB.length = 0;
        }}
    else if (arrC.length !== 0 && arrB.length !== 0){
            operate(arrC, arrB);{
            if (arrF[0] !== '/' && arrC[0] !== 'error') {
                arrF[0] = '/'
                arrB.length = 0;
                display.innerHTML = arrC[0];
                funcion.innerHTML = '÷';}
            else if (arrF[0] === '/' && arrC[0] !== 'error'){
                arrB.length = 0;
                display.innerHTML = arrC[0];
                funcion.innerHTML = '÷';}
            else if (arrC[0] === 'error'){
                display.innerHTML = arrC[0];
                funcion.innerHTML = '=';
            }
        }}
    else if (arrC.length !== 0 && arrB.length === 0){
            arrF[0] = '/';
            funcion.innerHTML = '÷';
            }
        disableBtn();
        })
   

equivale.addEventListener('click', () => {
        disableBtn();
        if (funcion.innerHTML === "+" && arrC.length !== 0 && arrB.length !== 0){
            let firstChoice = arrC[0];
            let a = Number(firstChoice);
            let secondChoice = arrB.slice(0, 10);
            let b = Number(secondChoice.join(''));
            let c = add(a, b); {
                {if (c.toString().length <= 10){
                    arrC[0] = Number(add(a, b));
                    display.innerHTML = add(a, b)
                    funcion.innerHTML = '='}
                else if (c.toString().length > 10){
                    arrC[0] = 'error';
                    funcion.innerHTML = 'error';
                    }}}}
        else if (funcion.innerHTML === "-" && arrC.length !== 0 && arrB.length !== 0){
            let firstChoice = arrC[0];
            let a = Number(firstChoice);
            let secondChoice = arrB.slice(0, 10);
            let b = Number(secondChoice.join(''));    
            let c = subtract(a, b); {
                {if (c.toString().length <= 10){
                    arrC[0] = Number(subtract(a, b));
                    display.innerHTML = subtract(a, b)
                    funcion.innerHTML = '='}
                else if (c.toString().length > 10){
                    arrC[0] = 'error';
                    funcion.innerHTML = 'error';
                    }}}}
        else if (funcion.innerHTML === "x" && arrC.length !== 0 && arrB.length !== 0){
            let firstChoice = arrC[0];
            let a = Number(firstChoice);
            let secondChoice = arrB.slice(0, 10);
            let b = Number(secondChoice.join(''));
            let c = multiply(a, b); {
                {if (c.toString().length <= 10){
                    arrC[0] = Number(multiply(a, b));
                    display.innerHTML = multiply(a, b)
                    funcion.innerHTML = '='}
                else if (c.toString().length > 10){
                    arrC[0] = 'error';
                    funcion.innerHTML = 'error';
                    }}}}
        else if (funcion.innerHTML === "÷" && arrC.length !== 0 && arrB.length !== 0){
            let firstChoice = arrC[0];
            let a = Number(firstChoice);
            let secondChoice = arrB.slice(0, 10);
            let b = Number(secondChoice.join(''));
            let c = divide(a, b); {
            {if (c.toString().length <= 10){
                arrC[0] = Number(divide(a, b));
                display.innerHTML = divide(a, b)
                funcion.innerHTML = '='}
            else if (c.toString().length > 10){
                arrC[0] = 'error';
                funcion.innerHTML = 'error';
                }}}}
        arrB.length = 0;
        arrF.length = 0;
        disableBtn();
    })
   
document.addEventListener('click', () =>{
        if (arrC[0] === 'error'){
        arrA.length = 0;
        arrB.length = 0;
        arrC.length = 0;
        arrF.length = 0;
        funcion.innerHTML = '=';
        display.innerHTML = 'error';
        disableBtn();
        }
    })

calButtons.forEach((calButtons) => {
    calButtons.addEventListener ('mouseenter', () => {
    calButtons.style.backgroundColor = 'white';
    calButtons.style.color = 'black';
    calButtons.style.scale = '.9';
    calButtons.style.transition = '0.4s'
})})
calButtons.forEach((calButtons) => {
    calButtons.addEventListener ('mouseleave', () => {
    calButtons.style.backgroundColor = '';
    calButtons.style.color = '';
    calButtons.style.scale = '';
})})
