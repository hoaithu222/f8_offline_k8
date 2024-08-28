/*
1.localStorage:  
- dung lượng lưu trữ lớn: 10mb
- chỉ lưu trữ text
- thời gian lưu trữ không giới hạn 
- server không thể can thiệp
- dễ bị tấn công xss 
- phân biệt theo origin: scheme + hostname + port  


code:
localStorage.getItem(key)
localStorage.setItem(key,value)
localStorage.remove(key),
localStorage.clear

2.sessionStorage 
- dung lượng lưu trữ lớn: 10mb
- chỉ lưu trữ text
- thời gian lưu trữ không giới hạn 
- server không thể can thiệp
- dễ bị tấn công xss  
- thời gian lưu trữ theo phiên tắt trình duyệt là tắt

3.cookie
- dung lượng lưu trữ thấp (khoảng 4kb)
- chia sẻ dữ liệu tới các subdomain ---> tên miền con 
- chỉ lưu trữ đc text
- Phân biệt theo path --> xét path nào chỉ dùng path đó và các path con
- server có thể dọc đc cookie và set cookie
- sẽ có chế độ bảo mật :
   + httpOnly :chỉ đc server có thể đọc và set cookie đấy==> tránh đc xss
   + Secure : hoạt động trong https

- dễ bị tấn công CSRF 
- có thể quy định đc thời gian lưu trữ
   + session 
   + expire time

- cấu tao của cookie 
key=value; path/ = duong-dan;expires = thoi-gian-het-han thời gian tuong la UTC|| max-age = thời han;domain = tenmien;secure;httpOnly; 

*/

// delete localStorage.email;
document.cookie = "name = thu;path =/; max-age =600000";
document.cookie = "email= thu@gmail.com;path =/; max-age =600000";
console.log(document.cookie);
