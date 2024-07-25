let users = [];

const handleDelete = (index) => {
    users.splice(index, 1);
    content();
};


const handleSalesData = (course, count, fees) => {

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerHTML = course
    td2.innerHTML = count
    td3.innerHTML = fees
    tr.append(td1, td2, td3);
    document.getElementById("Summary").append(tr)

}


const content = () => {
    let sales = {
        FullStack: {
            count: 0,
            fees: 0
        },
        FrontEnd: {
            count: 0,
            fees: 0
        },
        BackEnd: {
            count: 0,
            fees: 0
        },
        pythonDeveloper: {
            count: 0,
            fees: 0
        },
    }

    document.getElementById("tbody").innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = users[i].username;
        let td2 = document.createElement("td");
        td2.innerHTML = users[i].grid;
        let td3 = document.createElement("td");
        td3.innerHTML = users[i].course;
        let td4 = document.createElement("td");
        td4.innerHTML = users[i].fees;
        let td5 = document.createElement("td");
        td5.innerHTML = users[i].number;
        let td6 = document.createElement("td");
        td6.innerHTML = "delete";
        td6.addEventListener("click",()=> handleDelete(i));
        document.getElementById("tbody").append(tr);
        tr.append(td1, td2, td3, td4, td5, td6);

        console.log("users[i].course", users[i].course);

        sales[users[i].course].fees += users[i].fees;
        sales[users[i].course].count += 1

    }
    document.getElementById("Summary").innerHTML=""

    handleSalesData("FullStack", sales.FullStack.count, sales.FullStack.fees)
    handleSalesData("FrontEnd", sales.FrontEnd.count, sales.FrontEnd.fees)
    handleSalesData("BackEnd", sales.BackEnd.count, sales.BackEnd.fees)
    handleSalesData("pythonDeveloper", sales.pythonDeveloper.count, sales.pythonDeveloper.fees)


};
const handleData = (e) => {
    e.preventDefault();

    let user = {
        username: document.getElementById("Name").value.trim(),
        grid: document.getElementById("grid").value,
        course: document.getElementById("course").value,
        fees: Number(document.getElementById("fees").value),
        number: document.getElementById("number").value,
    };


    if (user.username.length < 2) {
        alert("Username should be at least 2 characters long");
        return;
    }
    if (user.grid.length != 4) {
        alert("Grid should be 4 digits long");
        return;
    }
    if (
        user.number.length != 10 ||
        !["6", "7", "8", "9"].includes(user.number[0])
    ) {
        alert(
            "Phone number should be at least 10 digits long and start with 6 or 7 8 or 9"
        );
        return;
    }
    users.push(user);
    console.log(users);
    content();
};




document.getElementById("UserData").addEventListener("submit", handleData);