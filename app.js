//require
//require 'fs'. Es una liberia propia de Node, simplemente se define y listo.
//require 'wxpress'. No es una liberia propia de Node (no es nativo). No existe en la documentacion. Es un paquete que se instala.
//require './fs' son archivos nuestros que estan en nuestro proyecto o maquina.
// const fs = require('fs');


// CrearArchivo = (base) => {
//     return new Promise((resolve, reject) => {
//         let data = '';

//         for (let index = 1; index < 11; index++) {
//             data += `${base} * ${index} = ${base * index}\n`; //Acumulo el string dentro de la variable para pasarla en un archivo despues.
//         }

//         //1er paramentro. Ubicacion y/o nombre del archivo
//         //2do parametro. Datos que quiero grabar en el archivo.
//         //3ro parametro. Callback. Si hay algun error se queda guardado en la variable "err"
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => { //el nombre del archivo va a depender de la variable "base"
// if (err) throw err;
// console.log(`The file tabla-${base} has been saved!`); //Podemos poner los nombres por variables literales utilizando el `. Si lo ponemos con '' no funciona.
// });
//     });
// }

//let base = 10;
//const multiplicar = require('./multiplicar/multiplicar.js') // forma de traer la funcion de manera 

// const { CrearArchivo } = require('./multiplicar/multiplicar.js'); //forma destructutada. Const o let + {} forma destructurada. Haciendo esto podemos usar directamente la funcion.
// //console.log(multiplicar); //Vemos lo que tiene ese require
// CrearArchivo(base).then(archivoresultante => console.log(archivoresultante)).catch(error => console.log(error)); //ejecutamos la funcion y mostramos el resultado de la funcion

//let argv = process.argv; //Toma las variables que le estoy pasando por consola haciendo node + nombre de archivo + variable = node app --base=5
// let paramentro = argv[2]; //va a tener el dato de la posicion indicada.
// let base = paramentro.split('=')[1]; // nos quedamos con el valor que se encuentra a la derecha (en la posicion 1).
//let base = paramentro.split('=');

// const { CrearArchivo } = require('./multiplicar/multiplicar.js');
// CrearArchivo(base).then(archivoresultante => console.log(archivoresultante)).catch(error => console.log(error));

//let argv2 = process.argv;



const { CrearArchivo, ListarTabla } = require('./multiplicar/multiplicar.js');
const argv = require('./config/yargs.js').argv; //Con esto obtengo unicamente lo que necesito del archivo inportado.

var colors = require('colors');
var colors = require('colors/safe');

let comando = argv._[0]; //Toma los paramentros que le pasamos a la app ==> node app listar crear ETC. Tomara el primer valor.

switch (comando) {
    case 'Listar':
        ListarTabla(argv.base, argv.limite);
        //console.log('Listar');
        break;
    case 'Crear':
        CrearArchivo(argv.base, argv.limite)
            .then(archivoresultante => console.log('Archivo creado: ', colors.red(archivoresultante))) //Otra forma de ponerle color a un mensaje ya que el nombre del mismo pueder un color y se confunde.
            .catch(error => console.log(error));
        break;
    default:
        console.log("Comando no reconocido");
}

//Ejecutando el comando "node app  Listar" va a dar error ya que "base" es obligatoria.
// app Listar
// Imprime en consola la tabla de multiplicar
// Options:
//   --help     Show help                                                 [boolean]
//   --version  Show version number                                       [boolean]
//   --base                                                              [required]
// Missing required argument: base


// node app  Listar --help
// app Listar

// Imprime en consola la tabla de multiplicar

// Options:
//   --version     Show version number                                    [boolean]
//   --help        Show help                                              [boolean]
//   --base, -b                                                          [required]
//   --limite, -l                                                     [default: 10]

//console.log(argv.base);
//console.log('Limite:', argv.limite);