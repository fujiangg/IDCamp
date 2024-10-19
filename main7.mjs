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

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
  if (makeCoffeeError) {
    // Do something with error
    console.log(makeCoffeeError);
    return;
  }

  sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
    if (sendCoffeeError) {
      // Do something with error
      console.log(sendCoffeeError);
      return;
    }

  console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan`);
  console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya`);
  })
})
