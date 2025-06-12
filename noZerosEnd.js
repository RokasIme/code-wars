function noBoringZeros(n) {
  k = "0";
  m = n + "";

  if (!m.endsWith("0")) {
    return n;
  }

  for (i = m.length - 1; i > 1; i--) {
    if (m.charAt(i) === "0") {
      k === "0" ? (k = m.slice(0, -1)) : (k = k.slice(0, -1));
    } else return Number(k);
  }
  return Number(k);
}

console.log(noBoringZeros(-105));

const noBoringZeros = (n) => {
  if (n === 0) return 0;
  n = String(n).split("");

  for (let i = n.length - 1; i > 0; i--) {
    if (n[i] === "0") {
      n.pop();
    } else {
      return +n.join("");
    }
  }
};
