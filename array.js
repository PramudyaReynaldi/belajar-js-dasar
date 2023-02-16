// ======================================= Array ===========================================



// * Contoh dasar :

// const myNames = ["Agung", "Hendra", "Udin", "Aldi"];

// console.log(myNames);





















// * Mengakses nilai yang ingin di akses pada array :

// const menuMakanan = ["Ketoprak", "Semur jengkol", "Ayam Geprek", "Sayur Asem"];

// console.log(menuMakanan[0]); // Output = Ketoprak
// console.log(menuMakanan[2]); // Output = Ayam Geprek























// * Jika kita mengakses nilai array lebih dari index-nya, maka hasilnya akan undefined. :

// const coffeeStock = ["Arabica", "Robusta", "Liberica"];

// console.log(coffeeStock[3]); // Output = undefined























// ============================== Array Methods ==========================================


// * Untuk menambahkan index ke dalam array, kita bisa menggunakan 
// * method push(). Fungsi push ini akan menambahkan data di akhir array :

// const namaMahasiswa = ["Udin", "ALdi", "Ucok", "Usop"];

// namaMahasiswa.push("Shinta"); 
// console.log(namaMahasiswa); // Akan menambahkan satu index yang bernama "Shinta"



// * Untuk mengeluarkan index terakhir dari array, kita bisa 
// * gunakan method pop() :

// const daftarAnakBadung = ["Ucok", "Kupret", "Kacrut", "Kucay"];

// daftarAnakBadung.pop();
// console.log(daftarAnakBadung); // Akan menghilangkan index terakhir yaitu "Kucay"



// * Method shift() digunakan untuk mengeluarkan elemen pertama dari array :

// const namaSiswa = ["Dafa", "Bima", "Hafidz"];

// namaSiswa.shift();
// console.log(namaSiswa); // Akan mengeluarkan elemen pertama dari array yaitu "Dafa"



// * unshift() digunakan untuk menambahkan elemen di awal array :
// const daftarHadir = ["Shinta", "Dela", "Puspa", "Sukri"];

// daftarHadir.unshift("Kucrut");
// console.log(daftarHadir);



/**
 * * Untuk menghapus index, gunakan metode splice() seperti ini :  
 */
// const myArray = ["push", "pop", "unshift", "shift"];

// myArray.splice(2, 1);
// console.log (myArray);

/**
 * * Array dengan for of :
 */
// const daftarMenu = ["Makanan", "Minuman", "Cemilan"]

// for (const menu of daftarMenu) {
//     console.log(menu);
// }

/**
 * * Array dengan forEach :
 */
// const namaHewan = ["Kucing", "Anjing", "Babi"];

// namaHewan.forEach ((hewan) => {
//     console.log(hewan);
// });



/**
 * * Lalu bagaimana jika kita ingin menghapus data dari array? Sama seperti object, kita 
 * * bisa menggunakan keyword delete :
 */
const thisArray = [0, 1, 2, 3, 4];

delete thisArray [1]; // Menghapus index [1]
console.log(thisArray); // Output:  0, <1 empty item>, 2, 3, 4 