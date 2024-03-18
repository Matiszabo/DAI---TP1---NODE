// Importar constantes y funciones desde el módulo matematica.js
import { PI, sumar, multiplicar, strings } from './src/modules/matematica.js';

// Ejemplo de uso
let numero1 = 5;
let numero2 = 10;
let total;

console.clear();
console.log(`La constante PI vale '${PI}'`);

total = sumar(numero1, numero2);
console.log(`sumar(${numero1},${numero2}) = ${total}`);

let resultadoMultiplicacion = multiplicar(numero1, numero2);
console.log(`multiplicar(${numero1},${numero2}) = ${resultadoMultiplicacion}`);

console.log("Array de strings:", strings);
