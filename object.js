// ====================================== Object =========================================

const dataDiri = {
    firstName: "Pramudya",
    lastName: "Reynaldi",
    age: 20,
    hobby: "Music",
    country: "Indonesia",
    favoriteFood: "Bakso",
    favoriteDrin: "Cofee",
    "Tempat tinggal": "Tangerang",
    isMarried: false,
    pets: [
        {
            name: "Olive",
            speciesName: "Cat"
        },
        {
            name: "Puli",
            speciesName: "Cat"
        }
    ]
}; 

console.log(dataDiri); // Output: Semua object

// * Untuk memanggil nilai dari sebuah object, kita bisa
// * gunakan square bracket seperti array, atau kita bisa
// * menggunakan dot notation (.)
console.log(dataDiri.firstName); // Output: Pramudya 
console.log(dataDiri["age"]); // Output: 20
console.log(dataDiri.pets[0].name); // Output: Olive

/**
 * * Kemudian untuk mengakses nilai dari properti object, kita dapat memanggil 
 * * nama object lalu tanda titik dan diikuti nama propertinya (dot operator/dot notation). Contoh :
 */
const vespa = {
    name: "Denok",
    warna: "Biru",
    mesin: "Super",
    blok: "Lobang 5",
    ring: 8,
    jelajah: [
        {
            tempat: "Bandung",
            perjalanan: "3 hari"
        },
        {
            tempat: "Anyer",
            perjalanan: "1 hari"
        }
    ]
}
console.log(`Halo, saya punya vespa yang bernama ${vespa.name}`);
console.log(`Vespa saya berwarna ${vespa.warna}`);
console.log(`Saya sudah menjelajah di ${vespa.jelajah[1].tempat} dalam ${vespa.jelajah[1].perjalanan}`);



/**
 * * Selain dot operator, kita juga bisa mengakses properti dari object 
 * * menggunakan bracket atau tanda kurung siku. Contoh :
 */
// console.log(`Saya berasal dari ${dataDiri["country"]}`);


/**
 * * Untuk mengakses key yang memiliki spasi atau karakter khusus lainnya,
 * * maka kita perlu menggunakan bracket/kurung siku seperti di atas. Contoh :
 */
// console.log(`Tempat tinggal saya di ${dataDiri["Tempat tinggal"]}`);


/**
 * * Untuk mengubah nilai properti di dalam object kita gunakan assignment 
 * * operator (=). Contoh :
 */
// dataDiri.country = "Prindapan";
// dataDiri.favoriteDrink = "Amer";

// console.log(dataDiri);


/**
 * * Kita juga dapat menghapus property pada object menggunakan keyword delete seperti berikut :
 */
// delete dataDiri.favoriteDrink;
// console.log(dataDiri);


