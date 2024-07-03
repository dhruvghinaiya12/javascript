const sum = () => {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = document.getElementById("num3").value;
    let result1 = document.getElementById("output1");
    let result2 = document.getElementById("output2");
    let result3 = document.getElementById("output3");
    document.getElementById("output1").innerHTML = `${a}`;
    document.getElementById("output2").innerHTML = `${b}`;
    document.getElementById("output3").innerHTML = `${c}`;
}