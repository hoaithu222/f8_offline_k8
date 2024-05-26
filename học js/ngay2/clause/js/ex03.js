// câu lệnh switch case

var action = "create";
switch(action){
    case "create":
    case "add":
    case "insert":
        console.log("thêm mới");
        break;
    case "update":
    case "edit" :
        console.log("cập nhập");
        break;
    case "delete":
    case "remove":
        console.log("xóa");
        break;
    default :
    console.log("Danh sách");
    break;
}

