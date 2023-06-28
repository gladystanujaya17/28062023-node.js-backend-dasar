const http = require('http')
const url = require('url')

//url -> callback atau fungsi yang akan dijalankan
//createServer -> node.js memerintahkan untuk membuat server
//200 -> kode permintaan sukses (https://www.hostinger.co.id/tutorial/http-status-code)

//tambahan: 
//https://webhint.io/docs/user-guide/hints/hint-content-type/ -> ada bbrp tipe content-type di javascript selain text/plain

http.createServer(function(request, response) {
    if(request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/plain"}) //response writeHead -> setting header (isinya kode status dan tipe konten yang akan ditampilkan), untuk membuka akses
        response.write('hello world') //response write -> isi konten yang akan diberikan/ ditampilkan ke client
        response.end() //response end -> menutup proses transfer data yang dibuka header
    }
    else if(request.url == '/hubungi-kami') {
        response.writeHead(200, {"Content-Type": "text/plain"})
        response.write('hubungi kami')
        response.end()
    }
    //kalau ada user yang mencari halaman yang aneh-aneh, jangan sampai isinya cuma muter-muter loading aja
    else {
        response.writeHead(200, {"Content-Type": "text/plain"})
        response.write('halaman tidak tersedia')
        response.end()
    }
    //matiin server: control (ctrl) + c
}).listen(3000)

//pertanda kalau server sudah aktif
console.log('server node.js sudah aktif')