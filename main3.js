// BUKAN SEMBARANG DATA

// MENSTRUKTURKAN DATA DENGAN OBJECT
// MEMBUAT OBJECT
// 1. Metode Literals {}
    const product = {};
    const user1 = {
        name: 'Dicoding',
        'last name': 'Indonesia',
        age: 9,
    };

    console.log(product, user1); // Output: { name: 'Dicoding', 'last name': 'Indonesia', age: 9 }

// MENGAKSES PROPERTY OBJECT
// 1. Menggunakan dot (.)
    const user2 = {
        name: 'Dicoding',
        'last name': 'Indonesia',
        age: 9,
    };
    
    console.log(user2.name); // Output: Dicoding
// 2. Menggunakan Square Bracket
    const user3 = {
        name: 'Dicoding',
        'last name': 'Indonesia',
        age: 9,
    };
    
    console.log(user3['last name']); // Output: Indonesia
// 3. Menggunakan Object Destructuring
    const user4 = {
        'name': 'Dicoding',
        'lastName': 'Indonesia',
        age: 9
    };
    
    const { name, lastName } = user4;
    console.log(name, lastName); // Output: Dicoding Indonesia
    // Dengan Default Value (agar tidak mengembalikan nilai undefined)
    const user5 = {
        'name': 'Dicoding',
        'Last name': 'Indonesia',
        age: 9
      };
      
    const { isMale = false } = user5;
    console.log(isMale); // Output: false

// MENGUBAH NILAI PROPERTY OBJECT
const account = {
    balance: 1000,
    debt: 10,
  };
  
account.balance = 2000;
console.log(account.balance); // Output: 2000

// MENGHAPUS PROPERTY OBJECT
const user6 = {
    'name': 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
};
  
delete user6['age'];
console.log(user6); // Output: { name: 'Dicoding', lastName: 'Indonesia' }

// ----------------------------------------------------------------------

// MENSTRUKTURKAN DATA DENGAN ARRAY
// MEMBUAT ARRAY
// 1. Menggunakan Object Constructor
    const users = new Array();
    const numbers = new Array(5);

    console.log(users); // Output [];
    console.log(numbers); // Output <5 empty items>
// 2. Menggunakan Array.from
    const foo = Array.from('foo');
    console.log(foo); // Output: ['f', 'o', 'o']
// 3. Menggunakan Array Literal
    const fruits = ['apple', 'banana', 'cherry', '', 'grape'];
    console.log(fruits); // Output: ['apple', 'banana', 'cherry', '', 'grape']

// MENGAKSES ELEMENT ARRAY
const myArray1 = [42, 55, 30];
console.log(myArray1[1]); // Output: 55

// MANIPULASI NILAI ARRAY
// 1. Indexing
    const myArray2 = [1, 2, 3, 4, 5];
    myArray2[1] = 10;
    console.log(myArray2); // Output: [1, 10, 3, 4, 5]
// 2. Push
    const myArray3 = [1, 2, 3, 4, 5];
    myArray3.push(6);
    console.log(myArray3); // Output: [1, 2, 3, 4, 5, 6]

// MENGHAPUS ELEMENT & DATA ARRAY
// 1. Hapus Data
    const myArray4 = ['Android', 'Data Science', 'Web'];
    delete myArray4[1];

    console.log(myArray4); // Output: ['Android', <1 empty item>, 'Web']
// 2. Hapus Element & Data
    const myArray5 = ['Android', 'Data Science', 'Web'];
    myArray5.splice(1, 1);
    
    console.log(myArray5); // Output: ['Android', 'Web']

    const myArray6 = ['Android', 'Data Science', 'Web'];
    myArray6.splice(1, 2);

    console.log(myArray6); // Output: ['Android'']
// 3. Menghapus Element Pertama
    const myArray7 = ['Android', 'Data Science', 'Web'];
    myArray7.shift();

    console.log(myArray7); // Output: ['Data Science', 'Web']
// 4. Menghapus Element Terakhir
    const myArray8 = ['Android', 'Data Science', 'Web'];
    myArray8.pop();

    console.log(myArray8); // Output: ["Android", "Data Science"]

// ARRAY DESTRUCTURING
const introduction = ['Hello', 'Arsy'];
const [greeting, named] = introduction;
console.log(greeting); // Output: Hello

// ARRAY METHOD
// 1. Reverse
    const myArray9 = ['Android', 'Data Science', 'Web'];
    myArray9.reverse();

    console.log(myArray9); // Output: [ 'Web', 'Data Science', 'Android' ]
// 2. Sort
    const myArray10 = ['Web', 'Android', 'Data Science'];
    myArray10.sort();

    console.log(myArray10); // Output: [ 'Android', 'Data Science', 'Web' ]
// 3. Typeof
    const array11 = [1, 2];
    console.log(typeof array11); // Output: object