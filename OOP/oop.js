// const mail = {
//     from : "pramudya06@gmail.com",
//     sendMessage : function (msg, to) {
//         console.log(`You send : ${msg}to ${to} from ${this.from}`);
//     }
// };

// console.log(mail.from);
// mail.sendMessage(`Apakabar\n`, `dafapradipta13@gmail.com`);




/**
 * * OOP Constructor
 */
// class MyClass {
//     constructor () {
//         console.log ("Ini adalah constructor class");
//     }
// }

// new MyClass ();

// Output: "Ini adalah constructor class"




/**
 * * OOP Static init block
 */
// class MyClass {
//     static {
//         console.log ("Ini adalah static initializatoin block");
//     }
// }

// Output: "Ini adalah static initialization block"




/**
 * * OOP Methods
 */
// class MyClass {
//     firstField = "First Field";

//     firstMethod () {
//         console.log (`Ini adalah method pertama dari class ${MyClass.name}`);
//     }

//     //? Getter
//     get getFirstField () {
//         return this.firstField;
//     }

//     //? Setter
//     set setMyFirstField (value) {
//         this.firstField = value;
//     }
// }

// let myClass = new MyClass ();
// myClass.firstMethod();
// // Output: "Ini adalah method pertama dari class"

// // Getter dan Setter
// console.log(myClass.getFirstField);
// // Output: "First Field"

// myClass.setMyFirstField = "nilai berubah";
// console.log(myClass.getFirstField);
// // Output: "nilai berubah"






/**
 * * OOP Static methods & property
 */
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









/**
 * * OOP This keywoard
 */
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









/**
 * * OOP Properties
 */
// class MyClass {
//     constructor (param1 = `Dicoding`, param2 = `Indonesia`) {
//         this.param1 = param1;
//         this.param2 = param2;
//     }
// }

// const myClass = new MyClass();
// console.log(myClass.param1); // Output: "Dicoding"
// console.log(myClass.param2); // Output: "Indonesia"










/**
 * * OOP Fields
 */
// class MyClass {
//     firstField = `First Field`;
//     secondField = `Second Field`;

//     #privateFirstField = `Private First Field`;
//     #privateSecondField = `Private Second Field`;
// }

// const myClass = new MyClass();
// console.log(myClass.firstField); // Output: "First Field"
// console.log(myClass.secondField); // Output: "Second Field"






