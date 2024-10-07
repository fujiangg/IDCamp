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
// 1. IMPURE FUNCTION
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
    
  // 2. PURE FUNCTION
  function addWidth2(value, addingValue) {
    return value + addingValue;
  } 

  const result4 = addWidth2(0, 4);
  console.log(`result 4 is ${result4}`); // Output: result 4 is 4

  const result5 = addWidth2(0, 5);
  console.log(`result 5 is ${result5}`); // Output: result 5 is 5

  const result6 = addWidth2(0, 6);
  console.log(`result 6 is ${result6}`); // Output: result 6 is 6

  console.log(result4, result5, result6);

    // # MENGHITUNG TOTAL HARGA PESANAN TANPA MENGUBAH INPUT
    function calculateTotalPrice(orderItems) {
      return orderItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    }

    // # MEMFILTER DAN MEMETAKAN DATA TANPA MENGUBAH ARRAY ASLI
    function getActiveUserNames(users) {
      return users
        .filter(user => user.isActive)
        .map(user => user.username);
    }

    // # MEMBUAT OBJEK BARU BERDASARKAN INPUT TANPA MENGUBAH INPUT ASLI
    function createUserProfile(user, address) {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
          street: address.street,
          city: address.city,
          country: address.country
        }
      };
    }

    // # MENGGABUNGKAN DUA OBJEK TANPA MENGUBAH OBJEK ASLI
    function mergeSettings(defaultSettings, userSettings) {
      return {
        ...defaultSettings,
        ...userSettings
      };
    }

// ----------------------------------------------------------------------

// HIGH-ORDER FUNCTION
// MENERIMA FUNGSI LAIN SEBAGAI ARGUMEN
function apply(operation, ...args) {
// kita bisa menambahkan kode lain sebelum operation dijalankan.
  
  return operation(...args)
}

function sum(a, b, c) {
  return a + b + c;
}

function discount(disc, value) {
  return value - ((disc / 100) * value);
}

const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log('Product price:', productPrice); // Output: Product price: 400
console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 300

// MEMOIZATION PURE FUNCTION
// menerima argumen sebuah fungsi
function memoize(fn) {
  const cache = new Map();

  // mengembalikan nilai berupa fungsi
  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}

function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);

console.time('Memoized Sum First Call');
console.log('Total:', memoizedSumArray(largeArray));
console.timeEnd('Memoized Sum First Call');

console.time('Memoized Sum Second Call (Cached)');
console.log('Total:', memoizedSumArray(largeArray));
console.timeEnd('Memoized Sum Second Call (Cached)');

// CURRYING
function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}.`;
  }
}

function multipleBy(x) {
  return function(y) {
    return x * y;
  }
}

const coolifier = adjectivfy('keren');
const funnifier = adjectivfy('seru');

const multipleByFive = multipleBy(5);

console.log(coolifier('Dicoding')); // Output: Dicoding keren.
console.log(funnifier('JavaScript')); // Output: JavaScript seru.
console.log(multipleByFive(7)); // Output: 35
console.log(multipleByFive(10)); // Output: 50

// KOMPOSISI FUNGSI
function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

function compose(f, g) {
  return (x) => {
    return f(g(x));
  }
}

const addOneAndSquare = compose(square, addOne);

console.log(addOneAndSquare(2)); // output: 9

// ARRAY MAP
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]

// ----------------------------------------------------------------------

// RECURSIVE
// For Loop
function generateArray(n) {
  const result = [];
  for (let counter = 0; counter <= n; counter += 1) {
    result.push(counter);
  }
  return result;
}

console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

// Recursive
function generateArray2(n) {
  if (n < 0) {
    return [];
  }

  return [...generateArray2(n - 1), n];
}

console.log(generateArray2(5)); // Output: [0, 1, 2, 3, 4, 5]

// ----------------------------------------------------------------------

// IMMUTABILITY
// Mutator Function
function max(arrayOfNumbers) {
  return arrayOfNumbers
    .sort((a, b) => a - b)
    .pop();
}

const numbers2 = [10, 23, 24, 7, 42, 18];
const largest = max(numbers2);

console.log(largest); // Output: 42
console.log(numbers2); // Output: [ 7, 10, 18, 23, 24 ]

function registerEmail(person, email) {
  return Object.assign(person, { email });
}

const person = {
  name: 'John',
  username: 'johndoe',
};

const personWithEmail = registerEmail(person, 'john@dicoding.com');

console.log(person); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }

// Immutable (Duplikasi alih-alih mengubah nilainya)
function max2(arrayOfNumber) {
  // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
  return [...arrayOfNumber]
    .sort((a, b) => a - b)
    .pop();
}

function registerEmail2(person, email) {
  // menggunakan spread operator untuk menduplikasi nilai person
  return { ...person, email };
}

const numbers3 = [10, 23, 24, 7, 42, 18];
const largest2 = max2(numbers3);

console.log(largest2); // Output: 42
console.log(numbers3); // Output: [ 10, 23, 24, 7, 42, 18 ]

const person2 = {
  name: 'John',
  username: 'johndoe',
};

const personWithEmail2 = registerEmail2(person2, 'john@dicoding.com');

console.log(person2); // Output: { name: 'John', username: 'johndoe' }
console.log(personWithEmail2); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }

// IMMUTABLE ARRAY METHODS
// 1. Array Map
  const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => `${name}!`);

  console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

// 2. Array Filter
  const truthyArray = [1, '', 'Halo', 0, null, 'Harry', 14]
    .filter((item) => Boolean(item));

  console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]

  const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
  console.log(eligibleForScholarshipStudents);
  
  /**
   * Output:
   * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
   * 
   */

// 3. Array Reduce
  const students2 = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];

  const totalScore = students2.reduce((acc, student) => acc + student.score, 0);

  console.log(totalScore); // Output: 313

// IMMUTABLE OBJECT
// Pembekuan tingkat pertama
  const user = {
    name: 'John',
    email: 'john@dicoding.com',
  };

  // Membekukan objek user
  Object.freeze(user);

  // Mencoba mengubah properti dari objek yang dibekukan
  user.email = 'doe@dicoding.com';
  console.log(user); // Output: { name: 'John', email: 'john@dicoding.com' }

// Pembekuan tingkat terakhir
  function deepFreeze(object) {
    Object.keys(object).forEach((name) => {
      const prop = object[name];
      if (typeof prop == 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });

    return Object.freeze(object);
  }

  const complexUser = {
    name: 'Bob',
    email: 'bob@dicoding.com',
    preferences: {
      newsletter: true,
      notifications: 'weekly',
      address: {
        city: 'New York',
        zip: '10001'
      }
    }
  };

  deepFreeze(complexUser);

  // Diabaikan
  complexUser.preferences.address.city = 'Los Angeles';

  console.log(complexUser.preferences.address.city); // Output: 'New York'