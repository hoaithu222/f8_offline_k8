function createUser(name, password, email) {
    return {
        name: name,
        password: password,
        email: email,
        role: 'user'
    };
}

var data = [];
function handleRegister(name, password, email) {
    if (!name || !password || !email) {
        console.error("Thông tin không đầy đủ");
        return;
    }
    var existingUser = data.find(function (user) {
        return user.email === email;
    });

    if (existingUser) {
        console.error("Email đã được đăng ký");
        return;
    }

    var user = createUser(name, password, email);
    data.push(user);

    return data;
}

function handleLogin(email, password) {
    var user = data.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        return user;
    } else {
        return "Thông tin đăng nhập không hợp lệ";
    }
}

const dataRegister1 = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
);
const dataRegister2 = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(data);
console.log(dataLogin);

var loginResultInvalid = handleLogin("nguyenb@email.com", "password123");
console.log(loginResultInvalid);
