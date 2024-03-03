function getUserChoice() {
    // Prompt the user for their choice of drink
    var drink = prompt("Choose a drink: cola, lemonade, or orangeade").toLowerCase();

    // Prompt the user for the size of the drink
    var size = prompt("Choose a size: small, medium, or large").toLowerCase();

    // Validate the user input
    if (
        (drink === "cola" || drink === "lemonade" || drink === "orangeade") &&
        (size === "small" || size === "medium" || size === "large")
    ) {
        // Use a switch statement for different cases
        switch (drink) {
            case "cola":
                console.log("You have chosen a " + size + " cola.");
                break;
            case "lemonade":
                console.log("You have chosen a " + size + " lemonade.");
                break;
            case "orangeade":
                console.log("You have chosen a " + size + " orangeade.");
                break;
            default:
                console.log("Invalid drink choice.");
        }
    } else {
        // Handle invalid input
        console.log("Invalid choice. Please choose a valid drink and size.");
    }
}

// Call the function to get user input and print confirmation
getUserChoice();