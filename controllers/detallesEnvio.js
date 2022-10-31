const { request, response } = require('express')


const getdetallesEnvio = (req=request,res=response) =>
    res.send('GET Endpoint para detalles Envios')

const postdetallesEnvio = (req=request,res=response) =>
    res.send('GET Endpoint para detalles Envios')

const putdetallesEnvio = (req=request,res=response) =>
    res.send('GET Endpoint para detalles Envios')

const deletedetallesEnvio = (req=request,res=response) =>
    res.send('GET Endpoint para detalles Envios')
 
 
    module.exports ={
    GetdetallesEnvio,
    postdetallesEnvio,
    putdetallesEnvio,
    deletedetallesEnvio
}