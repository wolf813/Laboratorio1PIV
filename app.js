require('dotenv').config()
const express = require ('express')
const app = express()

app.get('/',function(req, res){
    res.send('Hello World')
})


app.listen(process.env.port, function(){
console.log("El puerto esta corriendo en el puerto TCP" + process.env.PORT)
}
)