0
 import axios from "axios"; 
 constAPIKEY ="f9531a82";
 const OMDBSearchByPage =async(searchText, page=1 )=>{ 
    let returnObject={ 
        respuesta :false,
         cantidadTotal: 0,
          datos : {} 
        };
     const requestString =`https://www.omdbapi.com/?apikey=f9531a82&s=$(SearchTest)&page=$(page)`
     try{
    const apiResponse =await axios.get(requestString);
    returnObject.datos = apiResponse.data.totalResults
    returnObject.respuesta = apiResponse.data.Response
     }
     catch(error){
        console.log(error)
        returnObject.respuesta = false
     }
     return returnObject
}
  const OMDBSearchComplete= async (searchText) =>{
     let returnObject= {  
         respuesta :false,
          cantidadTotal:0, 
          datos : {} 
        }; 
        const requestString =`https://www.omdbapi.com/?apikey=f9531a82&s=$(SearchTest)`

        try{
            const apiResponse =await axios.get(requestString);
            returnObject.datos = apiResponse.data.totalResults
            returnObject.respuesta = apiResponse.data.Response
             }
             catch(error){
                console.log(error)
                returnObject.respuesta = false
             }
             return returnObject

  return returnObject;
 };

  const OMDBGetByImdbID=async(imdbID)=>{ 
    letreturnObject={
         respuesta :false,
          cantidadTotal:0,
           datos :{} 
        }; 
  //No seas vago,acá hay que hacer el cuerpo de la función!!! 
  return returnObject;
 }; 
 
 //Exporto todo lo que yo quiero exponer del módulo: 
  export{OMDBSearchByPage,OMDBSearchComplete,OMDBGetByImdbID};