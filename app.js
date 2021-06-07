const express = require("express");


//permite crear el servidor web
//crear un objeto que represente  mi app web
//mediante servidor
const  app = express();

//definir el puerto de escucha del servidor
const port = 3000;


//app.set("view engine","ejs")
app.use(express.static(__dirname+"/views"))

app.use(express.static("public"))





app.get("/index", function(request,response){
    response.render("Weather_App")
})

app.get("/about", function(request,response){
    response.render("About")

})

app.get("/help", function(request,response){
    response.render("Help")

})

app.get("/weather,", function(request,response){
    response.render("Weather_Forecast")

})


app.listen(port,function(){
    console.log("listenning at http://localhost:3000/")
})