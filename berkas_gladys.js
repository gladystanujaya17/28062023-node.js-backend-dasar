// require('./gladys_data')
// console.log(require('./gladys_data'))
//kalau mau panggil file, pastikan diawali dengan ./
//ini buat baca dari file lain

//kalau pakai console.log hasilnya gatau knp ada {}, kalau cuma require aja ga ada {}

const gladysdata = require('./gladys_data') //menyambungkan file

console.log(gladysdata.pekerjaan)
console.log(gladysdata.nama)