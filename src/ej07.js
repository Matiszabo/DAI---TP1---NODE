import { getCurrency } from 'currency-map-country';

let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.clear();
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


function obtenerMoneda(codigoPais) {
    console.log('codigoPais', codigoPais);
    const pais = getCurrency (codigoPais);
    console.log('pais', pais);
    return pais ? pais.name : null;
}