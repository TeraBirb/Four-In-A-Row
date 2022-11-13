const beginBtn = document.getElementById('begin-game');
const game = new Game();

beginBtn.addEventListener('click', (e) => {
    game.startGame();
    e.target.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

document.addEventListener("keydown", function (e) {
    game.handleKeyDown(e)
}
);