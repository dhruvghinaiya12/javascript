const handledata = (e) => {
    e.preventDefault();
  
    let data = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      password: document.getElementById("password").value,
    };
    
    if (data.username.length < 2) {
      alert("Username should be at least 2 characters long");
      return;
    }
    if (data.number.length!=10 || !['6', '7', '8', '9'].includes(data.number[0])) {
      alert("Phone number should be at least 10 digits long and start with 6 or 7 8 or 9");
      return;
    }
    if (data.password.length < 6) {
        alert("Password should be at least 6 characters long");
        return;
    } 
    console.log(data);
  };
  
  document.getElementById("userdata").addEventListener("submit", handledata);
  