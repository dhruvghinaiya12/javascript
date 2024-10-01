import ApiMethods, { navbar } from "./components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

const content = async () => {
  let allData = await ApiMethods.get();
  document.getElementById("mcq").innerHTML = "";

  let correctCount = 0;
  let incorrectCount = 0;

  allData.map((item, index) => {
    let div = document.createElement("div");
    div.className = "main-data";
    div.innerHTML = `
    <form class="mcq-form">
        <p>Question ${index + 1}: ${item.question}</p>
        <div class="option after-select">
          <input type="radio" name="question${index}" value="${item.option1}">
          <span>A. ${item.option1}</span>
        </div>
        <div class="option after-select">
          <input type="radio" name="question${index}" value="${item.option2}">
          <span>B. ${item.option2}</span>
        </div>
        <div class="option after-select">
          <input type="radio" name="question${index}" value="${item.option3}">
          <span>C. ${item.option3}</span>
        </div>
        <div class="option after-select">
          <input type="radio" name="question${index}" value="${item.option4}">
          <span>D. ${item.option4}</span>
        </div>
      </form>`;

    document.getElementById("mcq").append(div);

    let options = div.querySelectorAll('input[type="radio"]');
    options.forEach((option) => { 
      option.addEventListener("change", () => {
        document.getElementById("result").style.display ="block";
        options.forEach((opt) => (opt.disabled = true));
        if (option.value === item.answer) {
          document.getElementById("correct").innerHTML = `correct answer: ${++correctCount}`;
          option.parentElement.classList.add("correct");
        } else {
          document.getElementById("wrong").innerHTML = `wrong answer: ${++incorrectCount}`;
          option.parentElement.classList.add("incorrect");
        }
      });
    });
  });
};
content();
