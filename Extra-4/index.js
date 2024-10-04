let form = document.getElementById("userdata");

const handleForm = (e) => {
    e.preventDefault();

    let data = {
        name: document.getElementById("name").value.trim(),
        id: document.getElementById("studentId").value,
        number: document.getElementById("number").value,
        gender: document.querySelector('input[name="gender"]:checked').value, 
        age: document.getElementById("age").value,
        language: document.querySelector('input[name="language"]:checked').value, 
    };

    let namePattern = /^[A-Z][a-zA-Z0-9]{1,}$/;
    if (!namePattern.test(data.name)) {
        alert(
            "Username should start with a capital letter, contain only letters and digits, and be at least 2 characters long. Spaces are not allowed."
        );
        triggerShake(form);
        return;
    }

    if (data.id.length > 4 || data.id.length !== 4) {
        alert("Student ID should be 4 characters long");
        triggerShake(form);
        return;
    }

    if (data.number.length != 10 || !['6', '7', '8', '9'].includes(data.number[0])) {
        alert("Phone number should be exactly 10 digits long and start with 6, 7, 8, or 9. Spaces are not allowed.");
        triggerShake(form);
        return;
    }

    if (!data.gender) { 
        alert("Please select a gender");
        triggerShake(form);
        return;
    }

    if (data.age < 16) {
        alert("Student must be 16 years old or above");
        triggerShake(form);
        return;
    }

    let allFormData = new URLSearchParams(data);
    fetch(
        "https://script.google.com/macros/s/AKfycbxg3n5jJtPguZPZDrIOxVam8SdVI92hZ9zt4FO_K3xxLe1F4MsVk1Ev1WXiSylK9G4/exec",
        {
            method: "POST",
            body: allFormData,
        }
    )
        .then((response) => response.text())
        .then((finalresponse) => {
            console.log(finalresponse);
            alert("Student Data Uploaded Successfully!");
           form.reset();
            form.classList.remove("shake");
        });
};

const triggerShake = (form) => {
    if (navigator.vibrate) {
        navigator.vibrate(500); 
    }

    
    form.classList.add("shake");
    setTimeout(() => form.classList.remove("shake"), 500);
};

document.getElementById("userdata").addEventListener("submit", handleForm);
