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