var n = Number(prompt("Nhập giá trị của n:"));
var m = Number(prompt("Nhập giá trị của m:"));
var a = new Array(n);

for (var i = 0; i < n; i++) {
    a[i] = new Array(m);
    for (var j = 0; j < m; j++) {
        var tmp = prompt(`Nhập giá trị hàng thứ ${i} và cột thứ ${j}: `);
        a[i][j] = tmp;
    }
}
for(var i = 0; i < n; i++){
    for(var j = 0; j < m; j++){
        if(typeof a[i][j] === 'string'){
            document.write(a[i][j]+" ");
        }
    
    }
    document.write("<br>");
}
for(var i = 0; i < n; i++){
    for(var j = 0; j < m; j++){
        if(typeof a[i][j] === 'number'){
            document.write(a[i][j]+" ");
        }
    
    }
    document.write("<br>");
}
for(var i = 0; i < n; i++){
    for(var j = 0; j < m; j++){
        if(typeof a[i][j] === 'boolean'){
            document.write(a[i][j]+" ");
        }
    
    }
    document.write("<br>");
}

