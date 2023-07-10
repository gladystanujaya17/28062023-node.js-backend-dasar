//MENAMBAHKAN DATA (tapi ini hasilnya masih DI CONSOLE YA GES YA BKN DI WEBSITE)

const http = require('http')
const url = require('url')
const mysql = require('mysql')
const port = 3000

const koneksidb = mysql.createConnection({
    //ada 4 objek wajib, yaitu:
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajar_database', //sesuaikan dengan XAMPP
})
koneksidb.connect()


//menjalankan scriptnya setelah koneksi
//update data (yg diganti cuma query aja)

koneksidb.query(`
    DELETE FROM tabel_satu WHERE id = 9`, 
    function(error, hasil) {
        if (error) throw error //kalau ada error, tampilin error-nya
        
        if (hasil.affectedRows > 0) {
            console.log('Berhasil hapus ' + hasil.affectedRows + ' baris data ke MySQL')
        }
    })