// function greeting () {
//     console.log("Good morning");
// }

// greeting();

/**
 * * Kita juga bisa menambahkan lebih dari satu 
 * * parameter dengan memberikan tanda koma antar variabel parameternya. 
 * * Contohnya fungsi greeting akan kita tambahkan 
 * * parameter name dan language seperti ini:
*/
// function myParamFunction(param1, param2) {
//     console.log("param1", param1);
//     console.log("param2", param2);
// }
// myParamFunction("parameter pertama", "parameter kedua");

//* Contoh kedua :
// function greeting (name, language) {
//     if (language === "English") {
//         console.log(`Good morning ${name}!`);
//     }
//     else if (language === "French") {
//         console.log(`Bonjour ${name}!`);
//     }
//     else if (language === "Indonesia") {
//         console.log(`Selamat pagi ${name}!`);
//     }
// }

// greeting("Aldi", "English");

/**
 * * Membuat function beserta parameter dan argumen :
*/
// function tambah (a, b){ //? a dan b adalah parameter
//     return a + b;
// }

// console.log(tambah(2,3)); //? angka 2 dan 3 ini adalah argumen

/**
 * * Bisa juga dengan cara menambahkan variabel : 
*/
// function tambah(a, b){
//     return a + b;
// }

// let hasil = tambah(10,20); //? menambahkan variabel
// console.log(hasil);

//* Atau bisa seperti ini :
// function tambah (a, b) {
//     return a + b;
// }

// let a = 10;
// let b = 20;
// let hasil = tambah (a,b);

// console.log(hasil);

/**
 * * Menambahkan angka atau kata sesuai permintaan user
 * * dengan alert.
*/
// function tambah (a, b) {
//     return a + b;
// }

// let a = parseInt (prompt('Masukan nilai a'));
// let b = parseInt (prompt('Masukan nilai b'));
// let hasil = tambah(a, b);

// console.log(hasil);

/**
 * ? NOTE: 
 * ? Fungsi parseInt adalah untuk membuat string menjadi number
*/

/**
 * * Jika parameter dari fungsi adalah sebuah object, kita juga bisa 
 * * memanfaatkan destructuring object untuk mendapatkan nilainya.
*/
// let user = {
//     id : 24,
//     displayName : "Aldi",
//     fullName : "Aldi aja",
// };

// function introduce ({displayName, fullName}) {
//     console.log(`${displayName} is ${fullName}`);
// }

// introduce(user);

// function calculate(value) {
//     return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
// }

// console.log(calculate(3));

