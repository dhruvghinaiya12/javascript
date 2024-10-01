import ApiMethods, { navbar } from "./components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

const content=async()=>{
    let allData =await ApiMethods.get()
    document.getElementById("mcq").innerHTML = "";
    allData.map((item)=>{
        let div = document.createElement("div");
        div.className = "product";
      let question = document.createElement("p");
      question.innerHTML = `Question: ${item.question}`;
      let answer = document.createElement("p");
      answer.innerHTML = item.answer;
      div.append(question,answer);
        document.getElementById("mcq").append(div);
    })
}

content()