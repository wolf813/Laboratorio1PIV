const { request, response } = require('express');
const { guardarDB, leerDB } = require('../helpers/gestorDB');
const {ListadoEnvios } = require ('../models/envios');
const {guardarDB, leerDB} =require('../helpers/gestorDB');
const { restart } = require('nodemon');

const getenvio = (req=request,res=response) =>{
    let lista =new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearenvio(req.body)
    guardarDB(lista.listadoArr,'envios')
    res.send('Registro Creado')
}
const postenvio = (req=request,res=response) =>
    res.send('GET Endpoint para Envios')

const putenvio = (req=request,res=response) =>
    res.send('GET Endpoint para Envios')

const deleteenvio = (req=request,res=response) =>
    res.send('GET Endpoint para Envios')
 
 
    module.exports ={
    getenvio,
    postenvio,
    putenvio,
    deleteenvio
}