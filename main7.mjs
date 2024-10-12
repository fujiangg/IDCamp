// ASYNCHRONOUS PROCESS

// SIMULASI SETTIMEOUT
const estimationTime = 10_000;

setTimeout(() => {
  console.log('Hello, world!');
}, estimationTime);

/* Output:
Hello, world!
*/

import { makeCoffee, sendCoffee, drinkCoffee } from './coffee.mjs';

console.log('Saya memesan kopi di kafe.');

makeCoffee(() => {
  sendCoffee(() => {
      console.log('Pramusaji memberikan kopi pesanan.');
      console.log('Saya mendapatkan kopi.');
    drinkCoffee(() => {
      console.log('Saya menghabiskan kopi, mm sangat enak!')
    })
  });
});
