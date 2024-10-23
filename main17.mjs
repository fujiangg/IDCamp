// TESTING DALAM NODE.JS

/* SKENARIO :
* 1. Function add dapat mengoperasikan penjumlahan aritmetika dengan baik.
* 2. Function add membangkitkan error jika nilai argumen dari numA tidak bertipe number.
* 3. Function add membangkitkan error jika nilai argumen dari numB tidak bertipe number
*/

import { describe, test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

describe('Calculator', () => {
   test('should add correctly', () => {
        // Arrange
        const operandA = 1;
        const operandB = 1;

        // Action
        const actualValue = add(operandA, operandB);

        // Assert
        const expectedValue = 2;
        assert.equal(actualValue, expectedValue);
    });

    test('should throw an error if string passed on numA parameter', () => {
        const potentialErrorToBeThrew = () => {
            // Arrange
            const operandA = '5';
            const operandB = 4;
        
            // Action
            add(operandA, operandB);
        };
  
        // Assert
        assert.throws(potentialErrorToBeThrew, Error);
    });

    test('should throw an error if string passed on numB parameter', () => {
        const potentialErrorToBeThrew = () => {
            // Arrange
            const operandA = 10;
            const operandB = '8';
        
            // Action
            add(operandA, operandB);
        };
    
        // Assert
        assert.throws(potentialErrorToBeThrew, Error);
    }); 
})

