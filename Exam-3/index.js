let users = [];

const handledata = (e) => {
  e.preventDefault();
  let employeename = document.getElementById("employeename").value;
  let email = document.getElementById("email").value;
  let department = document.getElementById("department").value;
  let experience = document.getElementById("experience").value;
  let salary = document.getElementById("salary").value;
  let total = users.length + 1;
  document.getElementById("totalemp").innerHTML = `TOTAL EMPLOYEES =  ${total}`;

  let totalsalary = Number(salary);
  for (let i = 0; i < users.length; i++) {
    totalsalary += Number(users[i].salary);
  }
  document.getElementById(
    "totalsal"
  ).innerHTML = `TOTAL SALARY = ${totalsalary}`;
  let user = {
    employeename: employeename,
    email: email,
    department: department,
    experience: experience,
    salary: salary,
  };
  users.push(user);
  console.log(users);
  data();
};

const data = () => {
  document.getElementById("tbody").innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = i + 1;
    let td2 = document.createElement("td");
    td2.innerHTML = users[i].employeename;
    let td3 = document.createElement("td");
    td3.innerHTML = users[i].email;
    let td4 = document.createElement("td");
    td4.innerHTML = users[i].department;
    let td5 = document.createElement("td");
    td5.innerHTML = users[i].experience;
    let td6 = document.createElement("td");
    if(users[i].experience>0) {
      if (users[i].experience > 5) {
        td6.innerHTML = "senior";
      } else {
        td6.innerHTML = "junior";
      }
    }
    let td7 = document.createElement("td");
    td7.innerHTML = users[i].salary;

    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.getElementById("tbody").append(tr);
  }
};

document.getElementById("userdata").addEventListener("submit", handledata);