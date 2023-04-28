// Mendefinisikan fungsi getUsers dengan satu parameter isOffline
function getUsers(isOffline) {
    // Mengembalikan nilai dengan menggunakan Promise
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const users = ['Aldi', 'Dhafa', 'Udin'];

            // Membuat conditional statement if
            if(isOffline) {
                reject(new Error('cannot retrieve users due offline'));
                return;
            }

            resolve(users);
        }, 3000);
    });
}

// Mendapatkan nilai yang dibawa oleh Promise
getUsers(false)
    .then(users => console.table(users))
    .catch(err => console.log(err.message));





// Algoritma penarikan saldo yang dimana, jika saldo mencukupi, maka
// penarikan saldo akan dilakukan. Jika tidak, maka sebaliknya

function withdrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(amount < 50000) {
                reject(new Error("Saldo tidak mencukupi"))
            }

            resolve(amount)
        }, 2000)
    })
}

// Algoritma pembelian tiket bioskop yang dimana jika kurang dari
// harga pembelian tiketnya, maka Promise akan di-reject dengan pesan 
// “not enough money to buy ticket”. Jika nilai argumen cukup, Promise 
// akan mengembalikan nilai “tiket-1”.

function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Misalkan harga tiketnya 50000
            if(money < 50000) {
                reject(new Error("Saldo tidak cukup untuk membeli tiket"))
            }

            resolve("Ticket - 1")
        })
    })
}

// Algotitma masuk ke bioskopnya yang dimana, Jika tidak ada tiket, 
// Promise akan di-reject dengan pesan “no ticket”. Jika ada, Promise 
// akan di-resolve dengan pesan “enjoy the movie”.

function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!ticket) {
                reject(new Error("no ticket"))
            }

            resolve("Enjoy the movie")
        }, 1000)
    })
}

// Menjalankan ketiga fungsi tersebut dengan promise chaining

function watchMovie() {
    withdrawMoney(52000)
    .then((money) => {
        return buyCinemaTicket(money)
    })
    .then((ticket) => {
        return goInsideCinema(ticket)
    })
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error.message)
    })
}

watchMovie()

