import fs from'fs';

fs.writeFile('./archivo.txt', 'Linea 1')

//import fs from 'fs';

//function copiar(archivoEntrada, archivoSalida) {
    //fs.readFile(archivoEntrada, 'utf8', (err, data) => {
        //if (err) {
            //console.error(`Error al leer el archivo de entrada: ${err}`);
            //return;
        //}

        //fs.writeFile(archivoSalida, data, 'utf8', (err) => {
            //if (err) {
                //console.error(`Error al escribir en el archivo de salida: ${err}`);
                //return;
            //}
            //console.log(`El archivo ${archivoEntrada} se ha copiado correctamente como ${archivoSalida}`);
        //});
    //});
//}

//const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
//const ARCHIVO_SALIDA = "./archivo-salida.txt";

//console.clear();
//copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
