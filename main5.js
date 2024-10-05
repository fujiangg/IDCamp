// MENYELAMI DUNIA OOP

// PARADIGMA BERBASIS OBJECT
// MEMBUAT CLASS & OBJECT
// 1. CONSTRUCTOR FUNCTION
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    
    Person.prototype.eat = function() {
        console.log(`${this.name} is eating`);
    }

    // Membuat object dari constructor function di atas (class)
    const person1 = new Person('Alice', 30);
    const person2 = new Person('Bob', 25);
    
    console.log(person1.name); // Output: Alice
    console.log(person2.name); // Output: Bob
    
    person1.eat();
    person2.eat();

// 2. ES6
    class Student {
        constructor(name, age) {
        this.name = name;
        this.age = age;
        }
    
        study() {
        console.log(`${this.name} is studying`);
        }
    }
  
  // Membuat instance dari Person
  const student1 = new Student('Alice', 15);
  const student2 = new Student('Bob', 17);
  
  console.log(student1.name); // Output: Alice
  console.log(student2.name); // Output: Bob
  
  student1.study(); // Output: Alice is studying
  student2.study(); // Output: Bob is studying

// ----------------------------------------------------------------------

// INSTANCE
// 1. ES6
    class SmartPhones {
        constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
        }
    
        charging() {
        console.log(`Charging ${this.model}`);
        }
    }
    
    class iOS extends SmartPhones {
        airDrop() {
        console.log('iOS have a behavior AirDrop');
        }
    }
    
    class Android extends SmartPhones {
        splitScreen() {
        console.log('Android have a Split Screen');
        }
    }
    
    const ios = new iOS('black', 'A', '12 Pro Max');
    const android = new Android('white', 'B', 'Galaxy S21');
    
    ios.charging(); // Output: Charging 12 Pro Max
    ios.airDrop(); // Output: iOS have a behavior AirDrop
    
    android.charging(); // Output: Charging Galaxy S21
    android.splitScreen(); // Output: Android have a Split Screen

// 2. CONSTRUCTION FUNCTION
/*  function SmartPhones(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    
    SmartPhones.prototype.charging = function() {
        console.log(`Charging ${this.model}`);
    };
    
    function iOS(color, brand, model) {
        SmartPhones.call(this, color, brand, model);
    }
    
    iOS.prototype = Object.create(SmartPhones.prototype);
    iOS.prototype.constructor = iOS;
    
    iOS.prototype.airDrop = function() {
        console.log('iOS have a behavior AirDrop');
    };
    
    function Android(color, brand, model) {
        SmartPhones.call(this, color, brand, model);
    }
    
    Android.prototype = Object.create(SmartPhones.prototype);
    Android.prototype.constructor = Android;
    
    Android.prototype.splitScreen = function() {
        console.log('Android have a Split Screen');
    };
    
    const ios = new iOS('black', 'A', '12 Pro Max');
    const android = new Android('white', 'B', 'Galaxy S21');
    
    ios.charging(); // Output: Charging 12 Pro Max
    ios.airDrop(); // Output: iOS have a behavior AirDrop
    
    android.charging(); // Output: Charging Galaxy S21
    android.splitScreen(); // Output: Android have a Split Screen
 */

// Mengetahui asal muasal class
console.log(ios instanceof SmartPhones); // Output: true
console.log(android instanceof SmartPhones); // Output: true

// ----------------------------------------------------------------------

// ENCAPSULATION
// Before Encapsulation
class CoffeMachine {
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this.temperature = 90;
    }
  
    makeCoffe() {
      console.log('Membuat kopi dengan suhu', this.temperature);
    }
}
  
const coffee = new CoffeMachine(100);
coffee.temperature = 60;
  
coffee.makeCoffe(); // Output: Membuat kopi dengan suhu 60

// After Encapsulation (tetapi masih bisa diubah)
class CoffeeMachine2 {
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this._temperature = 90
    }
  
    set temperature(temperature) {
      console.log('you are not allowed to change the temperature');
    }
  
    get temperature() {
      return this._temperature;
    }
}
  
const coffee2 = new CoffeeMachine2(10);
console.log('Sebelum diubah: ', coffee2.temperature);
coffee2.temperature = 100;
console.log('Setelah diubah: ', coffee2.temperature);

// After Encapsulation (tidak bisa diubah)
class CoffeeMachine3 {
    #temperature = 90;
  
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this.#temperature = this.#defaultTemperature();
    }
  
    set temperature(temperature) {
      console.log('you are not allowed to change the temperature');
    }
  
    get temperature() {
      return this.#temperature;
    }
  
    #defaultTemperature() {
      return 90;
    }
}