let miUrl = null; 
let miObjeto = null;

miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo'; 
console.clear();
miObjeto = parsearUrl(miUrl); 
console.log(miObjeto); 

function parsearUrl(miUrl) { 
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
}
