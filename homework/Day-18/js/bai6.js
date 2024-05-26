document.write('<div class="chessboard">');
for (var i = 1; i<= 8; i++) {
    for (let j = 1; j <= 8; j++) {
        let color = (i + j) % 2 === 0 ? 'white' : 'black';
        document.write('<div class="square ' + color + '"></div>');
    }
}
document.write('</div>');