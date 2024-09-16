import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML= navbar()

let student = JSON.parse(localStorage.getItem("student")) || [];

const Studentdata=((student)=>{
    document.getElementById("studentData").innerHTML=""
  student.map((ele)=>{
    let div = document.createElement("div");
    div.className="main-div"
    let h1 = document.createElement("h1");
    h1.innerHTML=ele.username;
    let p = document.createElement("p");
    p.innerHTML=ele.fees;
    let grid = document.createElement("p");
    grid.innerHTML=ele.grid;
    let num=document.createElement("p")
    num.innerHTML=ele.number;
    div.append(h1,p,grid,num);
    document.getElementById("studentData").append(div);
  })
 
})
Studentdata(student)