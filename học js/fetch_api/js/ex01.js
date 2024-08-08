/*
API 
khi làm việc với web api ==> học http
Client (Front-end) --> API ==> Server(back-end)
Để giao tiếp giữa client và server --> có 2 cách
- XHR
- Fetch
Chuẩn bị server 
-Tìm các dịch vụ Fake
- Cài thư viện và tự fake 

HTTP REQUEST
- URL
- METHOD
- HEADER
- BODY
HTTP RESPONSE 
-BODY --> dữ liệu trả về từ server
-STATUS (Code,Text)
-HEADER

*/

const url = `http://localhost:3000/users`;

const result = fetch(url, {
  method: "GET",
  headers: {
    "x-api-key": "hello",
  },
});

result
  .then((response) => {
    return response.json("");
  })
  .then((users) => {
    console.log(users);
  });
