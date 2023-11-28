let displayValue = '';
let resultShown = false;
function screenDisplay(value) {
    const display = document.getElementById("screen");
    const length = displayValue.length - 1;
    const lastChar = displayValue.charAt(displayValue.length - 1);
    if (resultShown){
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            display.value = displayValue;                                                
            resultShown = false;
        } else {
            resultShown = false;
            clearDisplay();
        }  
    }
    if (displayValue === "Cannot divide by zero") {
        clearDisplay();
    }
    if (displayValue === '' && (value === '+' || value === '*' || value === '/')) {
        return; // Prevent operators when the screen is empty
    }
    if (value === '.' && displayValue.toString().includes(".")){
        let count = 0;
        for (let i = length;i >= 0;i--){
            if (displayValue.charAt(i) === '.'){
                return;
            }
            else if(displayValue.charAt(i) === '+'||displayValue.charAt(i) === '-'||displayValue.charAt(i) === '*'||displayValue.charAt(i) === '/'){
                    count = 0;
                    displayValue += value;
                    display.value = displayValue;
                }
            else{
                count += 1;
            }           
        }
        if(count !== 0){
            return;
        }
    }
    if (value === '=' && displayValue) {
        const result = eval(displayValue);
        const fixedResult = parseFloat(result.toFixed(10));
        if (result === Infinity) {
            displayValue = "Cannot divide by zero";
            display.value = displayValue;
        }
        else{
            display.value = fixedResult;
            displayValue = fixedResult.toString();
            resultShown = true;
        }
    
    }
    else if (value === 'clc') {
        clearDisplay();
        resultShown = false;
    }
    else {
        if (value === '+' || value === '-' || value === '*' || value === '/' ) {
      // Check if the last character in the display is an operator or decimal
            if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' ) {
                    return;
            }
        }
    }
    displayValue += value;
    display.value = displayValue;
}

function clearDisplay() {        //to clear the display.
    displayValue = '';
    document.getElementById("screen").value = '';
}

function calculateResult() {              //to calculate result.
    const display = document.getElementById("screen");
    const result = eval(displayValue);
    const fixedResult = parseFloat(result.toFixed(10));
    if (result === Infinity) {
        displayValue = "Cannot divide by zero";
        display.value = displayValue;
    }else{
        display.value = fixedResult;
        displayValue = fixedResult.toString();
        resultShown = true;
    } 
}

function deleteDisplay() {       //to delete last entered
    displayValue=displayValue.toString().slice(0,-1)
    document.getElementById("screen").value = displayValue;
}
