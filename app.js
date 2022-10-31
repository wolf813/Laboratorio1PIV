require('dotenv').config()

const Server = require ('./models/server.js')

const server = new Server();
server.listen();
/*app.get('/',function(req, res){
    res.send('Hello World')
})


app.listen(process.env.port, function(){
console.log("El puerto esta corriendo en el puerto TCP" + process.env.PORT)
}
)
*/