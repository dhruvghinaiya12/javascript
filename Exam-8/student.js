import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let student = JSON.parse(localStorage.getItem("student")) || [];

const Studentdata = (student) => {
  document.getElementById("studentData").innerHTML = "";
  document.getElementById("msg").innerHTML = "";
  if (student.length === 0) {
    filter.innerHTML = `
   <div class="no-products-message">
      <p class="no-products">
       no student data added yet, It’s time to! Add student data now.....
        </p> 
       <a href="/Exam-8/index.html" class="add-product-link">click here to add student data...</a>
    </div>
    `;
  } else {
    let label = document.createElement("div");
    label.className = "Cart-Header";
    let labelproduct = document.createElement("h3");
    labelproduct.innerHTML = "Student name";
    let labelCategory = document.createElement("h3");
    labelCategory.innerHTML = "Course";
    let labelPrice =document.createElement("h3");
    labelPrice.innerHTML = "Fees";
    let labelQuantity = document.createElement("h3");
    labelQuantity.innerHTML = "Grid";
    let labelAmount = document.createElement("h3");
    labelAmount.innerHTML = "Number";

    label.append(
      labelproduct,
      labelQuantity,
      labelCategory,
      labelPrice,
      labelAmount
    );
    document.getElementById("studentData").append(label);
    
    student.map((ele) => {
      let div = document.createElement("div");
      div.className = "main-div";
      let h1 = document.createElement("h1");
      h1.innerHTML = ele.username;
      let course = document.createElement("p");
      course.innerHTML = ele.course;
      let fees = document.createElement("p");
      fees.innerHTML = ele.fees;
      let grid = document.createElement("p");
      grid.innerHTML = ele.grid;
      let num = document.createElement("p");
      num.innerHTML = ele.number;
      div.append(h1, grid, course, fees, num);
      document.getElementById("studentData").append(div);
    });
  }

};
Studentdata(student);

let filterStudents = [...student];

const handlesort = (orderby) => {
  if (orderby === "lth") {
    filterStudents.sort((a, b) => a.fees - b.fees);
  } else {
    filterStudents.sort((a, b) => b.fees - a.fees);
  }
  Studentdata(filterStudents);
};

document.getElementById("sorting").addEventListener("change", (e) => {
  handlesort(e.target.value);
});

const filterByCourse = (course) => {
  if (course === "all") {
    filterStudents = [...student];
  } else {
    filterStudents = student.filter((ele) => ele.course === course);
    if (filterStudents.length === 0) {
      alert(`No students found for the course "${course}"`);
      filterStudents = [...student];
    }
  }
  Studentdata(filterStudents);
};

document.getElementById("filtering").addEventListener("change", (e) => {
  filterByCourse(e.target.value);
});

const search = (e) => {
  e.preventDefault();
  let searchValue = document.getElementById("searching").value;
  filterStudents = student.filter((ele) =>
    ele.username.toLowerCase().includes(searchValue.toLowerCase())
  );
  Studentdata(filterStudents);
};
document.getElementById("search").addEventListener("click", search);
