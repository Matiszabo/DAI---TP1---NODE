import pkg from 'currency-map-country';

function obtenerMoneda(codigoPais) {
    const pais = pkg.getCurrencyByCountryCode(codigoPais);
    return pais ? pais.name : null;
}

let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.clear();
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
