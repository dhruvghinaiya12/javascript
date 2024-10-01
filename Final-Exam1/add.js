import ApiMethods, { navbar } from "./components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


const AddData = async (e) => {
    e.preventDefault();
  
let Data={
   question:document.getElementById("Que").value,
   option1:document.getElementById("option-a").value,
   option2:document.getElementById("option-b").value,
   option3:document.getElementById("option-c").value,
   option4:document.getElementById("option-d").value,
   answer:document.getElementById("answer").value
}
await postData(Data);
};

document.getElementById("UserData").addEventListener("submit", AddData);

const postData = async (Data) => {
    await ApiMethods.post(Data)
  };