const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Hasta donde quiero que llegue la tabla'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla por consola'
                })
                .check( (argv, options) => {
                    if (isNaN(argv.b) && isNaN(argv.h)){
                        throw 'La base o el hasta donde  tiene que ser un numero';
                    };
                    return true;
                })
                .argv;


// console.log(argv)

// console.log(process.argv);

// console.log('base: yargs', argv.base);

// const [ , , arg3 = 'base = 5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

module.exports = argv;