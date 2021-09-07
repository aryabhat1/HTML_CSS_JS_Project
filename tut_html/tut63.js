// console.log("Hello world!");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Selectors</title>
      <style>
          #readElement{
              color: red;
          }
      </style>
  </head>
  <body>
      <h3>CSS Selectors</h3>
      <p>This is a simple example to learn CSS Selector.</p>
      <div>
  
          <p id=readElement>This is a simple example to learn CSS Selector.</p>
      </div>
      <p>This is a simple example to learn CSS Selector.</p>
  
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});