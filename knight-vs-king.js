function knightVsKing(knightPosition, kingPosition) {
  const row = ["A", "B", "C", "D", "E", "F", "G", "H"];
  if (
    (Math.abs(knightPosition[0] - kingPosition[0]) === 2 &&
      Math.abs(
        row.indexOf(knightPosition[1]) - row.indexOf(kingPosition[1])
      ) === 1) ||
    (Math.abs(knightPosition[0] - kingPosition[0]) === 1 &&
      Math.abs(
        row.indexOf(knightPosition[1]) - row.indexOf(kingPosition[1])
      ) === 2)
  ) {
    return "Knight";
  }
  if (
    (Math.abs(kingPosition[0] - knightPosition[0]) === 1 &&
      Math.abs(
        row.indexOf(kingPosition[1]) - row.indexOf(knightPosition[1])
      ) === 1) ||
    (Math.abs(kingPosition[0] - knightPosition[0]) === 0 &&
      Math.abs(
        row.indexOf(kingPosition[1]) - row.indexOf(knightPosition[1])
      ) === 1) ||
    (Math.abs(kingPosition[0] - knightPosition[0]) === 1 &&
      Math.abs(
        row.indexOf(kingPosition[1]) - row.indexOf(knightPosition[1])
      ) === 0)
  ) {
    return "King";
  } else {
    return "None";
  }
}

console.log(knightVsKing([4, "C"], [6, "D"]), "Knight");
console.log(knightVsKing([7, "B"], [6, "C"]), "King");
console.log(knightVsKing([2, "F"], [6, "B"]), "None");

function knightVsKing([x1, y1], [x2, y2]) {
  y1 = y1.charCodeAt();
  y2 = y2.charCodeAt();
  let d = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
  return d < 3 ? "King" : d == 5 ? "Knight" : "None";
}
