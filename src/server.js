const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    const ruta = req.url;

    if (ruta === '/') {
      res.writeHead(200);
      res.end('Bienvenid@s! Gracias por tu visita.');
    } else if (ruta === '/nosotros') {
      res.writeHead(200);
      res.end('Bienvenid@s a saber + de nosotros :)');
    } else if (ruta === '/cursos') {
      res.writeHead(200);
      res.end('Te interesan nuestros cursos. Vení a conocer la oferta!');
    } else if (ruta === '/contacto') {
      res.writeHead(200);
      res.end('Si querés contactarnos, hacelo a este Email: :)');
    } else {
      res.writeHead(404);
      res.end('No se ha encontrado la ruta ingresada.');
    }
  });

  return server;
}

module.exports = createServer;
