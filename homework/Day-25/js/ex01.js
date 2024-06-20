function total(...numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number') {
            return `Giá trị không hợp lệ`;
        }
    }
    var result = numbers.reduce(function (prev, current) {
        return prev + current;
    }, 0);
    return result;
}
console.log(total(1, 2, 3, 4, 5));
console.log(total(1, 2, "a", 4));