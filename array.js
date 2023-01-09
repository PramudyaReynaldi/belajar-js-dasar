const myArray = ["Agung", "Hendra", "Udin", "Aldi"];

/**
 * * Menampilkan output
 */
// console.log(myArray);

/**
 * * Mengakses nilai yang ingin di akses pada array :
 */
// console.log(myArray[0]);

/**
 * * Jika kita mengakses nilai array lebih dari index-nya, maka hasilnya akan undefined. :
 */
// console.log(myArray[5]);

/**
 * * Untuk menambahkan data ke dalam array, kita bisa menggunakan 
 * * metode push(). Fungsi push ini akan menambahkan data di akhir array :
 */
// myArray.push("Shinta");
// console.log(myArray);

/**
 * * Untuk mengeluarkan data atau elemen terakhir dari array, kita bisa 
 * * gunakan metode pop() :
 */
// myArray.pop();
// console.log(myArray);

/**
 * * Metode shift() digunakan untuk mengeluarkan elemen pertama dari array :
 * * myArray.shift();
 */
// console.log(myArray);

/**
 * * unshift() digunakan untuk menambahkan elemen di awal array :
 * * myArray.unshift("Dika");
 */
// console.log(myArray);

/**
 * * Lalu bagaimana jika kita ingin menghapus data dari array? Sama seperti object, kita 
 * * bisa menggunakan keyword delete :
 */
// delete myArray [1];
// console.log(myArray);

/**
 * * Untuk menghapus elemen, gunakan metode splice() seperti ini :  
 */
// myArray.splice(2, 1);
// console.log (myArray);

/**
 * * Array dengan for of :
 */
// for (const arr of myArray) {
//     console.log(arr);
// }

/**
 * * Array dengan forEach :
 */
// myArray.forEach ((arr) => {
//     console.log(arr);

// })