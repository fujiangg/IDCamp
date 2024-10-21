// TypeScript Superset JavaScript

const myName: string = 'TypeScript';
 
function greet(name: string) {
  console.log(`Hello, ${name}. My name is ${myName}`);
}
 
greet('JavaScript');

function add(numA: number, numB: number): number {
    return numA + numB;
}
   
const result = add(2, 4);
console.log('Hasil:', result);