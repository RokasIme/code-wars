/* 
🔹 Understanding the Pattern
From the test cases, we can see a relationship between:

The input sequence (e.g., ["run", "jump", "run", "jump", "run"])
The expected output format (e.g., "_|_|_", "x|x|x")
By examining patterns:

"run" seems to be represented as _
"jump" seems to be represented as x
Sequences of "run" and "jump" create mixed patterns
🔹 Identified Rules
First output (_|_|_) stays constant in all test cases.
Second output changes based on "jump" and "run" sequences:
All "run" → "_/_/_" (slashes / separate continuous runs)
All "jump" → "x|x|x" (pipe | separates jumps)
Alternating "run" and "jump" → "x/x/x" (slashes / separate jumps and runs)
"jump" followed by "run" (["jump", "run", "jump", "run", "jump"]) → "x/x/x"
*/

function testit(act, s) {
  let judesys = act;
  for (let i = 0; i < judesys.length; i++) {
    if (s[i] === "_" && judesys[i] === "jump") {
      judesys[i] = "x";
    }
    if (s[i] === "_" && judesys[i] === "run") {
      judesys[i] = "_";
    }
    if (s[i] === "|" && judesys[i] === "jump") {
      judesys[i] = "|";
    }
    if (s[i] === "|" && judesys[i] === "run") {
      judesys[i] = "/";
    }
  }
  judesys = judesys.join("");

  return judesys;
}

console.log(testit(["run", "jump", "run", "jump", "run"], "_|_|_"), "_|_|_");
console.log(testit(["run", "jump", "run", "run", "run"], "_|_|_"), "_|_/_");
console.log(testit(["run", "run", "run", "run", "run"], "_|_|_"), "_/_/_");
console.log(testit(["jump", "jump", "jump", "jump", "jump"], "_|_|_"), "x|x|x");
console.log(testit(["jump", "run", "jump", "run", "jump"], "_|_|_"), "x/x/x");
