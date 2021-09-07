const http = require('http')
const fs = require('fs')

// require('http').createServer().listen(3000);

const fileContent = fs.readFileSync('tut60.html')

const server = http.createServer((req, res) => {
    // (property) 'Content-type': string

    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(fileContent)
})

server.listen(3000, '127.0.0.1', () => {
    console.log("Listening on port 3000")
})