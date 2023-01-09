// * implementasi try-catch pada kasus yang lebih umum

// let json = `{"name" : "Aldi", "age" : 20}`;

// try {
//     let user = JSON.parse(json); // fungsi JSON.parse akan melakukan parsing atau konversi dari variabel json (String) menjadi sebuah object.

//     console.log(user.name);
//     console.log(user.age);
// }
// catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }


//  * Contoh :

// let json = `{
//     "nama" : "Aldi",
//     "umur" : 20,
//     "hobby" : "Tidur",
//     "institut" : "Universitas Pamulang"
// }`;


// try {
//     let user = JSON.parse(json);

//     console.log(user.nama);
//     console.log(user.umur);
//     console.log(user.hobby);
//     console.log(user.institut);
// }
// catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }













// * Akan terjadi error jika json string tidak sesuai dengan format object JavaScript.

// let json = `{ bad json }`;

// try {
//     let user = JSON.parse(json);

//     console.log(user.name);
//     console.log(user.age);
// }
// catch (error) {
//     console.log(error.name);
//     console.log(error.message);

// } // Apabila json tidak sesuai format, maka JSON.parse akan menimbulkan eror














/**
 * * Jika terjadi ketidakcocokan properti pada json sebenarnya sama saja dengan 
 * * eror karena akan berdampak pada jalannya program kita. Maka untuk mengatasinya, 
 * * kita bisa menggunakan throw.
 */

// * Contoh ketidakcocokan properti pada json
// let json = `{ "age": 20 }`;

// try {
//     let user = JSON.parse(json);

//     console.log(user.name); // yang harusnya menggunakan properti age. Menghasilkan nilai undefined
//     console.log(user.age); // 20
// }
// catch (error) {
//     console.log(error.name);
//     console.log(error.message); 
// }



// * Contoh menggunakan throw
// let json = `{ "age": 20 }`;

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("`name` is required.");
//     }

//     console.log(user.name);
//     console.log(user.age);
// }
// catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }
// Ketika properti user.name tidak memiliki nilai, maka program akan menghasilkan SyntaxError. 
// Di dalamnya kita bisa menentukan pesan yang dapat membantu menjelaskan apa eror yang terjadi.





// * Contoh menggunakan throw ketika ada variabel yang belum terdefinisi

// let json = `{ "name": "Aldi", "age": 20 }`;


// try {
//     let user = JSON.parse(json);


//     if(!user.name) {
//         throw new SyntaxError(`"name" is required.`);
//     }

//     console.log(user.name);
//     console.log(user.age);


//     errorCode; // variabel yang tidak terdefinisikan

// }


// catch (error) {
//     console.log(`JSON Error: ${error.message}`)
// }

















// * Menampilkan pesan error sesuai dengan error yang muncul
// * Dengan menggunakan if statement

let json = `{ "name": "Aldi", "age": 20}`;

try {
    let user = JSON.parse(json);

    console.log(user.name);
    console.log(user.hobby);
    console.log(user.age);

} catch (error) {

    if(error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    
    } else if(error instanceof ReferenceError) {
        console.log(error.message);
    
    } else {
        console.log(error.stack);
    }
}
// Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. 
// Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
