// FUNCTION //

// Study Case 1 - temperature convertion
const temperatureInCelsius = 90;
const temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;

console.log('Hasil konversi:', temperatureInFahrenheit);

// Study Case 2 - a lot of temperature convertion
let temperatureInCelsius2;
let temperatureInFahrenheit2;

temperatureInCelsius2 = 50;
temperatureInFahrenheit2 = 9 / 5 * temperatureInCelsius2 + 32;
console.log('Hasil konversi:', temperatureInFahrenheit2); // output -> Hasil konversi: 122

temperatureInCelsius2 = 70;
temperatureInFahrenheit2 = 9 / 5 * temperatureInCelsius2 + 32;
console.log('Hasil konversi:', temperatureInFahrenheit2); // output -> Hasil konversi: 158

temperatureInCelsius2 = 100;
temperatureInFahrenheit2 = 9 / 5 * temperatureInCelsius2 + 32;
console.log('Hasil konversi:', temperatureInFahrenheit2); // output -> Hasil konversi: 

// ----------------------------------------------------------------------

// DEKLARASI FUNCTION //
function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
   
    console.log('Hasil konversi:', temperatureInFahrenheit);
}

// ----------------------------------------------------------------------

// PEMANGGILAN FUNCTION //
function convertCelsiusToFahrenheit2(temperature2) {
    const temperatureInFahrenheit = (9 / 5) * temperature2 + 32;

    console.log('Hasil Konversi:', temperatureInFahrenheit2)
}

const temperatureInCelsius3 = 90;

// Hanya menampilkan nilai function
console.log(convertCelsiusToFahrenheit2);
// Output => [Function: convertCelciusToFahrenheit2]

// Akan menjalankan isi function
convertCelsiusToFahrenheit(temperatureInCelsius);
// Output => Hasil konversi: 194