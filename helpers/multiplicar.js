const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base, listar, hasta ) => {
    try {
        let salida = '';
        let consola = ''; 
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } X ${ i } = ${ base *i }\n`;
            consola += `${ base } ${ 'X'.green } ${ i } = ${ base *i }\n`;
         } 
            if( listar ){
                 console.log(consola)
            }
           const archivo = fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
           return `tabla-${ base }.txt`;      
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}