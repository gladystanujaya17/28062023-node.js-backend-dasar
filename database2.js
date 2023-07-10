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
        
        case '/insert':
            response.writeHead(200, {"Content-Type": "text/plain"})
            koneksidb.query(
                `INSERT INTO tabel_satu(nama, alamat)
                VALUES('Vale', 'Land of Dawn'), ('Ixia', 'PIK'), ('Nana', 'Kebon Jeruk');`, 
                function (error, hasil) {
                    if (error) throw error

                    if(hasil.affectedRows > 0) {
                        response.write('Berhasil memasukkan ' + hasil.affectedRows + ' baris data ke MySQL')
                    }
                    response.end()
                }
            )
            //jgn lupa ya krn nama dan alamat itu string, jadi pakai tanda petik ('')
            break;

        case '/update':
            response.writeHead(200, {"Content-Type": "text/plain"})
            koneksidb.query(
                `UPDATE tabel_satu SET nama = 'Valentina' WHERE id = 7;`, 
                function(error, hasil) {
                    if (error) throw error

                    if (hasil.affectedRows > 0) {
                        response.write('Berhasil update ' + hasil.affectedRows + ' baris data')
                    }
                    response.end()
                })
            break;

        case '/delete':
            response.writeHead(200, {"Content-Type": "text/plain"})
            koneksidb.query(
                `DELETE FROM tabel_satu WHERE id = 8;`,
                function(error, hasil) {
                    if (error) throw error

                    if (hasil.affectedRows > 0) {
                        response.write('Berhasil menghapus ' + hasil.affectedRows + ' dari MySQL')
                    } else {
                        response.write('anda sudah hapus data tersebut')
                    } //ini kalau udah dihapus datanya bakal ada pesan yg 'anda sudah hapus data tersebut'
                response.end()
                }
            )

            break;

        default:
            response.writeHead(404, {"Content-Type": "text/html"})
            response.write('404: not found')
            response.end()
            break;
    }
}).listen(port)
//XAMPP tidak bisa untuk menjalankan node.js