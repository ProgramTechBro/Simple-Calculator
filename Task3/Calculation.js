document.addEventListener("DOMContentLoaded", function() {
    console.log('Hello');
    let inputField = document.getElementById("inputField");
    let outputField = document.getElementById("outputField");
    let inputMode = true;
    let originalFontSize = window.getComputedStyle(inputField, null).getPropertyValue('font-size');
    let originalFontWeight = window.getComputedStyle(inputField, null).getPropertyValue('font-weight');

    let plusButton = document.getElementById('plus');
    let minusButton = document.getElementById('minus');
    let multiplyButton = document.getElementById('multiply');
    let divideButton = document.getElementById('divide');
    let btn7 = document.getElementById('btn7');
    let btn8 = document.getElementById('btn8');
    let btn9 = document.getElementById('btn9');
    let btn4 = document.getElementById('btn4');
    let btn5 = document.getElementById('btn5');
    let btn6 = document.getElementById('btn6');
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn0 = document.getElementById('btn0');
    let decimalButton = document.getElementById('decimal');
    let clearButton = document.getElementById('clear');
    let equalButton = document.getElementById('equal');
    let delButton = document.getElementById('del');

    btn7.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '7';
        } else {
            outputField.textContent += '7';
        }
    });

    btn8.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '8';
        } else {
            outputField.textContent += '8';
        }
    });

    btn9.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '9';
        } else {
            outputField.textContent += '9';
        }
    });

    btn4.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '4';
        } else {
            outputField.textContent += '4';
        }
    });

    btn5.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '5';
        } else {
            outputField.textContent += '5';
        }
    });

    btn6.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '6';
        } else {
            outputField.textContent += '6';
        }
    });

    btn1.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '1';
        } else {
            outputField.textContent += '1';
        }
    });

    btn2.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '2';
        } else {
            outputField.textContent += '2';
        }
    });

    btn3.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '3';
        } else {
            outputField.textContent += '3';
        }
    });

    btn0.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '0';
        } else {
            outputField.textContent += '0';
        }
    });

    decimalButton.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '.';
        } else {
            outputField.textContent += '.';
        }
    });

    plusButton.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '+';
        } else {
            outputField.textContent += '+';
        }
    });

    minusButton.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '-';
        } else {
            outputField.textContent += '-';
        }
    });

    multiplyButton.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '*';
        } else {
            outputField.textContent += '*';
        }
    });

    divideButton.addEventListener('click', function() {
        if (inputMode) {
            inputField.textContent += '/';
        } else {
            outputField.textContent += '/';
        }
    });

    clearButton.addEventListener('click', function() {
        inputField.textContent = '';
        outputField.textContent = '';
        inputField.style.fontSize = originalFontSize; 
        inputField.style.fontWeight = originalFontWeight;
        inputMode=true;
    });

    delButton.addEventListener('click', function() {
         if(inputMode)
        {
            inputField.textContent = inputField.textContent.slice(0, -1);
        }
        else
        {
            outputField.textContent = outputField.textContent.slice(0, -1);
        }
        
    });

    equalButton.addEventListener('click', function() {
        try {
            if(inputMode==true)
            {
                let expression = inputField.textContent;
                let result = eval(expression);
                outputField.textContent = expression;
                outputField.style.color='#72787D';
                inputField.textContent = result;
                inputField.style.color='white';
                inputField.style.fontSize = '36px'; 
                inputField.style.fontWeight = 'bold';
                inputMode=false;
            }
            else
            {
                let expression=outputField.textContent;
                let result=eval(expression);
                outputField.textContent=expression;
                inputField.textContent=result;
                inputField.style.fontSize = '36px'; 
                inputField.style.fontWeight = 'bold';
            }
            
        } catch (error) {
            outputField.textContent = 'Error';
            inputField.textContent = '';
        }
    });
});
