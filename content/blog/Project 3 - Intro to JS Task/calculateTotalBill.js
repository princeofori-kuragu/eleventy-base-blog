// Procedural function to calculate the total bill with a tip
function calculateTotalBill(preTipTotal, tipPercentage) {
    // Convert preTipTotal to a number
    preTipTotal = parseFloat(preTipTotal);

    // Calculate the tip amount
    let tipAmount = (preTipTotal * tipPercentage) / 100;

    // Calculate the new total
    let newTotal = preTipTotal + tipAmount;

    // Return the result
    return {
        newTotal: newTotal.toFixed(2),
        tipAmount: tipAmount.toFixed(2)
    };
}
