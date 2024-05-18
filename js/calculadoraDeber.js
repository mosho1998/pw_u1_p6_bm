let currentOperation = null;
let firstOperand = null;

function limpiar() {
    document.getElementById('display').innerText = '0';
    currentOperation = null;
    firstOperand = null;
}

function borrar() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function agregar(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' || (currentOperation && !firstOperand)) {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
    if (currentOperation && !firstOperand) {
        firstOperand = display.innerText;
    }
}

function opreaciones(operation) {
    if (!currentOperation) {
        firstOperand = document.getElementById('display').innerText;
        currentOperation = operation;
        document.getElementById('display').innerText = '0';
    } else {
        calcular();
        currentOperation = operation;
    }
}

function calcular() {
    const display = document.getElementById('display');
    const secondOperand = parseFloat(display.innerText);
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + secondOperand;
            break;
        case '-':
            result = parseFloat(firstOperand) - secondOperand;
            break;
        case '*':
            result = parseFloat(firstOperand) * secondOperand;
            break;
        case '/':
            if (secondOperand !== 0) {
                result = parseFloat(firstOperand) / secondOperand;
            } else {
                result = 'Error';
            }
            break;
        default:
            result = parseFloat(display.innerText);
    }
    display.innerText = result;
    currentOperation = null;
    firstOperand = null;
}
