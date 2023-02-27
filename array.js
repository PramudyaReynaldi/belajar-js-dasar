// ======================================= Array ===========================================



// * Contoh dasar :

// const myNames = ["Agung", "Hendra", "Udin", "Aldi"]; 
// console.log(myNames); // Output: 'Agung', 'Hendra', 'Udin', 'Aldi'



















// * Mengakses nilai yang ingin di akses pada array :

// const menuMakanan = ["Ketoprak", "Semur jengkol", "Ayam Geprek", "Sayur Asem"];

// console.log(menuMakanan[0]); // Output = Ketoprak
// console.log(menuMakanan[2]); // Output = Ayam Geprek








// * Mengubah isi dari array

// let bahasaPemrograman = ["JavaScript", "C++", "Java", "Phyton"];
// bahasaPemrograman[1] = "Kotlin" // Mengubah isi index ke 1 C++ jadi Kotlin  
// console.log(bahasaPemrograman); // Output: Kotlin










// * Jika kita mengakses nilai array lebih dari index-nya, maka hasilnya akan undefined. :

// const coffeeStock = ["Arabica", "Robusta", "Liberica"];

// console.log(coffeeStock[3]); // Output = undefined





















// ============================== Array Methods ==========================================


// * push() => menambahkan data di akhir array :

// const namaMahasiswa = ["Udin", "ALdi", "Ucok", "Usop"];

// namaMahasiswa.push("Shinta"); 
// console.log(namaMahasiswa); // Akan menambahkan satu index yang bernama "Shinta"



// * pop() => Untuk mengeluarkan index terakhir dari array, kita bisa

// const daftarAnakBadung = ["Ucok", "Kupret", "Kacrut", "Kucay"];

// daftarAnakBadung.pop();
// console.log(daftarAnakBadung); // Akan menghilangkan index terakhir yaitu "Kucay"



// * shift() => Untuk mengeluarkan elemen pertama dari array

// const namaSiswa = ["Dafa", "Bima", "Hafidz"];

// namaSiswa.shift();
// console.log(namaSiswa); // Akan mengeluarkan elemen pertama dari array yaitu "Dafa"



// * unshift() => Untuk menambahkan elemen di awal array 

// const daftarHadir = ["Shinta", "Dela", "Puspa", "Sukri"];

// daftarHadir.unshift("Kucrut");
// console.log(daftarHadir);



// * splice() => Untuk menghapus data pada index tertentu

// const myArray = ["push", "pop", "unshift", "shift"];

// myArray.splice(2, 1);
// console.log (myArray);

// * filter() => Untuk menyaring data dari array

// const number = [1, 2, 3, 4, 5, 6];
// // Mengambil data yang hanya habis dibagi dua saja dengan arrow function
// const filterArray = number.filter((item) => {
//     return item % 2 === 0
// });
// console.log(filterArray); // Output: 2, 4, 6

// * Contoh kedua
// const angka = [21, 32, 43, 54, 65, 76, 87];
// // Mengambil data yang tidak habis dibagi dua saja
// const filterGanjil = angka.filter((item) => {
//     return item % 2 != 0
// });
// console.log(filterGanjil); // Output: 21, 43, 65, 87



// * includes() => Untuk mengecek apakah sebuah data ada didalam array atau tidak.
// * Biasanya digunakan untuk melakukan pencarian dan memastikan data sudah ada didalam array.

// const buah = ["Apel", "Mangga", "Jeruk", "Melon"];
// const adaMangga = buah.includes("Mangga"); // Mengecek apakah ada mangga di dalam array buah
// console.log(adaMangga); // Output: true
// const adaSayuran = buah.includes("Bayam"); // Mengecek apakah ada Bayam di dalam array buah
// console.log(adaSayuran); // Output: false


// * short() => Untuk mengurutkan data pada array

// const alphabet = ["a", "f", "z", "e", "r", "g"];
// const angka = [3, 1, 2, 6, 8, 5];

// console.log(alphabet.sort());
// console.log(angka.sort());



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
// const thisArray = [0, 1, 2, 3, 4];

// delete thisArray [1]; // Menghapus index [1]
// console.log(thisArray); // Output:  0, <1 empty item>, 2, 3, 4 