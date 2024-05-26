document.write('<div class="chessboard">');
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let color = (i + j) % 2 === 0 ? 'white' : 'black';
        document.write('<div class="square ' + color + '"></div>');
    }
}
document.write('</div>');