const product = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let num4 = document.getElementById("num4").value;
  let num5 = document.getElementById("num5").value;

  let product = num1 * num2 * num3 * num4 * num5;

  document.getElementById("output").innerHTML = `product is ${product}`;
};
