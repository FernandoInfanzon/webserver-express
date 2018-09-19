const http = require('http');

// para escuchar peticiones http primero debemos crear el servidor

http.createServer((req, res) => {

    res.write('Hola Mundo');
    res.end();

}).listen(8080);

console.log('Escuchando el puerto 8080');