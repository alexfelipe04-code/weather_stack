const request = require('request')



const geocodificacion= (adress,callback)=>{
    const url_geocoding='http://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(adress)+'.json?access_token=pk.eyJ1IjoiYWxleGZlbGlwZTA0IiwiYSI6ImNrcDM2d203NDAydncydXA1MzI4cTNlbzIifQ.aSgU4quYV4GmTz0t9sSujw'
    request({url:url_geocoding, json:true}, (error,{body})=>{
        if(error){
            callback("No es posible contactar al servicio de geocodificacion",undefined)
        }else if(body.features.length === 0){
            callback("No es posible encontrar la ubicacion, intente de nuevo",undefined)
        }else{
                longitude=body.features[0].center[0]
                latitude=body.features[0].center[1]
                callback( undefined,
                    {
                        longitude:longitude,
                        latitude:latitude
                       
                    }
                )

        
        
        }
    })
}


module.exports = geocodificacion