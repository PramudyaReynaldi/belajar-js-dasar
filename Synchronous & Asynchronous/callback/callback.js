// ================= Pola callback ==================

// Mendefinisikan fungsi getUsers dengan satu parameter callback
function getUsers(callback) {
    // Simulasi jeda jaringan selama 3 detik menggunakan setTimeout()
    setTimeout(() => {
        // Membuat array users
        const users = ['Aldi', 'Dhafa', 'Udin'];
        // Memanggil fungsi callback dengan argumen users
        callback(users);
    }, 3000);
}

// Mendefinisikan fungsi usersCallback yang akan menjadi callback dari getUsers
function usersCallback(users) {
    // Menampilkan isi array users sebagai tabel di konsol
    console.table(users);
}

// Memanggil getUsers dengan usersCallback sebagai parameter
getUsers(usersCallback);