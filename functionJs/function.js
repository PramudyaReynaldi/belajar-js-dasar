// =================================================== Function ======================================================

// * Contoh dasar

function greeting() {
    return "Good morning";
}
console.log(greeting());



// ======== Jarak output =========
console.log("\n\n\n"); 



// * Hal yang harus dipertahtikan saat penulisan parameter adalah
// * kita bisa input tipe data apa saja dengan syarat data yang
// * kita pakai harus relevan dengan fungsinya

function sayHiTo(name) {
    let halo = `Hai ${name.toUpperCase()}!`
    return halo;
}

let test1 = sayHiTo("everything")
console.log(test1); // Output: hai EVERYTHING!

// * Bilamana tidak relevan dengan fungsinya 
// let test2 = sayHiTo(100);
// console.log(test2); // Output: name.toUpperCase is not a function (alias error)


// ======== Jarak output =========
console.log("\n\n\n"); 



/**
 * * Kita juga bisa menambahkan lebih dari satu 
 * * parameter dengan memberikan tanda koma antar variabel parameternya. 
 * * Contohnya fungsi greeting akan kita tambahkan 
 * * parameter name dan language seperti ini:
*/

function myParamFunction(param1, param2) {
    console.log("Param1 = ", param1);
    console.log("Param2 = ", param2);
}
myParamFunction("Parameter 1", "Parameter 2");

// ============ Jarak Output=============
console.log("\n\n\n");

//* Contoh kedua :
function nameAndLanguage (name, language) {
    if (language === "English") {
        console.log(`Good morning ${name}!`);
    }
    else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    }
    else if (language === "Indonesia") {
        console.log(`Selamat pagi ${name}!`);
    }
}
nameAndLanguage("Aldi", "Indonesia");




// ======== Jarak output =========
console.log("\n\n\n");







// * Membuat function beserta parameter dan argumen 
function tambah (a, b) { // a dan b adalah parameter
    return a + b;
}
console.log(tambah(2,3)); // angka 2 dan 3 ini adalah argumen


// ======== Jarak output =========
console.log("\n\n\n");


// * Bisa juga dengan menambahkan variabel
function tambah(a, b){
    return a + b;
}
let hasil = tambah(10,20); // menambahkan variabel
console.log(hasil);


// ======== Jarak output =========
console.log("\n\n\n");


// * Atau bisa seperti ini :
function tambah (a, b) {
    return a + b;
}

let a = 10;
let b = 20;
let jumlah = tambah (a,b);

console.log(jumlah);







// ======== Jarak output =========
console.log("\n\n\n");






/**
 * * Menambahkan angka atau kata sesuai permintaan user
 * * dengan alert.
*/
// function tambah (a, b) {
//     return a + b;
// }

// let a = parseInt(prompt('Masukan nilai a'));
// let b = parseInt(prompt('Masukan nilai b'));
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
let user = {
    id : 24,
    displayName : "Aldi",
    fullName : "Aldi aja",
};

function introduce ({displayName, fullName}) {
    return `${displayName} is ${fullName}`;
}
console.log(introduce(user));


// ======== Jarak output =========
console.log("\n\n\n");




// ======================================= Higher Order Function ============================================
// * Adalah Sebuah function yang beroperasi pada function lainnya

function kerjakanTugas(mataKuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${mataKuliah}...`)
    selesai()
}

function selesai() {
    return `Selesai mengerjakan tugas`
}

kerjakanTugas(`Pemrograman Web`, selesai)
// function kerjakanTugas() beroperasi pada function selesai()



// ======== Jarak output =========
console.log("\n\n\n");



// * Higher order function dengan forEach
const strArray = ["JavaScript", "Java", "C"];

function forEach(array, callback) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

const lenArray = forEach(strArray, (item) => {
    return item.length;
});

console.log(lenArray);

