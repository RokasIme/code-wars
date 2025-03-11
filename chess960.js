/*
The two bishops "B" must start on differently colored squares.
The rooks "R" must be located on either side of the king "K"; in other words, the king must be placed on a square between the two rooks.
*/

function isValidChess960(pieces) {
  const psplit = pieces.split("");
  if (
    (psplit.lastIndexOf("B") - psplit.indexOf("B") === 1 ||
      psplit.lastIndexOf("B") - psplit.indexOf("B") === 3 ||
      psplit.lastIndexOf("B") - psplit.indexOf("B") === 5 ||
      psplit.lastIndexOf("B") - psplit.indexOf("B") === 7) &&
    psplit.indexOf("R") - psplit.indexOf("K") < 0 &&
    psplit.lastIndexOf("R") - psplit.indexOf("K") > 0
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidChess960("RNBQKBNR"), "true");
console.log(isValidChess960("QNNBBRKR"), true);
console.log(isValidChess960("QRNNBBRK"), false);
console.log(isValidChess960("QNBNBRKR"), false);

function isValidChess960(pieces) {
  let arr = pieces.split("");
  if (
    arr.indexOf("R") < arr.indexOf("K") &&
    arr.lastIndexOf("R") > arr.indexOf("K")
  ) {
    if (arr.indexOf("B") % 2 != arr.lastIndexOf("B") % 2) {
      return true;
    }
  }
  return false;
}
