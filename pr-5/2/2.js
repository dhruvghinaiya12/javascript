const math=()=> {
    let a = document.getElementById('num').value;
    let result = document.getElementById('output');

    if (a % 3 == 0) {
        document.getElementById('output').innerHTML = `yes`;
    } else {
        document.getElementById('output').innerHTML = `no`;
    }
}
