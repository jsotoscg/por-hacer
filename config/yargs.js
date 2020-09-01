// const { require } = require("yargs")
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer ...'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Comando crea', {
        descripcion
    })
    .command('editar', 'Comando editar', {
        descripcion,
        completado
    })
    .command('borrar', 'Comando eliminar', {
        descripcion
    })
    .help()
    .argv;

let editar = () => {
    console.log("desde el otro lado");
}

module.exports = {
    argv,
    editar
}





let crear = () => {}
let listar = () => {}
let actualizar = () => {}