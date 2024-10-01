import { myFunction } from './NamedExport.mjs';

myFunction();

import { name, email, age } from './NamedExport.mjs';

console.log(name);
console.log(email);
console.log(age);

import * as variable from './NamedExport.mjs';

console.log(variable.name);
console.log(variable.email);
console.log(variable.age);
console.log(variable.telp);

import { myFunction as NamedExport2Function } from './NamedExport2.mjs';
import { myFunction as NamedExport3Function } from './NamedExport3.mjs';

NamedExport2Function();
NamedExport3Function();