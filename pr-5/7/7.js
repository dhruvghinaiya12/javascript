const multiple = () => {
    let num1 = document.getElementById('num1').value;
    let multiple = num1 * 50;
  
    document.getElementById('multiply').innerHTML = `value is ${multiple}`;
  
  }