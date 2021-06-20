

console.log("corriendo javaScript from cliente side")

const address = document.querySelector("input")
const boton = document.querySelector("#submit")
const message1= document.querySelector("#message-1")
const message2= document.querySelector("#message-2")
const message3= document.querySelector("#message-3")
const message4= document.querySelector("#message-4")
const lugar= document.querySelector("#lugar")
const body= document.querySelector("#bd-color")



boton.addEventListener("click",(e)=>{
    const location =address.value
    console.log(location)
    fetch("http://localhost:3000/getweather?address="+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                message1.textContent=data.error  
            }else{
                lugar.textContent="Clima en : "+address.value
                message1.textContent="El clima es " +data.Clima
                message2.textContent=data.temp
                message3.textContent=data.percibe
                message4.textContent=data.proballuvia
                console.log(data.Clima[0])
                var img=data.Clima[0];
               
                //body.style.backgroundColor="Gray";
                document.getElementById("img").src="/img/"+img+".jpg";

               


                
            }
        })
    })
})