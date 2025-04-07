/*
Description:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

function findOdd(A) {
  let numbers = [];
  for (let i = 0; i < A.length; i++) {
    numbers = A.filter((a) => a === A[i]);
    if (numbers.length % 2 !== 0) {
      return A[i];
    }
  }
}

console.log(findOdd([7]), 7);
console.log(findOdd([0]), 0);
console.log(findOdd([1, 1, 2]), 2);
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4);
console.log(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
  5
);

const findOdd1 = (xs) => xs.reduce((a, b) => a ^ b);

/*XOR taisyklės:
A	B	A ^ B
0	0	0
0	1	1
1	0	1
1	1	0
Taigi:

Jei bitai skirtingi → rezultatas 1

Jei bitai vienodi → rezultatas 0


[1, 2, 3, 2, 3, 1, 5]
1 ^ 1 = 0

2 ^ 2 = 0

3 ^ 3 = 0

0 ^ 5 = 5

Visi skaičiai, kurie pasikartoja lyginiu skaičiumi, išsikompensuoja (XOR duoda 0), ir lieka tik tas vienas, kuris pasikartojo nelyginį skaičių kartų.

Kitaip tariant:
XOR padeda „atšaukti“ lyginius pasikartojimus, o nelyginis – „lieka gyvas“ 😄 */

function findOdd(A) {
  return A.find((number) => A.filter((n) => number === n).length % 2);
}
