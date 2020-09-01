// const argv = require('yargs').argv;
const colors = require('colors');
const argv = require('./config/yargs');
const argvYargs = argv.argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv.argv._[0]

switch (comando) {
    case 'crear':
        console.log('Crear');
        let tarea = porHacer.crear(argvYargs.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        // console.log(listado);

        console.log('======== POR HACER =========='.green);
        for (const tarea of listado) {
            console.log(tarea.descripcion);
            console.log(tarea.completado);
        }
        console.log('============================='.green);

        break;

    case 'editar':
        console.log('Editar');
        porHacer.actualizar(argvYargs.descripcion, argvYargs.completado);
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argvYargs.descripcion);
        console.log(borrar);
        break;

    default:
        console.log('Comando NO reconocido');
        break;

}