export function myFunction() {
    console.log('Ini adalah contoh named import.');
}

const name = 'John';
const email = 'john@gmail.com';
const age = 25;
const telp = '081234560987'

export { name, email, age, telp };

// Contoh sebelum diinisialisasi

/* export const nama = 'John';
export const surel = 'john@gmail.com';
export const usia = 25;
 */
// Contoh setelah diinisialisasi (menggunakan kurung kurawal)

const nama = 'John';
const surel = 'john@gmail.com';
const usia = 25;
 
export { nama, surel, usia };

// CARA 1
/* export const fullName =  "Dicoding Indonesia";
export const favoriteFood = ['pizza', 'pasta', 'sushi'];

export function sayHi(fullName) {
    console.log(`Hi, ${fullName}!`);
} */

// CARA 2
const fullName =  "Dicoding Indonesia";
const favoriteFood = ['pizza', 'pasta', 'sushi'];
    
function sayHi(fullName) {
    console.log(`Hi, ${fullName}!`);
}

export { fullName, favoriteFood, sayHi };