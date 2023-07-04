const http = require('http')
const fs = require('fs') //filestream
const port = 3000 //portnya dijadikan variabel

http.createServer(function(request, response){
    switch(request.url) {
        case '/':
            response.writeHead(200, {"Content-Type": "text/html"})
            fs.createReadStream('./view/index.html').pipe(response) //karena ingin membaca file, jadi pake createReadStream
            break;
        case '/hubungi-saya':
            response.writeHead(200, {"Content-Type": "text/html"})
            fs.createReadStream('./view/hubungi-saya.html').pipe(response)
            break;
        default:
            response.writeHead(404, {"Content-Type": "text/html"})
            response.write(
                `<p><b>404:not found</b></p>
                <br>
                <p>TIDAK BISA DIGUNAKAN WEB INI</p
                `
            )
            response.end()
            break;
    }
}).listen(port)

console.log('aplikasi siap, buka://localhost:' + port)