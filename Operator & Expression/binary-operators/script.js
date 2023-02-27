// ========================= Assignment Operators ===================================

let angka = 10; // Tanda sama dengan (=) identik dengan assingment operator
angka += 5; // Ini adalah Additional Assignment yang berarti (angka = angka + 5)
console.log(angka); // Output: 15

// * Contoh kedua
let nama = "Ujang";
nama += " Lapuk";
console.log(nama);



// * Assignment Operator ini bisa juga digunakan untuk memasukan nilai kedalam array maupun object

// Object :
let person = {
    hobby: "Sleep",
    age: 20
};
// Assignment terhadap atribut object
person.hobby = "Mancing";
console.log(person); // Output: { hobby: 'Mancing', age: 20 }

// Array
let fruits = ["Mangga", "Apel", "Stroberi", "Jeruk"];
// Assignment terhadap item di dalam array
fruits[2] = "Brenuk";
console.log(fruits);














// ============================ Additional Assignment ==================================

// * Operator "+="
let number = 90; // Deklarasi variabel number
number += 10; // number = number + 10
console.log(number); // Output: 100

// * Operator "-="
let x = 20; // Deklarasi variabel x
x -= 10; // x = x - 10
console.log(x); // Output: 10

// * Operator "*="
let n = 5; // Deklarasi variabel n
n *= 5; // n = n * 5
console.log(n); // Output: 25

// * Operator "/="
let bagi = 10;
bagi /= 10; // bagi = bagi / 10
console.log(bagi); // Output: 1

// * Operator "%="
let modulus = 20; // Deklarasi variabel modulus
modulus %= 10; // modulus = modulus % 10
console.log(modulus); // Output: 2

// * Operator "**="
let pangkat = 50; // Deklarasi variabel pangkat
pangkat **= 2; // pangkat = pangkat ** 2
console.log(pangkat); // 100












// =============================== Comparison Operator ================================

// * Operator Equal/Sama dengan (==)
const equal1 = 10;
const equal2 = 20;

const equalFalse = equal1 == equal2; // Menampung nilai dari variabel equal1 dan equal2
console.log(equalFalse); // Output: false

const equal3 = 10;
const equal4 = 10;

const equalTrue = equal3 == equal4;
console.log(equalTrue); // Output: true



// * Operator Not Equal/Tidak sama dengan (!=)
const notEqual1 = 20;
const notEqual2 = 20;

const notEqualFalse = notEqual1 != notEqual2; 
console.log(notEqualFalse); // Output: false 

const notEqual3 = 10;
const notEqual4 = 20;

const notEqualTrue = notEqual3 != notEqual4;
console.log(notEqualTrue); // Output: true



// * Operator Strict Equal/Operan & Tipe data yang sama dengan (===)
const strictEqual1 = 100;
const strictEqual2 = "100"; // Operan string

const strictEqualFalse = strictEqual1 === strictEqual2;
console.log(strictEqualFalse); // Output: false


const strictEqual3 = 100;
const strictEqual4 = 100;

const strictEqualTrue = strictEqual3 === strictEqual4;
console.log(strictEqualTrue); // Output: true



// * Operator Strict Not Equal/Operan & Tipe data yang tidak sama dengan (!==)
const strictNotEqual = 200;
const strictNotEqualFalse = strictNotEqual !== 200;

console.log(strictNotEqualFalse); // Output: false


const strictNotEqual2 = 300;
const strictNotEqualTrue = strictNotEqual2 !== "300";

console.log(strictNotEqualTrue); // Output: true



// * Operator Greather than/Lebih besar dari (>)
const isBig = 10;
const isBigThan = isBig > 5;

console.log(isBigThan); // Output: true



// * Operator Greather than or Equal/Lebih besar atau sama dengan (>=)
const big = 20;
const bigThan = big >= 18;

console.log(bigThan); // Output: true



// * Operator Lebih kecil dari (<)
const small = 5;
const smallThan = small < 10;

console.log(smallThan); // Output: true



// * Operator Lebih kecil atau sama dengan (<=)
const isSmall = 10;
const isSmallThan = isSmall <= 30;

console.log(isSmallThan); // Output: true






// ================================ Arithmetic Operators =================================












// ================================ Logical Operators =====================================

// * Operator AND (&&)
let and = 10;
newAnd = (and < 20) && (and > 8); // Akan menghasilkan true jika dua-duanya benar
console.log(newAnd); // Output: true

// Jika ada salah satu yang salah, maka akan menghasilkan false
let i = 20;
newI = (i < 8) && (i > 10); // Akan menghasilkan false jika salah satu ada yang salah
console.log(newI); // Output: false



// * Operator OR (||)
// Akan menghasilkan true mesikpun ada salah satu yang salah
let or = 100;
newOr = (or > 70) || (or < 50); // Tetap akan menghasilkan true
console.log(newOr);



// * Operator NOT (!)
let not = 10;
newNot = !(not < 8); // Menghasilkan true, karena not tidak kurang dari 8
console.log(newNot); // Output: true

let j = 20;
k = !(j > 8); // Menghasilkan false, karena variabel j tidak lebih dari 8 itu adalah pernyataan yang salah
console.log(k); // Output: false








// ============================= String Operator ======================================

// * hanya ada 2 operator yang bisa digunakan untuk manipulasi string, yaitu Plus (+) 
// * dan Addition Assignment Operator (+=).

// * Contoh menggunakan Operator Plus (+)
let namaDepan = "Pramudya";
let namaBelakang = "Reynaldi";

console.log(`Halo, nama saya ` + namaDepan + " " + namaBelakang); // Menggunakan operator plus (+)

// * Contoh menggunakan Assignment Operator (+=)
let greetingMessage = "Selamat datang ";
greetingMessage += namaDepan;
greetingMessage += "!";

console.log(greetingMessage); // Output: Selamat datang Pramudya!










// ================================ Relational Operator ====================================

// * Relational Operator (in) => untuk mengecek keberadaan sebuah data dalam sebuah 
// * data yang berupa koleksi (Array atau Object).
const stockFruits = ["Mangga", "Apel", "Jambu"];
const myFavoriteFruit = "Semangka" in stockFruits;

console.log(myFavoriteFruit); // Output: false
// Karena tidak ada Semangka di dalam array stockFruits

const myPerson = {
    name: "Aldi",
    age: 20,
    hobby: "Sleep",
    favoriteFood: "Jengkol"
};
const myPersonIsLike = "name" in myPerson;
console.log(myPersonIsLike) // Output: true
// Menghasilkan true, karena benar ada key name dialam object myPerson


// * Relational Operator (instance of) => mengecek apakah suatu data merupakan instansi
// * dari tipe data tertentu.
const restaurant = {
    name: "Payakumbuah",
    bestFood: "Rendang",
    location: "Pamulang",
    bestDrink: "Anggur"
}
console.log(restaurant instanceof Date); // Output: false


const date = new Date();
console.log(date instanceof Date); // Output: true





// =============================== Conditional (Ternary) Operator ==================================

const isRaining = true;
const thisWeather = isRaining ? "Berteduh" : "Jalan aja";
console.log(thisWeather) // Output: Berteduh
// karena isRaining = true dan "Berteduh" ini didalam posisi true


const puluhan = 20;
const ratusan = 200;

const apakahSama = (puluhan === ratusan) ? "Sama" : "Beda";
console.log(apakahSama); // Output: Beda
// Karena puluhan beda dengan ratusan dan "Beda" ini didalam posisi false