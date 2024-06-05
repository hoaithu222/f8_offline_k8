var n = Number(prompt("Nhập giá trị của n:"));
var m = Number(prompt("Nhập giá trị của m:"));
var a = new Array(n);

for (var i = 0; i < n; i++) {
    a[i] = new Array(m);
    for (var j = 0; j < m; j++) {
        var tmp = prompt(`Nhập giá trị hàng thứ ${i} và cột thứ ${j}: `);
        if (!isNaN(tmp) && tmp.trim() !== '') {
            a[i][j] = Number(tmp);
        } else if (tmp.toLowerCase() === 'true' || tmp.toLowerCase() === 'false') {
            a[i][j] = (tmp.toLowerCase() === 'true');
        } else {
            a[i][j] = tmp;
        }
    }
}

var stringValues = [];
var numberValues = [];
var booleanValues = [];

for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
        if (typeof a[i][j] === 'string') {
            stringValues.push(a[i][j]);
        } else if (typeof a[i][j] === 'number') {
            numberValues.push(a[i][j]);
        } else if (typeof a[i][j] === 'boolean') {
            booleanValues.push(a[i][j]);
        }
    }
}

stringValues.forEach(value => document.write(value + " "));
document.write("<br>");
numberValues.forEach(value => document.write(value + " "));
document.write("<br>");
booleanValues.forEach(value => document.write(value + " "));
document.write("<br>");
