const handledata = (e) => {
  e.preventDefault();

  const form = document.getElementById("userdata");

  let data = {
    username: document.getElementById("username").value.trim(),
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    password: document.getElementById("password").value,
    gender: document.querySelector('input[name="gender"]:checked')?.value,
    age: document.getElementById("age").value,
    languages: Array.from(
      document.querySelectorAll(
        '.language-selection input[type="checkbox"]:checked'
      )
    ).map((checkbox) => checkbox.value),
  };

  const usernamePattern = /^[A-Z][a-zA-Z0-9]{1,}$/;
  if (!usernamePattern.test(data.username)) {
    alert(
      "Username should start with a capital letter, contain only letters and digits, and be at least 2 characters long. Spaces are not allowed."
    );
    triggerShake(form);
    return;
  }

  const phoneNumberPattern = /^(?:\+91|91)?[6789]\d{9}$/;
  if (!phoneNumberPattern.test(data.number)) {
    alert(
      "Phone number should be exactly 10 digits long and start with 6, 7, 8, or 9, with an optional country code."
    );
    triggerShake(form);
    return;
  }

  const passwordPattern =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(data.password)) {
    alert(
      "Password should be at least 8 characters long and include at least one letter, one number, and one special character."
    );
    triggerShake(form);
    return;
  }

  if (!data.gender) {
    alert("Please select your gender.");
    triggerShake(form);
    return;
  }

  if (!data.age) {
    alert("Please select your age group.");
    triggerShake(form);
    return;
  }

  if (data.languages.length < 1 || data.languages.length > 2) {
    alert("Please select at least one language and at most two languages.");
    triggerShake(form);
    return;
  }

  form.classList.remove("shake");
  console.log(data);
};

const triggerShake = (form) => {
  form.classList.add("shake");
  setTimeout(() => form.classList.remove("shake"), 500);
};

document.getElementById("userdata").addEventListener("submit", handledata);
