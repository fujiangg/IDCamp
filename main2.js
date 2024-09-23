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

// Fitur Hoisting
greetWorld();

function greetWorld() {
  console.log('Hello, world!');
}

// ----------------------------------------------------------------------

// PARAMETER & ARGUMENT //
// Default Parameter
function convertCelsiusToFahrenheit(temperature = 50) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
  
    console.log('Hasil konversi:', temperatureInFahrenheit);
}
  
// Menggunakan default value
convertCelsiusToFahrenheit(); // output: Hasil konversi: 122
  
// Menggantikan default value
convertCelsiusToFahrenheit(90); // output: Hasil konversi: 194

// ----------------------------------------------------------------------

// RETURN VALUE //
function sumNumbers(a, b) {
    const result = a + b;
    return result;
}
  
const result = sumNumbers(2, 4);
console.log('2 + 4:', result);
  
function generateGreetingWorldMessage() {
    return 'Halo, dunia!';
    console.log('Aku tidak akan tampil!');
}
   
const message = generateGreetingWorldMessage();
console.log(message);
   
function convertCelsiusToFahrenheit3(temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
}

const temperature = 90;
const temperatureInFahrenheit3 = convertCelsiusToFahrenheit3(temperature);
console.log('Hasil konversi:', temperatureInFahrenheit3);
  
// ----------------------------------------------------------------------

// FUNCTION EXPRESSION //

function convertCelsiusToFahrenheit4 (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
};
  
const temperatureInFahrenheit4 = convertCelsiusToFahrenheit4(90);
console.log('Hasil konversi:', temperatureInFahrenheit4);

// First-Class Citizen
    // Nilai argumen function lain
    function multiply(a, b) {
        return a * b;
    }
      
    function calculate(operation, numA, numB) {
        return operation(numA, numB);
    }
      
    const result2 = calculate(multiply, 2, 4);
    console.log(result2);
    
    // Mengembalikan nilai function dari suatu funtion
    function multiplier(x) {
        return function (num) {
          return x * num;
        };
    }
      
    const double = multiplier(2);
    const triple = multiplier(3);
      
    console.log(double(10));
    console.log(triple(11));
      
// ----------------------------------------------------------------------

// ARROW FUNCTION //
let temperatureInFahrenheit5 = null;

// Deklarasi function dengan Regular Function
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit5 = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit5);
// Hasil ==> Hasil konversi: 194

// Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit5 = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit5);
// Hasil ==> Hasil konversi: 194

    // Refactor
    let temperatureInFahrenheit6;

    // Arrow function
    const convertCelsiusToFahrenheit5 = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
    };

    temperatureInFahrenheit6 = convertCelsiusToFahrenheit5(90);
    console.log('Hasil konversi:', temperatureInFahrenheit6);

    // Arrow function versi ringkas
    const convertCelsiusToFahrenheitInConciseSyntax = 
    (temperature) => (9 / 5) * temperature + 32;

    temperatureInFahrenheit6 = convertCelsiusToFahrenheitInConciseSyntax(90);
    console.log('Hasil konversi:', temperatureInFahrenheit6);