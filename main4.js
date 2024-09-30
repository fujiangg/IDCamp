// SANG PENGATUR PROGRAM

// FLOW CONTROLS
const number = 100;
console.log(number);
// Komputer menjalankan baris pertama yaitu menginisialisasi number → menjalankan baris selanjutnya mencetak nilai variabel number di console.

// ----------------------------------------------------------------------

// CONDITIONAL
// IF STATEMENT
const gajian = true;

console.log('Berjalan-jalan di mal');
if (gajian) {
  console.log('Makan di restoran mal');
}
console.log('Pulang ke rumah');

// Output: (jika true)
/* Berjalan-jalan di mal
Makan di restoran mal
Pulang ke rumah
*/
// Output: (jika false)
/* Berjalan-jalan di mal
Pulang ke rumah
*/

const score = 79;

if (score >= 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}

const score_fix = 85;

if (score_fix > 90) {
  console.log('Selamat, Anda mendapatkan nilai A!');
} else if (score_fix > 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}

    // Ternary Operator
    const price = 100000;
    const isMember = true;
    const discount = isMember ? 0.1 : 0;

    console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

// SWITCH CASE
const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
    break;
  case 'apple':
    console.log('I am an apple.');
    break;
  case 'orange':
    console.log('I am an orange.');
    break;
  case 'strawberry':
    console.log('I am a strawberry.');
    break;
  default:
    console.log('I am not a fruit. I am a programmer.');
}

    // Jika tidak menggunakan Break
    const total = 2;

    switch (total) {
    case 1:
    console.log('Ini 1');
    break;
    case 2:
    console.log('Ini 2');
    case 3:
    console.log('Ini 3');
    break;
    default:
    console.log('Ini default');
    }

// PERBEDAAN IF & SWITCH
const day_if = new Date().getDay();

if (day_if === 0) {
  console.log('Minggu');
} else if (day_if === 1) {
  console.log('Senin');
} else if (day_if === 2) {
  console.log('Selasa');
} else if (day_if === 3) {
  console.log('Rabu');
} else if (day_if === 4) {
  console.log('Kamis');
} else if (day_if === 5) {
  console.log('Jumat');
} else if (day_if === 6) {
  console.log('Sabtu');
} else {
  console.log('Hari tidak valid');
}

const day_switch = new Date().getDay();

switch (day_switch) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}

