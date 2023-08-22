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

function operate(){
    let choiceA = prompt('pick a number');
    let a = Number(choiceA);
    let choiceB = prompt('pick a second number');
    let b = Number(choiceB);
    let op = prompt('add, subtract, multiply or divide');
    let oper = op.toLowerCase();
    {if (oper === 'add'){
        alert(add(a, b));}
        else if (oper === 'subtract') {
        alert(subtract(a, b));
        }
        else if (oper === 'multiply') {
        alert(multiply(a, b));}
        else if (oper === 'divide') {
        alert(divide(a, b));
        }
        else if (oper) {
            alert('invalid entry');
        }
    }
}
