/* Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
 */

function spinWords(string) {
  const stringSplit = string.split(" ");
  const newArr = [];
  for (let i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i].length < 5) {
      newArr.push(stringSplit[i]);
    } else {
      newArr.push(stringSplit[i].split("").reverse().join(""));
    }
  }
  return newArr.join(" ");
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(
  spinWords("You are almost to the last test"),
  "You are tsomla to the last test"
);
