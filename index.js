const http = require('http');

// la request es lo que se me esta solicitando al web server y respose es lo que mi servidores responderá al cliente
http
  .createServer((request, response) => {
    response.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    response.writeHead(200, { 'Content-Type': 'application/csv' });

    response.write('id,nombre\n');
    response.write('1, Juan\n');
    response.write('2, manuel\n');
    response.write('3, palacios\n');
    response.write('4, javier\n');

    response.end();
  })
  .listen(8080);
console.log('escuchando en el puerto', 8080);
