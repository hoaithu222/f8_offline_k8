var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự",
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email",
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
};
function getError(field) {
    var parts = field.split(".");
    var fieldName = parts[0];
    var errorType = parts[1];
    var fieldErrors = errors[fieldName];
    if (!fieldErrors) {
        return null;
    }

    if (errorType) {
        return fieldErrors[errorType] || null;
    } else {
        if (fieldErrors.required) {
            return fieldErrors.required;
        } else {
            for (var key in fieldErrors) {
                return fieldErrors[key];
            }
        }
    }
    return null;
}
console.log(getError("name"));
console.log(getError("name.min"));
console.log(getError("email.unique"));
console.log(getError("email"));
console.log(getError("password.same"));
