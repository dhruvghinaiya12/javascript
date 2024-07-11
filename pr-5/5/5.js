const product = () => {
    let num1 = document.getElementById('num1').value;
    let product = num1 * num1;
    document.getElementById('output').innerHTML = `Squre of ${num1} is  ${product}`;
}