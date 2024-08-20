document.getElementById('btn').addEventListener('click', function() {
    const Dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('Number').innerText = Dice;
});
