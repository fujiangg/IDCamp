import { doSomething } from './utils.mjs';

async function promiseWithAsyncAwait() {
    console.log('Start.');

    const result = await doSomething();
    console.log(result);

    console.log('End.');
}

promiseWithAsyncAwait();

/* Output:
Start.
You did it.
End.
*/