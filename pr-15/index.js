function customer() {
    let count = 0;
    let customerCount = document.getElementById("customerCount").innerHTML;
    let Customer = setInterval(() => {
      document.getElementById("customerCount").innerHTML = count;
      count++;
      if (count == Number(customerCount) + 1) {
        clearInterval(Customer);
        client(); 
      }
    }, 1);
  }
  
  function client() {
    let clientCount = 0;
    let clientTotal = document.getElementById("clientCount").innerHTML;
    let Client = setInterval(() => {
      document.getElementById("clientCount").innerHTML = clientCount;
      clientCount++;
      if (clientCount == Number(clientTotal) + 1) {
        clearInterval(Client);
        projects(); 
      }
    }, 1);
  }
  
  function projects() {
    let projectCount = 0;
    let projectsTotal = document.getElementById("projectsCount").innerHTML;
    let Projects = setInterval(() => {
      document.getElementById("projectsCount").innerHTML = projectCount;
      projectCount++;
      if (projectCount == Number(projectsTotal) + 1) {
        clearInterval(Projects);
        coffeeWithClient(); 
      }
    }, 1);
  }
  
  function coffeeWithClient() {
    let coffeeCount = 0;
    let coffeeTotal = document.getElementById("coffeeWithClientCount").innerHTML;
    let Coffee = setInterval(() => {
      document.getElementById("coffeeWithClientCount").innerHTML = coffeeCount;
      coffeeCount++;
      if (coffeeCount == Number(coffeeTotal) + 1) {
        clearInterval(Coffee);
      }
    }, 1);
  }  
  customer();

  