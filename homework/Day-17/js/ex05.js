var a,b,c, max =0, min = 0,center=0;
a = Number(prompt("Nhập giá trị biến a:"));
b = Number(prompt("Nhập giá trị biến b:"));
c = Number(prompt("Nhập giá trị biến c:"));

if(a > b && a > c){
    max = a;
    if(c > b){
        center= c;
        min = b;
    }
    else{
        min = c;
        center = b;
    }
}
else{
    if(b > c){
        max = b;
        if(a > c){
            min = c;
            center = a;
        }
        else{
            min = a;
            center = c;
        }
    }
    else{
        max = c;
        if( a > b){
            min = b;
            center = a;
        }
        else{
            min = a;
            center = b;
        }
    }
}
if( a < b && a < c){
    min = a;
    if(b > c){
        max = b;
        center = c;
    }
    else{
        max = c;
        center = b;
    }
}
else{
    if(b < c){
        b = min;
        if(a > c){
            max= a;
            center =c;
        }
        else{
            max = c;
            center = a;

        }
    }
    else{
        c = min;
        if(a < b){
            max = b;
            center = a;
        }
        else{
            max = a;
            center = b;
        }
    }
}

console.log(min,center,max);
document.write(`Dãy số được sắp xếp tăng dần : ${min}  ${center} ${max}`);