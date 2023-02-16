// *  Menangani suatu nilai yang didapatkan secara asynchronous pada program yang berjalan secara synchronous.

// const orderCoffee = () => {
//     let coffee = null;

//     console.log("Sedang membuat kopi, silahkan tunggu....");

//     setTimeout (() => {
//         coffee = "Kopi sudah jadi";

//     }, 3000);

//     return coffee; 
// }

// const coffee = orderCoffee(); // selalu mengembalikan nilai null 
// console.log(coffee);
// // Jika kita melakukan hal seperti di atas untuk mencetak nilai coffee, maka hal tersebut tidak akan pernah terjadi. 


// * Kode asynchronous perlu disusun dengan cara yang berbeda dari synchronous. 
// * Cara paling dasar adalah dengan callback function.

const orderCoffee = callback => {
    let coffee = null;

    console.log("Sedang membuat kopi, silahkan tunggu...");

    setTimeout(() => {
        coffee = "kopi sudah jadi";
        callback (coffee);
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
});
