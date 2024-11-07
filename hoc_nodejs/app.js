const http = require("http");
const server = http.createServer((req, res) => {
    // res.setHeader("Set-Cookie", "name=hoangan11;path=/");
    const url = req.url;
    if (url === '/users') {
        const users = [
            {
                id: 1,
                name: "Hoàng an",
            },
            {
                id: 2,
                name: "Hoàng an2",
            },
        ];
        res.setHeader("Content-Type", "application/json")
        return res.end(JSON.stringify(users));
    }
    res.end("<h1>Hello world</h1>")



})
server.listen(8080, "localhost", () => {
    console.log("server đang chạy với 8080");
});