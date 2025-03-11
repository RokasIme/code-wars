/* 
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/

function bingo(a) {
  //  A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U V W X Y Z
  //  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
  //    ^         ^   ^             ^  ^
  if (
    a.includes(2) &&
    a.includes(7) &&
    a.includes(9) &&
    a.includes(14) &&
    a.includes(15)
  ) {
    return "WIN";
  } else {
    return "LOSE";
  }
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "LOSE");
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]), "WIN");
