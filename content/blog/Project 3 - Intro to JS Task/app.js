// Declare Variables
let preTipTotal = prompt("Enter the value of the fare to the nearest penny:");
let tipPercentage = 15;

// Convert preTipTotal to a number
preTipTotal = parseFloat(preTipTotal);

// Calculate the new total
let tipAmount = (preTipTotal * tipPercentage) / 100;
let newTotal = preTipTotal + tipAmount;

// Output the result
document.write("Your total bill, with a " + tipPercentage +"% tip, is £" + newTotal.toFixed(2) + ". Tip amount is £" + tipAmount.toFixed(2));
