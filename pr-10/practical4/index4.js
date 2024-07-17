const str = (e) => {
  e.preventDefault();
  let str = document.getElementById("upper").value;
  str = str.toUpperCase();
  document.getElementById("output").innerHTML = `${str}`;
};

document.getElementById("form").addEventListener("submit", str);
