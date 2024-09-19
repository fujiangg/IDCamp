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