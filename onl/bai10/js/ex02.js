
function chuanHoa(a){
    var newName ="";
    for(var i = 0; i < a.length; i++){
        if(i === 0){
            newName = a[i].toUpperCase();
        }
        else{
            newName += a[i].toLowerCase();
        }
    }
    return newName;
}


var userName ="vũ thị hoài thu";
var arrName = userName.split(" ");
var newUserName = "";

for(var i = 0; i < arrName.length; i++){
    newUserName += chuanHoa(arrName[i]);
    if(i !== arrName.length-1){
        newUserName+= " ";
    }
}

console.log(newUserName);


