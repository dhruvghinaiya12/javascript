const math=()=> {
    let a = document.getElementById('num').value;
    let b = document.getElementById('name').value;
    let result = document.getElementById('output');
    let NAME = document.getElementById('NAME');
    document.getElementById('output').innerHTML = `your age is ${a}`;
    document.getElementById('NAME').innerHTML = `your name is ${b}`;
}