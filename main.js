// Day 29
// *Question 1: Calculate the Product of Non-Zero Digits*
// Description:
// Write a TypeScript function that takes a number as input and returns the product of all non-zero digits in the number.
// Example:
// typescript
// Input: 4056
// Output: 120  // 4 * 5 * 6 = 120
// Input: 1002
// Output: 2  // 1 * 2 = 2
function non_Zero_Digits(num) {
    var count = 1;
    while (num > 0) {
        var digits = num % 10;
        if (digits !== 0) {
            count *= digits;
        }
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(non_Zero_Digits(4056));
console.log(non_Zero_Digits(1002));
// Hint: Loop through each digit, skip zeros, and multiply the rest.
// ---
// *Question 2: Find the Difference Between the Largest and Smallest Digit*
// Description:
// Write a TypeScript function that takes a number as input and returns the difference between its largest and smallest digits.
// Example:
// typescript
// Input: 7593
// Output: 6  // 9 - 3 = 6
// Input: 12345
// Output: 4  // 5 - 1 = 4
// Hint: Convert the number to a string or use a loop to identify the largest and smallest digits, then calculate their difference.
function largest_And_Smallest(num1) {
    var largest_Digits = -Infinity;
    var smallest_Digits = Infinity;
    while (num1 > 0) {
        var digits = num1 % 10;
        if (digits > largest_Digits) {
            largest_Digits = digits;
        }
        if (digits < smallest_Digits) {
            smallest_Digits = digits;
        }
        num1 = Math.floor(num1 / 10);
    }
    return largest_Digits - smallest_Digits;
}
;
console.log(largest_And_Smallest(7593));
console.log(largest_And_Smallest(12345));
