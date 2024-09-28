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