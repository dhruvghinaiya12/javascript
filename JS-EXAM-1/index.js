// Addition

const add = () => {
  let a = document.getElementById("num1").value;
  let b = document.getElementById("num2").value;

  if (b != 0 && a != 0) {
    let result = Number(a) + Number(b);

    document.getElementById(
      "result"
    ).innerHTML = `The result of addition is ${result}`;
  } else {
    document.getElementById("result").innerHTML = `Please enter valid numbers`;
  }
};

// Substraction
const sub = () => {
  let a = document.getElementById("num1").value;
  let b = document.getElementById("num2").value;

  if (b != 0 && a != 0) {
    let result = a - b;

    document.getElementById(
      "result"
    ).innerHTML = `The result of subtraction is ${result}`;
  } else {
    document.getElementById("result").innerHTML = `Please enter valid numbers`;
  }
};

// multiplication
const multiply = () => {
  let a = document.getElementById("num1").value;
  let b = document.getElementById("num2").value;

  if (b != 0 && a != 0) {
    let result = a * b;

    document.getElementById(
      "result"
    ).innerHTML = `The result of multiplication is ${result}`;
  } else {
    document.getElementById("result").innerHTML = `Please enter valid numbers`;
  }
};

// Division
const divide = () => {
  let a = document.getElementById("num1").value;
  let b = document.getElementById("num2").value;

  if (b != 0) {
    let result = a / b;

    document.getElementById(
      "result"
    ).innerHTML = `The result of division is ${result}`;
  } else {
    document.getElementById("result").innerHTML = `Cannot divide by zero`;
  }
};
