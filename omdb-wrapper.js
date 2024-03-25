import axios from "axios";

const APIKEY = "tuAPIKEY"; // Inserta tu APIKEY aquí

const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };
    try {
        const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
        const apiResponse = await axios.get(requestString);
        returnObject.respuesta = true;
        returnObject.cantidadTotal = apiResponse.data.totalResults;
        returnObject.datos = apiResponse.data.Search;
    } catch (error) {
        console.error("Error en OMDBSearchByPage:", error);
    }
    return returnObject;
};

const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };
    try {
        const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
        const apiResponse = await axios.get(requestString);
        returnObject.respuesta = true;
        returnObject.cantidadTotal = apiResponse.data.totalResults;
        returnObject.datos = apiResponse.data.Search;
    } catch (error) {
        console.error("Error en OMDBSearchComplete:", error);
    }
    return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };
    try {
        const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
        const apiResponse = await axios.get(requestString);
        returnObject.respuesta = true;
        returnObject.datos = apiResponse.data;
    } catch (error) {
        console.error("Error en OMDBGetByImdbID:", error);
    }
    return returnObject;
};

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };
