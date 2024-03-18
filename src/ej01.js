let textoEntrada01="Escuela"; 
let textoEntrada02="ORT"; 
let textoSalida; 
textoSalida=concatInvert(textoEntrada01,textoEntrada02);
console.clear(); 
console.log(`TextosdeEntrada:"${textoEntrada01}"y"${textoEntrada02}"`); 
console.log(`TextodeSalida:"${textoSalida}"`);

function concatInvert(textoEntrada01, textoEntrada02) {
    let concat = textoEntrada01 + textoEntrada02;
    let textoSalida = concat.split('').reverse().join('');
    return textoSalida;
}
