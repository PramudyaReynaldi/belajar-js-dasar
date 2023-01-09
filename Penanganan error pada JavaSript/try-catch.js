/*
    * Untuk menangani eror pada JavaScript, gunakan try dan catch. 
    * Penulisan kode try-catch untuk menangani eror adalah seperti ini :
*/ 
try {
    // code

} catch(error) {
    // error handling

}

// * Contoh :
// try {
//     console.log("Awal blok try");
//     console.log("Akhir blok try");
// }
// catch(error) {
//     console.log("Jika tidak terjadi error, maka kode ini diabaikan");

// } // bilamana tidak ada error, maka tidak terjadi apa-apa.






// * Contoh :
// try {
//     console.log("Awal blok try");
//     meletakkanErrorDiNomor2;
//     console.log("Akhir blok try");
// }
// catch {
//     console.log("Terjadi error!");

// }




// * Mengubah kode dan menampilkan properti
// try {
//     console.log("Awal blok try");
//     errorCode;
//     console.log("Akhir blok try");
// }
// catch(error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }






// * try-catch-finally
// * Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
}
catch (error) {
    console.log("Baris ini diabaikan");
}
finally {
    console.log("Akan tetap dieksekusi");

} // Tetap mengeksekusi walaupun tidak ada yang error.

