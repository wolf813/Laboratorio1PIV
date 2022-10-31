const { request, response } = require('express')


const getseguimiento = (req=request,res=response) =>
    res.send('GET Endpoint para seguimiento')

const postseguimiento = (req=request,res=response) =>
    res.send('GET Endpoint para seguimiento')

const putseguimiento = (req=request,res=response) =>
    res.send('GET Endpoint para seguimiento')

const deleteseguimiento = (req=request,res=response) =>
    res.send('GET Endpoint para seguimiento')
 
 
    module.exports ={
    getseguimiento,
    postseguimiento,
    putseguimiento,
    deleteseguimiento
}