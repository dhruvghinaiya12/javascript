import ApiMethods, { navbar } from "./components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

const AddData = async (e) => {
  e.preventDefault();

  let Data = {
    question: document.getElementById("Que").value,
    option1: document.getElementById("option-a").value,
    option2: document.getElementById("option-b").value,
    option3: document.getElementById("option-c").value,
    option4: document.getElementById("option-d").value,
    answer: document.getElementById("answer").value,
  };
  if (
    Data.answer !== Data.option1 &&
    Data.answer !== Data.option2 &&
    Data.answer !== Data.option3 &&
    Data.answer !== Data.option4
  ) {
    alert("enter correct answer.");
    return;
  }
  if (
    Data.option1 === Data.option2 ||
    Data.option1 === Data.option3 ||
    Data.option1 === Data.option4 ||
    Data.option2 === Data.option3 ||
    Data.option2 === Data.option4 ||
    Data.option3 === Data.option4
  ) {
    alert("Make sure all options are different.");
    return;
  }
  await postData(Data);
};

document.getElementById("UserData").addEventListener("submit", AddData);

const postData = async (Data) => {
  await ApiMethods.post(Data);
};
