var a = prompt("Nhập giá trị biến a :");
a = Number(a);
var b = prompt("Nhập giá trị biến b :");
b = Number(b);
function check(a,b){
    if(a*b >= 0){
        console.log(` Biến a và biến b cùng dấu `);
        document.write(` Biến a và biến b cùng dấu `);
    }
    else{
        console.log(` Biến a và biến b trái dấu `);
        document.write(` Biến a và biến b trái dấu `);
    }
}
check(a,b);