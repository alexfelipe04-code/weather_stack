const request = require('request')

const temperature= (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=8940f951e4de0f52779dcca691f4fcb9&query='+latitude+','+longitude
    //console.log(url)
    request({url:url, json:true}, (error,{body})=>{
        if(error){
            callback("No es posible contactar al servicio de geocodificacion",undefined)
        }else if(body.current.length === 0){
            callback("No es posible encontrar la ubicacion, intente de nuevo",undefined)
        }else{
                clima=body.current.weather_descriptions
                temp="La temperatura es de  "+body.current.temperature+" grados"
                percibe="Sin embargo, se percibe de "+body.current.feelslike+ " grados"
                proballuvia="La probabilidad de lluvia es del  "+body.current.precip + "%"
                callback( undefined,
                    {
                        
                        clima:clima,
                        temp:temp,
                        percibe:percibe,
                        proballuvia:proballuvia
                    }
                )

        
        
        }
    })
}




module.exports = temperature