//* Variable scope terdiri dari global scope dan lokal scope

// let a = 10; //? <== Variable global

// function tes() {      
//     let b = 20;     //? <== Variabel lokal
//     console.log(b);
// }
// tes();

let a = 10;

function tes () {
    if(let i = 0; i <= 20; i++ ){
        let a = 20;
        console.log(a)
    }
}
console.log(a);
tes();
