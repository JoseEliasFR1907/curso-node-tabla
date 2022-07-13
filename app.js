const { crearArchivo } = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.h, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
