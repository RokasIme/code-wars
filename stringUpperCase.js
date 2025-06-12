const upperCaseList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "V",
  "Z",
  "Q",
  "W",
  "Y",
  "X",
  " ",
  ".",
  "#",
];

String.prototype.isUpperCase = function () {
  const testString = [];
  for (let i = 0; i < this.length; i++) {
    if (upperCaseList.includes(this[i])) {
      testString.push(this[i]);
    }
  }
  if (testString.length === this.length) {
    return true;
  }
  return false;
};
console.log("hello I AM DONALD".isUpperCase());
console.log("HELLO I AM DONALD".isUpperCase());

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

String.prototype.isUpperCase = function () {
  if (this.toString() == this.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};
