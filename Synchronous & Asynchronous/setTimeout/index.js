// Cara kerja dari setTimeout():

// 1. Mencetak =>  Selamat datang!
// 2. Mencetak → Ada yang bisa dibantu?
// 3. Menunggu selama tiga detik
// 4. Mencetak → Terima kasih sudah mampir, silakan datang kembali!

// Mencetak Selamat datang!
console.log('Selamat datang!');

// Menunggu selama tiga detik, lalu muncul outputnya
setTimeout(() => {
    console.log('Terimakasih sudah mampir, silahkan datang kembali!');
}, 3000);

// Mencetak Ada yang bisa dibantu?
console.log('Ada yang bisa dibantu?');