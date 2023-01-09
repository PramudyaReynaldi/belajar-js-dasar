let dataDiri = {

    firstName : "Pramudya",
    lastName : "Reynaldi",
    age : 20,
    hobby : "Music",
    country : "Indonesia",
    favoriteFood : "Bakso",
    favoriteDrink : "Cofee",
    "Tempat tinggal" : "Tangerang",
    married : false,
}; 

// console.log(dataDiri);

/**
 * * Kemudian untuk mengakses nilai dari properti object, kita dapat memanggil 
 * * nama object lalu tanda titik dan diikuti nama propertinya. Contoh :
 */
// console.log(`Halo, nama saya ${dataDiri.firstName} ${dataDiri.lastName}`);
// console.log(`Umur saya ${dataDiri.age}`);
// console.log(`Hobby saya ${dataDiri.hobby}`);
// console.log(`Saya berasal dari negara ${dataDiri.country}`);
// console.log(`Makanan kesukaan saya adalah ${dataDiri.favoriteFood}`);
// console.log(`Minuman kesukaan saya adalah ${dataDiri.favoriteDrink}`);


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


