// FUNCTIONAL PROGRAMMING
// IMPERATIVE STYLE
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]s

// DEKLARATIVE STYLE
const firstNames = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newFirstNamesWithExcMark = firstNames.map((firstNames) => `${firstNames}!`);

console.log(newFirstNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

// ----------------------------------------------------------------------

// PURE & IMPURE FUNCTION
// Example of adding value program
// 1. Impure Function
  let value = 0 ;

  function addWidth(addingValue) {
    value += addingValue;
    console.log(`Current value is ${value}`);
    return value;
  }

  const result1 = addWidth(1); // Output: Current value is 1
  const result2 = addWidth(1); // Output: Current value is 2
  const result3 = addWidth(1); // Output: Current value is 3

  console.log(result1, result2, result3);

    // # MENGUBAH NILAI VARIABLE GLOBAL
    let count = 0;
    function increment() {
      count++;
    }

    // #MENGAKSES WAKTU SISTEM
    function getCurrentTime() {
      return new Date().toLocaleDateString();
    }

    // # MENGAKSES STATUS OBJEK YANG DITERIMA SEBAGAI PARAMETER
    function updateUser(user) {
      user.name = "Updated User";
    }

    // # MENULIS KE BERKAS
    const fs = require('fs');
    function writeToFile(data) {
      fs.writeFileSync('data.txt', data);
    }  