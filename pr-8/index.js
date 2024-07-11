let users = [];
const handledata = (e) => {
  e.preventDefault();
  let name = document.getElementById("username").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let salary = document.getElementById("salary").value;
  let user = {
    username: username,
    number: number,
    email: email,
    salary: salary,
  };
  users.push(user);
  console.log(users);
};
document.getElementById("userdata").addEventListener("submit", handledata);
