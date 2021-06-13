#codecademy kelvin conversion.js

// create a constant variable kelvin with a temperature
const kelvin = 0;
// convert kelvin to celsius
let celsius = (kelvin - 273);

// round the above fahrenheit 
let fahrenheit = ((celsius * (9/5)) + 32);
/*console.log(celsius * (9/5));
console.log(fahrenheit);*/

// round fahrenheit down
fahrenheit = Math.floor(fahrenheit);
console.log( 'The temperature is '+ fahrenheit + ' degrees fahrenheit');

let newton = (celsius * (33/100));
console.log( 'The temperature is '+ Math.floor(newton) + ' degrees newton')
