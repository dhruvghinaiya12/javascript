let str = "rd";

let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let n = false;

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    n = true;
  }
}
console.log(n);
