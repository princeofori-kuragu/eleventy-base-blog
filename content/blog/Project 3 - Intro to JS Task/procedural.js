  // Function usage
preTipTotal = prompt("Enter the value of the fare to the nearest penny:");
tipPercentage = 15;
  
  let result = calculateTotalBill(preTipTotal, tipPercentage);
  
  // Output the result
  document.write("Your total bill, with a " + tipPercentage + "% tip, is £" + result.newTotal + ". Tip amount is £" + result.tipAmount);
  