var action = "create";
if(action === "create" || action === "add" || action === "insert"){
    console.log("Thêm mới");
}
else if(action === "update" || action === "edit"){
    console.log("Cập nhập");
}
else if(action === "delete" || action === "remove" || action === "destroy"){
    console.log("Xóa");
}
else{
    console.log("Danh sách");
}