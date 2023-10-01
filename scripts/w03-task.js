/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return (number1 + number2);
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

function subtract (number1, number2) {
    return (number1 - number2);
}

/* Function Expression - Subtract Numbers */
function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
// use this outside the function so that it will display after the page loads
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
let multiply = (factor1, factor2) => factor1 * factor2;

let multiplyNumbers = () => {
    // use the HTML elements as values
    let factor1 = document.getElementById('factor1').value;
    let factor2 = document.getElementById('factor2').value;

    // call the multiply function
    let product = multiply(factor1, factor2);

    // Display in the HTML, use the ID 'product'
    document.getElementById('product').value = product;
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (dividend, divisor) => dividend / divisor;

let divideNumbers = () => {
    let dividend = document.getElementById('dividend').value;
    let divisor = document.getElementById('divisor').value;

    let quotient = divide(dividend, divisor);

    document.getElementById('quotient').value = quotient;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let date = new Date();
let year = date.getFullYear();

document.querySelector('#year').value = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = multiplied.reduce((accumulator, currentValue) => accumulator + currentValue);
