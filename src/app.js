const express = require("express");
const hbs =require("hbs")
const path =require("path")
const geocodificacion = require('./utils/geocodificacion')
const temperature= require('./utils/pronostico')


//permite crear el servidor web
//crear un objeto que represente  mi app web
//mediante servidor
const  app = express();

//definir el puerto de escucha del servidor
const port = 3000;

app.set("view engine","hbs")


app.use(express.static("public"))

hbs.registerPartials(path.join(__dirname,"../",'/views/partials'));





app.get("/", function(request,response){
    response.render("index",{
        title:"weather App",
        name:"Felipe Alejandro Herrera Guizar"
    })
})

app.get("/getweather", function(request,response){
    if(!request.query.address){
       return response.send({
            error:  " Proporciona una localizacion "
        })

    }
    
    geocodificacion(request.query.address,(error,data)=>{
        if (error){
            console.log("Error",error)
        }
        temperature(data.latitude,data.longitude,(error,data)=>{
    
            if (error){
                console.log("Error",error)
            }else{
           
            console.log("Clima",data)
        
                        response.send({
                        Clima:data.clima,
                        temp:data.temp,
                        percibe:data.percibe,
                        proballuvia:data.proballuvia
            })
        
                }
        
        })
    
    })
    




})





app.get("/weather", function(request,response){
    response.render("weather",{
        forecast:"nublado",
        location:"colima"
    })

})


app.get("/about", function(request,response){
    response.render("about",{
        forecast:"nublado",
        location:"colima"
    })

})

app.get("/help", function(request,response){
    response.render("help",{
        ayuda:"en que puedo ayudar ",
        instruciones :"paso 1 da click"
    })

})



app.get("*", function(request,response){
    response.render("404",{
        title:"404",
        name: "hola mundo !",
        errorMessage:"page not found!"

    })

})



app.listen(port,function(){
    console.log("listenning at http://localhost:3000/")
})