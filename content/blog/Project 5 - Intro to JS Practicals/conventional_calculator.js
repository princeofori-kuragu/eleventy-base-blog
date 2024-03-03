// Function to perform arithmetic operations on two numbers
function calculator(number1, number2, operator) {
    // Check if the arguments are valid numbers
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        alert('Both number1 and number2 must be numbers.');
        return; // Exit the function if arguments are not numbers
    }

    // Use a switch statement to determine the operator and perform the corresponding operation
    let result;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            // Check for division by zero
            if (number2 === 0) {
                console.error('Cannot divide by zero.');
                return; // Exit the function if division by zero is attempted
            }
            result = number1 / number2;
            break;
        case '%':
            // Check for modulus by zero
            if (number2 === 0) {
                console.error('Cannot perform modulus by zero.');
                return; // Exit the function if modulus by zero is attempted
            }
            result = number1 % number2;
            break;
        default:
            console.error('Invalid operator. Please use +, -, *, /, or %.');
            return; // Exit the function if an invalid operator is provided
    }

    // Log the result
    console.log(`${number1} ${operator} ${number2} = ${result}`);
    return result;
}

// usage
const num1 = +prompt("Enter your first number:");
const num2 = +prompt("Enter a second number:");
const operation = prompt("Enter an operator (+ for addition, - for subtraction, * for multiplication, / for division or % for modulus):");

// Call the function and log the result
calculator(num1, num2, operation);
