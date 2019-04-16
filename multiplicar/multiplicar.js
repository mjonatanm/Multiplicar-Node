//require
//require 'fs'. Es una liberia propia de Node, simplemente se define y listo.
//require 'wxpress'. No es una liberia propia de Node (no es nativo). No existe en la documentacion. Es un paquete que se instala.
//require './fs' son archivos nuestros que estan en nuestro proyecto o maquina.

const fs = require('fs');
var colors = require('colors');

let ListarTabla = (base, limite = 10) => {

    let data = '';

    for (let index = 1; index <= limite; index++) {
        console.log(`${ base } * ${ index } = ${ base * index }`.green)
    }
}

let CrearArchivo = (base, limite = 10) => { //Otra forma de exportar una funcion, es haciendo module.exports.CrearArchivo
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("No es un numero");
            return;
        }

        let data = '';

        for (let index = 1; index < limite; index++) {
            data += `${ base } * ${ index } = ${ base * index }\n `;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla - ${ base }.txt `);
        });
    });
}

module.exports = {
    CrearArchivo,
    ListarTabla
}