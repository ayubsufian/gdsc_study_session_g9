function add() {
    performOperation((a, b) => a + b);
}

function subtract() {
    performOperation((a, b) => a - b);
}

function multiply() {
    performOperation((a, b) => a * b);
}

function divide() {
    performOperation((a, b) => {
        if (b !== 0) {
            return a / b;
        } else {
            return "Cannot divide by zero";
        }
    });
}

function performOperation(operation) {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);

    if (!isNaN(operand1) && !isNaN(operand2)) {
        const result = operation(operand1, operand2);
        document.getElementById('result').textContent = `Result: ${result}`;
    } else {
        document.getElementById('result').textContent = "Invalid input";
    }
}