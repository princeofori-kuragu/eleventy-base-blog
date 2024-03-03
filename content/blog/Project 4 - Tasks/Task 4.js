let temperature = prompt("Enter temperature value:");
temperature = parseFloat(temperature);

switch (true) {
    case temperature < 50 && temperature >= 30:
        console.log('Wear a coat');
        break;
    case temperature < 30 && temperature >= 0:
        console.log('Wear a coat and a hat');
        break;
    case temperature < 0:
        console.log('Stay Inside');
        break;
    default:
        console.log('Just vest and pants is fine');
}

