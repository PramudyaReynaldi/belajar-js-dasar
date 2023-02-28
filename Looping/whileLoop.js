// ===================================== While loop ============================================

// ? while (kondisi) {
        // Pernyataan/perintah
// ? }

// let text = "";
// let i = 1;
// while (i <= 5) {
//     text += "\n The number is " + i;
//     i++;
// }
// console.log(text);

const maxFloorLevel = 5;
let floorLevel = 1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while(floorLevel <= maxFloorLevel) {
    let isSpotless = false;
    console.log("Ngepel lantai", floorLevel);

    // Simulasi peluang lantai
    // Spotless enggak setelah dipel
    let godsWill = getRandomInt(0, 1);

    // 0 berarti lantainya ga
    // spotless setelah dipel
    if(godsWill === 0) isSpotless = true;

    if(isSpotless) floorLevel++;
}