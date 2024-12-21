const resultField = document.getElementById('result');

function appendToResult(value) {
    resultField.value += value;
}

function clearResult() {
    resultField.value = '';
}

function calculateResult() {
    try {
        const result = eval(resultField.value);
        resultField.value = result;
    } catch (error) {
        alert('Invalid calculation');
        clearResult();
    }
}

document.addEventListener('keydown', (event) => {
    const allowedKeys = '0123456789+-*/.=C';
    if (allowedKeys.includes(event.key)) {
        if (event.key === 'C') {
            clearResult();
        } else if (event.key === '=') {
            calculateResult();
        } else {
            appendToResult(event.key);
        }
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        resultField.value = resultField.value.slice(0, -1);
    }
});
