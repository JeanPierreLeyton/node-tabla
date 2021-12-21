const { crearArchivo } = require('./helpers/multiplicar');
const  argv  = require('./config/yargs');
const colors = require('colors');

console.clear();
console.log( argv );


 /*fs.writeFile('tabla-5.txt', salida, (err) => {
    if (err) throw err;
    console.log('Tabla del 5 creado!');
  });*/

  crearArchivo( argv.b, argv.l, argv.h)
  .then ( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
  .catch ( err => console.log(err))