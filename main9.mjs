import { doSomething } from './main9-2.mjs';

function onFulfilled(doSomethingData) {
    // Do your jobs when "fulfilled" happens...
    console.log(doSomethingData);
}

function onRejected(doSomethingError) {
    // Do your jobs when "rejected" happens...
    console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);