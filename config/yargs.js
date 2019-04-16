const opciones = {
    base: { //Defino las entradas que va a tener el comando LISTAR
        demand: true, //Obligo al usuario a que esa entrada sea obligatoria.
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('Listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('Crear', 'Genera un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv; //Cuando esta con '' es un paquete.

module.exports = {
    argv
}