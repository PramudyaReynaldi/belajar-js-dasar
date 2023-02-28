// ================================== do...while ======================================
const maxFloorLevel = 5;
const floorLevel = 1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
do {
    let isSpotless = false;
    console.log("Ngepel lantai floor", floorLevel);

    // Simulasi peluang lantai spotless gak setelah dipel
    let godsWill = getRandomInt(0 , 1);

    // 0 berarti lantainya gak spotless setelah dipel
    if(godsWill === 0) isSpotless = true;

    // Kalau lantainya udah gak ada noda, bisa lanjut ke lantai berikutnya
    if(isSpotless) floorLevel++; 
}
while (floorLevel <= maxFloorLevel);

