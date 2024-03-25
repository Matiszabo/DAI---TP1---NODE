let miUrl = null;
let miObjeto = null;
console.clear();
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

miUrl = 'esto-no-es-una-url-valida';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);


function parsearUrl(miUrl) {
    try {
        const parsedUrl = new URL(miUrl);
        const parametros = {};
        
        parsedUrl.searchParams.forEach((valor, clave) => {
            parametros[clave] = valor;
        });

        const objetoRetorno = {
            host: parsedUrl.protocol + '//' + parsedUrl.host,
            pathname: parsedUrl.pathname,
            parametros: parametros
        };

        return objetoRetorno;
    } catch (error) {
        console.error('Se produjo una excepción:', error);
        return {
            host: null,
            pathname: null,
            parametros: {}
        };
    }
}


