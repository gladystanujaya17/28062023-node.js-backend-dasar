//MENGAMBIL DATA DARI DATABASE PART 2

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

http.createServer(function(request, response) {
    switch(request.url) {
        case '/':
            //jenis konten yang akan tampil di halaman website
            response.writeHead(200, {"Content-Type": "text/plain"})

            //mengambil data dari mysql
            koneksidb.query('SELECT * FROM tabel_satu', function(error, result) {
                if (error) throw error //kalau ada error, tampilin error-nya
            
                //membuat sebuah variabel kosong
                //tujuan: menampung data yang inign ditampilkan dari parameter result
                //data masih berupa data mentah (JSON)
                let datakaryawan = ''

                //looping untuk mengambil objek yang diperlukan saja
                for (let i = 0; i < result.length; i++) {
                    //memasukkan satuan objek ke dalam variabel datakaryawan yang awalnya kosong
                    datakaryawan += result[i].id + ': ' + result[i].nama + '\n'
                }

                //mengirim variabel datakaryawan yang sudah terisi ke dalam tampilan atau body website
                response.write(datakaryawan)

                //respon selesai
                response.end()
            })
            break;

        default:
            response.writeHead(404, {"Content-Type": "text/html"})
            response.write('404: not found')
            response.end()
            break;
    }
}).listen(port)