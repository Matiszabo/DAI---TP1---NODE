import { PI, sumar, multiplicar, strings } from './modules/matematica.js'

let num1 = 5;
let num2 = 10;
let total;

console.clear();
console.log(`La constante PI vale '${PI}'`);

total = sumar(num1, num2);
console.log(`La suma entre (${num1} y ${num2}) tiene de resultado ${total}`);

let resultadoMultiplicacion = multiplicar(num1, num2);
console.log(`La multiplicación entre (${num1} y ${num2}) tiene de resultado ${resultadoMultiplicacion}`);
 
console.log("Array de strings:", strings); 
