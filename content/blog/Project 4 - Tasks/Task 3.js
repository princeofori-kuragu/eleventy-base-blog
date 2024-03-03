function fullName (firstName, lastName, name) {
    firstName = prompt("Enter a first name: ");
    lastName = prompt("Enter a last name: ");
    name = 'The full name entered is ' + firstName + ' ' + lastName;
    return name;
}

let author = fullName();
console.log(author);