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