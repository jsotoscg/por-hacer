const fs = require('fs');
const colors = require('colors');



let listadoPorHacer = [];

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    }
    cargarInfoJSon();
    listadoPorHacer.push(porHacer);
    guardarDB();

    return listadoPorHacer;
}

const cargarInfoJSon = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            throw new Error('Error al escribir el archivo JSon')
        } else {

        }
    });
}

const getListado = () => {
    cargarInfoJSon();

    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarInfoJSon();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();

        return true;
    } else {
        throw new Error('No existe registro con la descripción dada')
    }
}

const borrar = (descripcion) => {
    cargarInfoJSon();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // almacenamos en un temporal las lista de tareas, excluyendo para que que conincida con el parámetro de búsqueda
    // let listadoPorHacerResult = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}