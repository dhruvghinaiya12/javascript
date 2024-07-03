const math=()=> {
    let a = document.getElementById('num').value;
    let result = document.getElementById('output');

    if (a % 2 != 0) {
        document.getElementById('output').innerHTML = `this is odd number`;
    } else {
        document.getElementById('output').innerHTML = `this is even number`;
    }
}