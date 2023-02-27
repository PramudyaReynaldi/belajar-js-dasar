// ====================================== For loop ============================================

/**
 * * Dari beberapa cara melakukan proses loop pada JavaScript, “for” merupakan 
 * * salah satu cara yang banyak digunakan. Struktur dasar dari for tampak 
 * * seperti berikut:
*/
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

//* (for of) loop
//* Biasanya digunakan untuk loop pada array

let myArray = ["Aldi", "Udin", "Pecang", "Usup"];

for(let arr of myArray) {
    console.log(arr);
}

//* Membuat segitiga siku-siku bintang menggunakan for loop 
function segitiga (param) {
    let hasil = " ";

    for (let i = 0; i <= param; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += "* ";
        }
        hasil += "\n";
    }
    return hasil;
}
console.log(segitiga(10));




const initialFloorLevel = 1;

for(let floorLevel = initialFloorLevel; floorLevel <= 5; floorLevel++) {
    console.log("Aku sedang ngepel");
    console.log("Ngepel");
    console.log("Beres ngepel");
    console.log("Ngepel lagi");
}






