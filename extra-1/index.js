let users = [];

const handleData = (e) => {
  e.preventDefault();
  let user = {
    name: document.getElementById("Name").value,
    price: document.getElementById("Price").value,
    number: document.getElementById("Number").value,
  };

  users.push(user);
  console.log(users);
  content();
};

const content = () => {
  document.getElementById("main-2").innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let table = document.createElement("table");

    let tbody = document.createElement("tbody");

    let Row = document.createElement("tr");
    let Cell = document.createElement("td");
    let img = document.createElement("img");
    img.src = "./img/wallhaven-j5q9q5.jpg"; 
    img.classList.add("table-img");
    Cell.append(img);
    Row.append(Cell);
    tbody.append(Row);

    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.innerHTML = "Name:";
    let td1 = document.createElement("td");
    td1.innerHTML = users[i].name;
    tr.append(th1, td1);

    let tr2 = document.createElement("tr");
    let th2 = document.createElement("th");
    th2.innerHTML = "Price:";
    let td2 = document.createElement("td");
    td2.innerHTML = users[i].price;
    tr2.append(th2, td2);

    let tr3 = document.createElement("tr");
    let th3 = document.createElement("th");
    th3.innerHTML = "Number:";
    let td3 = document.createElement("td");
    td3.innerHTML = users[i].number;
    tr3.append(th3, td3);

    tbody.append(tr, tr2, tr3);

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    let btnCart = document.createElement("button");
    btnCart.innerHTML = " Cart";
    btnCart.classList.add("btn-cart");
    btnCart.addEventListener("click", () => handleCart(i));

    let btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Delete";
    btnDelete.classList.add("btn-delete");
    btnDelete.addEventListener("click", () => handleDelete(i));

    buttonContainer.append(btnCart, btnDelete);
    table.append(tbody, buttonContainer);
    document.getElementById("main-2").append(table);
  }
};

const handleCart = (index) => {
  alert(`Added ${users[index].name} to cart!`);
};

const handleDelete = (index) => {
  users.splice(index, 1);
  content();
};

document.getElementById("dragonForm").addEventListener("submit", handleData);

/*--------------------------------------------------------slider-----------------------------------------------------------*/ 
  const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    let index = 0;

    function showSlide(i) {
        index += i;
        if (index < 0) {
            index = slide.length - 1;
        }
        if (index >= slide.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prev.addEventListener('click', () => showSlide(-1));
    next.addEventListener('click', () => showSlide(1));

    setInterval(() => {
        showSlide(1);
    }, 3000);