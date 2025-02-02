// TESTING DALAM NODE.JS

/* SKENARIO :
* 1. Function add dapat mengoperasikan penjumlahan aritmetika dengan baik.
* 2. Function add membangkitkan error jika nilai argumen dari numA tidak bertipe number.
* 3. Function add membangkitkan error jika nilai argumen dari numB tidak bertipe number
*/

export function add(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
        throw new Error('Expected a number');
    }
    
    return numA + numB;
}