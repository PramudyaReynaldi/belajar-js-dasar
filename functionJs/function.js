// ============================== function ======================================

// * Contoh dasar

function greeting() {
    return "Good morning";
}
console.log(greeting());



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
function tambah (a, b) { //? a dan b adalah parameter
    return a + b;
}
console.log(tambah(2,3)); //? angka 2 dan 3 ini adalah argumen


// ======== Jarak output =========
console.log("\n\n\n");


// * Bisa juga dengan menambahkan variabel
function tambah(a, b){
    return a + b;
}
let hasil = tambah(10,20); //? menambahkan variabel
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




