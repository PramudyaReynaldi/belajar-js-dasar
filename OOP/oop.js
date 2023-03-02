// ======================================= OOP in JavaScript =========================================

const mail = {
    from: "pramudya06@gmail.com",
    sendMessage: function(msg, to) {
        console.log(`You send : ${msg}to ${to} from ${this.from}`);
    }
};

console.log(mail.from);
mail.sendMessage(`Apakabar\n`, `dafapradipta13@gmail.com`);


// Jarak output
console.log("\n\n\n")


// * OOP Constructor
class MyClass {
    constructor () {
        console.log ("Ini adalah constructor class");
    }
}

new MyClass (); // Output: Ini adalah constructor class



// Jarak output
console.log("\n\n\n")






 // * OOP Static init block
class classSaya {
    static {
        console.log ("Ini adalah static initializatoin block"); // Output: Ini adalah static initializatoin block
    }
}





// Jarak output
console.log("\n\n\n")









// ====================================== OOP Methods ========================================

// * Setter and Getter
class myClassMethodOne {
    firstField = "First Field";

    firstMethod () {
        console.log (`Ini adalah method pertama dari class ${myClassMethodOne.name}`);
    }

    // Getter
    get getFirstField () {
        return this.firstField;
    }

    // Setter
    set setMyFirstField (value) {
        this.firstField = value;
    }
}

let newMyClassMethodOne = new myClassMethodOne ();
newMyClassMethodOne.firstMethod(); // Output: "Ini adalah method pertama dari class"

// Getter dan Setter
console.log(newMyClassMethodOne.getFirstField); // Output: First Field


newMyClassMethodOne.setMyFirstField = "nilai berubah";
console.log(newMyClassMethodOne.getFirstField);
// Output: "nilai berubah"




// Jarak output
console.log("\n\n\n")





// ===================================== OOP Static methods & property =====================================
// class MyClass {
//     static firstStaticField = `First Static Field`;
//     static secondStaticField;
//     static {
//         MyClass.secondStaticField = `Second Static Field`;
//     }

//     static firstStaticMethod () {
//         return `Ini adalah method pertama dari class MyClass`;
//     }
// }

// console.log(MyClass.firstStaticField);
// // Output: "First Static Field"
// console.log(MyClass.secondStaticField);
// // Output: "Second Static Field"
// console.log(MyClass.firstStaticMethod());
// //Output: "Ini adalah method pertama dari class MyClass"









// ============================================ this keywoard ==========================================
// class MyClass {
//     firstField = `First Field`;

//     get getFirstField () {
//         return this.firstField;
//     }

//     set setFirstField(value) {
//         this.firstField = value;
//     } 
// }

// const myClass = new MyClass ();
// console.log(myClass.getFirstField);
// // Output: "First Field"
// myClass.setFirstField = `123`;









// ========================================= OOP Properties ===============================================

// class MyClass {
//     constructor (param1 = `Dicoding`, param2 = `Indonesia`) {
//         this.param1 = param1;
//         this.param2 = param2;
//     }
// }

// const myClass = new MyClass();
// console.log(myClass.param1); // Output: "Dicoding"
// console.log(myClass.param2); // Output: "Indonesia"










// ======================================== OOP Fields ============================================

class pekerjaan {
    firstField = `First Field`;
    secondField = `Second Field`;

    #privateFirstField = `Private First Field`;
    #privateSecondField = `Private Second Field`;
}

const newPekerjaan = new pekerjaan();
console.log(newPekerjaan.firstField); // Output: "First Field"
console.log(newPekerjaan.secondField); // Output: "Second Field"




// ================================= Super class/Parent class =====================================

class profesi {
    constructor(nama, posisi) {
        this.nama = nama
        this.posisi = posisi
    }

    // Method untuk menampilkan atribut
    introduce() {
        console.log(`Teman saya yang bernama ${this.nama} adalah seorang ${this.posisi}`)
    }
}

// Membuat object dari class profesi
let myProfesi = new profesi("Ujang", "Tentara")

// Memanggil method dari object myProfesi
myProfesi.introduce() // Output: Teman saya yang bernama Ujang adalah seorang Tentara


// Jarak output
console.log("\n\n\n")


class person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Method untuk menampilkan atribut
    myPerson() {
        console.log(`Hi, my name is ${this.name} im a ${this.age} years old, my address is ${this.address}`)
    }
}

// Membuat object dari class person
let dataDiri = new person("Aldi", 20, "Legok")

// Memanggil method dari object dataDiri
dataDiri.myPerson()



