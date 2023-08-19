"use strict";
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}
const numberArray = [10, 5, 22, 8, 15];
const maxNumber = findMax(numberArray);
const averageNumber = calculateAverage(numberArray);
console.log("Number Array:", numberArray);
console.log("Maximum Number:", maxNumber);
console.log("Average Number:", averageNumber);
