// ========================== Arrow function ================================
const menghitungLuasPersegi = (panjang, lebar) => {
    return panjang * lebar;
}
const hasilPersegi = menghitungLuasPersegi(10, 10);
console.log(hasilPersegi);




const isDay = (day) => {
    if(day === "MINGGU") {
        return "Selamat hari minggu";
    } else if(day === "SENIN") {
        return "Selamat hari senin";
    } else {
        return "Lo masukin hari apa??";
    }
}
const hariIni = isDay("MINGGU");
console.log(`Haloo, ${hariIni}`);



// Jarak output
console.log("\n\n\n")



// * Contoh arrow function membuat volt tabung
const voltTabung = (r, t) => {
    return 3.14 * r**2 * t
}
console.log("Volt tabung : ", voltTabung(10, 4)) // Output: 1256



// Jarak output
console.log("\n\n\n")



// * Contoh arrow function mencari luas persegi
const persegi = (panjang, lebar) => {
    return panjang * lebar
}
let luas = persegi(10, 10)
console.log("Luas persegi panjang adalah : ", luas)



// Jarak output
console.log("\n\n\n")



// * Contoh arrow function merangkum nilai
const nilai = (n) => {
    if (n >= 91 && n <= 100) {
        return "Anda mendapatkan nilai A"
    } else if (n >= 81 && n <= 90) {
        return "Anda mendapatkan nilai B"
    } else if (n >= 71 && n <= 80) {
        return "Anda mendapatkan nilai C"
    } else if (n >= 61 && n <= 70) {
        return "Anda mendapatkan nilai D"
    } else if (n <= 60) {
        return "Anda mendapatkan nilai E"
    }
}
const nilaiMahasiswa = nilai(81)
console.log(nilaiMahasiswa)