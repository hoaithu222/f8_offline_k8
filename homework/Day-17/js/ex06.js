let a = Number(prompt("Nhập giá trị biến a:"));
let b = Number(prompt("Nhập giá trị biến b:"));
let c = Number(prompt("Nhập giá trị biến c:"));
let arr = [a,b,c];

for(let i = 0; i  < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
           let  tmp = arr[i];
            arr[i]  = arr[j];
            arr[j] = tmp;
        }
    }
}
console.log("Mảng sau khi sắp xếp :<br>");
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
document.write("Mảng sau khi sắp xếp :");
for(let i = 0; i < arr.length; i++){
    document.write(arr[i] +" ");
}