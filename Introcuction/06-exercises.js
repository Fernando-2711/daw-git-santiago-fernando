// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function retryOperation(maxTries){
    let attempts = 0
    try{
        console.log(`Intemto ${attempts +1}`)
    }
    catch(error){
        console.error("Error: ", error.message)
        attempts ++
        if (attempts == maxTries){
            console.log("Numero de reintentos compeltos")
        }
    }
}