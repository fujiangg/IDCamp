// ASYNCHRONOUS PROCESS

// SIMULASI SETTIMEOUT
const estimationTime = 10_000;

setTimeout(() => {
  console.log('Hello, world!');
}, estimationTime);

/* Output:
Hello, world!
*/

import { makeCoffee, sendCoffee } from './coffee.mjs';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then(
    (value) => {
      return sendCoffee(value);
    })
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya`);
  })
  .catch((error) => {
      console.log(error.message);
      throw error;
  });


