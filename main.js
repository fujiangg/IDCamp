// EXPRESSION & STATEMENT //

const age = 10;
const name = 'Dicoding';
console.log(`Aku ${name}, umurku ${age} tahun.`);

// ----------------------------------------------------------------------

// COMMENT //

// Teks ini akan diabaikan oleh interpreter
console.log(`Hai, Readers!`);
console.log(`Hai, JavaScript`);
// console.log(`Hai, Dicoding!`);

/*
 * TODO
 * 1. Buatlah variabel bernama `PI` dan isikan dengan nilai 3.14
 * 2. Cetak nilai variabel PI di terminal menggunakan console.log
 */
const PI ='3.14';
console.log(PI);

// ----------------------------------------------------------------------

// VARIABLE //

// Menggunakan let
let username = 'Dicoding';
console.log(`Sebelum diubah :`, username);
username = 'dicodingacademy';
console.log(`Setelah diubah :`, username); 
// Menggunakan const menghasilkan error

/* Aturan Variable :
 * Tidak boleh memberikan nama yang sama dalam cakupan yang sama
 * Nama hanya boleh Huruf, Angka, _, $
 * Tidak boleh diawali dengan angka
 */

// Contoh cakupan yang sama akan menghasilkan error
// Company data
/* const name = 'Dicoding';
 * const legal = 'LLC';
 */ 

// Employee data
/* const name = 'John'; // SyntaxError: Identifier 'name' has already been declared
 * const division = 'IT';
 */

// Contoh cakupan yang berbeda
function printCompanyInfo() {
    const name = 'Dicoding';
    const legal = 'LLC';
    console.log(`Company name :`, name);
    console.log(`Legal type :`, legal);
}
function printEmployeeInfo() {
    const name = 'John';
    const division = 'IT';
    console.log(`Employee name :`, name);
    console.log(`Division type :`, division);
}
printCompanyInfo();
printEmployeeInfo();

// nama variabel yang benar
const firstName = 'Fulan';
const last_name = 'Lestari';
const $message = 'Hello, World!';
const userId1 = 123;
const userId2 = 456;
 
// nama variabel yang salah
/* const first-name = 'Fulan'; // tidak boleh mengandung karakter -
 * const last name = 'Lestari'; // tidak boleh mengandung spasi
 * const @message = 'Hello, World!'; // tidak boleh mengandung karakter @
 */

// nama variabel yang benar
const lastName = 'Fulan';
const _secondName = 'Fulana';
 
// nama variabel yang salah karena diawali dengan angka
/* const 1stName = 'Fulan';
 * const 2ndName = 'Fulana'; 
 */

// ----------------------------------------------------------------------

// TIPE DATA

// 1. String
/* "Ini merupakan contoh string di JavaScript"
 * 'Ini merupakan contoh string di JavaScript'
 * `Ini merupakan contoh string di JavaScript`
 */

    // baris baru
    /* "Baris pertama.\nBaris kedua."
    * 'Baris pertama.\nBaris kedua.'
    * `Baris pertama.
    * Baris kedua.`
    */

    // Backticks (template literals)
    const currentYear = new Date().getFullYear();
    const text = `Sekarang adalah tahun ${currentYear}.`;
    console.log(text);

// 2. Number
/* 40
 * 3.14
 * 5
 * 3.333
 */

    // Infinity
    const result1 = 50 / 0;
    console.log(result1); // output: Infinity

    // NaN
    const result2 = Number('Dicoding');
    console.log(result2); // output: NaN

// 3. Boolean
/* True 
 * False
 */

    const completed = true;
    const passed = false;
    console.log(completed, passed); // output: true false

    const isGreater = 5 > 2;
    console.log(isGreater); // output: true (5 lebih besar dari 2)

// 4. Nilai Kosong
/* Null
 * Undefined
 */

    let message1 = null;
    console.log(message1); // output: null

    let message2;
    console.log(message2); // output: undefined

    // Perbedaan keduanya
    const name1 = { first: 'Dicoding', last: null};
    const name2 = { first: 'Dicoding', last: undefined };
    console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
    console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}

// ----------------------------------------------------------------------

// KONVERSI ANTAR TIPE DATA

// 1. Konversi Eksplisit
    // ke String
    const number1 = 123;
    const boolean1 = true;
    const strNumber = String(number1);
    const strBoolean = boolean1.toString();
    console.log(strNumber); // output: "123"
    console.log(strBoolean); // output: "true"

    // ke Number
    const strFloat1 = '3.14';
    const boolean2 = true;
    const numFromString = Number(strNumber);
    const floatFromString = Number(strFloat1);
    const numFromBoolean = Number(boolean2);
    console.log(numFromString); // output: 123
    console.log(floatFromString); // output: 3.14
    console.log(numFromBoolean); // output: 1

        // parseInt()
        const cm1 = '20cm';
        const px1 = '64px';
        const intFromCM = parseInt(cm1);
        const intFromPX = parseInt(px1);
        console.log(intFromCM); // output: 20
        console.log(intFromPX); // output: 64

        // parseFloat()
        const cm2 = '20.55cm';
        const px2 = '64.23px';
        const floatFromCM = parseFloat(cm2);
        const floatFromPX = parseFloat(px2);
        console.log(floatFromCM); // output: 20.55
        console.log(floatFromPX); // output: 64.23
    
    // ke Boolean
    const number2 = 123;
    const string2 = 'Dicoding';
    const empty2 = null;
    const boolFromNumber = Boolean(123);
    const boolFromString = Boolean(string2);
    const boolFromNull = Boolean(empty2);
    console.log(boolFromNumber); // output: true
    console.log(boolFromString); // output: true
    console.log(boolFromNull); // output: false

// 2. Konversi Implisit
    // Number ke String
    const age2 = 20;
    const message3 = 'Umurku: ' + age2;
    console.log(message3); // output: Umurku: 20

    // Age ke String
    const strNumber2 = '123';
    const result3 = strNumber2 * 2;
    console.log(result3); // output: 246

    // Boolean ke Number
    const bool = true;
    const result4 = 1 + bool;
    console.log(result4); // output: 2

// ----------------------------------------------------------------------

// OPERATOR
// Kelompok operator :
        let age3 = 25;
    // 1. Unary operator
        typeof age3;
    // 2. Binary operator
        5 + 4;
        10 / 2;
        age3 = 30;
    // 3. Ternary operator (conditional operator)
        (age3 < 18) ? 'You are too young!' : 'Welcome onboard!'; 

// Jenis operator
    // 1. Arithmetic Operator
        6 + 5; // mengembalikan 11
        7 - 2; // mengembalikan 5
        8 * 5; // mengembalikan 40
        10 / 3; // mengembalikan 3.33
        10 % 2; // mengembalikan 0
        // 2  (10 + 2); // mengembalikan 24

    // 2. Comparison Operator
        const a = 10;
        const b = 12;       
        console.log(a < b); // output: true
        console.log(a > b); // output: false

    // 3. Logical Operator
        // AND
        console.log(true && true); // true
        console.log(false && true); // false
        console.log(true && false); // false
        console.log(false && false); // false
        console.log((5 === 5) && (3 < 5)); // true
        
        // OR
        console.log(true || true); // true
        console.log(false || true); // true
        console.log(true || false); // true
        console.log(false || false); // false
        console.log((5 === 5) || (3 > 5)); // true
        
        // NOT
        console.log(!true); // false
        console.log(!false); // true

    // 3. String Operator
        const first = 'bekerja';
        const second = 'sama';
        const merged = first + second;
        console.log(merged); // Output: bekerjasama

