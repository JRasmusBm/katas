// My first attempt, brute force with regex, many passes
function validBracesSlow(braces) {
  let previousLength = -1;

  while (previousLength !== braces.length) {
    previousLength = braces.length;
    braces = braces.replace(/({}|\[\]|\(\))/g, "");
  }

  return !braces.length;
}

const matchingClosingBrace = { "{": "}", "(": ")", "[": "]" };

function validBraces(braces) {
  const stack = [];

  for (let char of braces) {
    if (matchingClosingBrace[char]) {
      stack.push(char);
      continue;
    }
    if (matchingClosingBrace[stack.pop()] === char) {
      continue;
    }
    return false;
  }

  return !stack.length;
}


let times = 60;
let stringLength = 1e4;
const longString = "(".repeat(stringLength / 2) + ")".repeat(stringLength / 2);
let tSlowStart = Date.now();
for (let i = 0; i < times; i++) {
  validBracesSlow(longString);
}
let tSlowEnd = Date.now();
let tFastStart = Date.now();
for (let i = 0; i < times; i++) {
  validBracesFast(longString);
}
let tFastEnd = Date.now();

console.log(`SLOW: ${(tSlowEnd - tSlowStart) / times}`);
console.log(`FAST: ${(tFastEnd - tFastStart) / times}`);

// console.log(validBraces("(){}[]") === true);
// console.log(validBraces("([{}])") === true);
// console.log(validBraces("(}") === false);
// console.log(validBraces("[(])") === false);
// console.log(validBraces("[({})](]") === false);
