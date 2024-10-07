// FUNCTIONAL PROGRAMMING
// IMPERATIVE STYLE
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]s

// DEKLARATIF STYLE
const firstNames = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newFirstNamesWithExcMark = firstNames.map((firstNames) => `${firstNames}!`);

console.log(newFirstNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]