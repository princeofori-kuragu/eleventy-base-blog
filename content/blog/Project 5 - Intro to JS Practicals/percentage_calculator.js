// Function to calculate a specific percentage of any number
function percentageCalculator(number, percentage) {
    // Check if the arguments are valid numbers
    if (typeof number !== 'number' || typeof percentage !== 'number') {
        alert('Both number and percentage must be numbers.');
        return; // Exit the function if arguments are not numbers
    }

    // Calculate the percentage
    let result = (percentage / 100) * number;

    // Return the result
    return result;
}

//  usage
let originalNumber = +prompt("Enter the original number:");
let percentageToCalculate = +prompt("Enter the percentage to be calculated:");

// Call the function and log the result
let calculatedPercentage = percentageCalculator(originalNumber, percentageToCalculate);
alert(`${percentageToCalculate}% of ${originalNumber} is: ${calculatedPercentage}`);
