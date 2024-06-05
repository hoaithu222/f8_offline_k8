function standardizeName(name) {
    let words = name.split(/\s+/); // Tách chuỗi thành mảng các từ dựa trên khoảng trắng
    let standardized = words.map(word => {
        if (word.length === 0) return ""; // Bỏ qua từ rỗng
        let firstChar = word.charAt(0).toUpperCase(); // Chuyển chữ cái đầu tiên thành chữ hoa
        let restChars = word.slice(1).toLowerCase(); // Chuyển các chữ cái còn lại thành chữ thường
        return firstChar + restChars;
    });
    return standardized.join(" ");
}

function standardizeDateOfBirth(date) {
    let parts = date.split("/");

    if (parts[0].length === 1) {
        parts[0] = "0" + parts[0];
    }

    if (parts[1].length === 1) {
        parts[1] = "0" + parts[1];
    }

    return parts.join("/");
}

// Nhập tên người và ngày sinh từ người dùng
let name = prompt("Vui lòng nhập tên:");
let dateOfBirth = prompt("Vui lòng nhập ngày sinh (dd/mm/yyyy):");

// Chuẩn hóa tên người và ngày sinh
let standardizedName = standardizeName(name);
let standardizedDateOfBirth = standardizeDateOfBirth(dateOfBirth);

// In ra kết quả
console.log(standardizedName);
console.log(standardizedDateOfBirth);
document.write(standardizedName + "<br>");
document.write(standardizedDateOfBirth);
