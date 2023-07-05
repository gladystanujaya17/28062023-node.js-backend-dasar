//MENGAMBIL DATA DARI DATABASE

const http = require('http')
const url = require('url')
const mysql = require('mysql')
const port = 3000

//mysql bukan modul bawaan node.js, jadi bakal download dulu dari npm
//dependencies -> ketergantungan

//melakukan koneksi ke database mysql terlebih dahulu
const koneksidb = mysql.createConnection({
    //ada 4 objek wajib, yaitu:
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajar_database', //sesuaikan dengan XAMPP
})
koneksidb.connect()
//kalau terminalnya tidak ada hasilnya berarti lancar semua

//menampilkan hasil data ke console atau terminal
//[ini untuk percobaan aja]
// CARA 1
koneksidb.query('SELECT * FROM tabel_satu', function(error, result, field) {
    if (error) throw error //kalau ada error, tampilin error-nya
    console.log(result)
    console.log('=========')
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].id + ': ' + result[i].nama)
    }
})

// CARA 2 (ini belum kelar ygy masih ada yg error)
// function get_dataTabel(error, result) {
//     if (error) throw error
//     // console.log(hasil)
//     console.log('==========')
//     for (let i = 0; i < result.length; i++) {
//         console.log(result[i].id + ': ' + result[i].nama)
//     }
// }

//ini entaran dulu ygy ehehew
// http.createServer(function(request, response){
//     switch(request.url) {
//         case '/':
//             let hasil = ''
//             response.writeHead(200, {"Content-Type": "text/plain"})
//             koneksidb.query('SELECT * FROM tabel_satu', function(error, result, field) {
//                 if (error) throw error //kalau ada error, tampilin error-nya
//                 hasil
//                 // console.log(result)
//                 // console.log('=========')
//                 let datakaryawan = ''
//                 for (let i = 0; i < result.length; i++) {
//                     result[i].id + ': ' + result[i].nama + '\n'
//                 }
//                 response.write(datakaryawan)
//                 response.end()
//             })
//             break;

//         default:
//             response.writeHead(404, {"Content-Type": "text/html"})
//             response.write(
//                 `<p><b>404:not found</b></p>
//                 <br>
//                 <p>TIDAK BISA DIGUNAKAN WEB INI</p
//                 `
//             )
//             response.end()
//             break;
//     }
// }).listen(port)