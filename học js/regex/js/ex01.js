// tự viết thì viết trên
// const patten = /hoangan/;
// console.dir(patten);
// xây dựng định hướng thì cần
// const patten = new RegExp("hoangan");
// console.log(patten);

// const patten = /hoangan/;
// console.dir(patten);

const str = `hoangaAnit122222A`;

const patten = /it[0-9]{0,}[A-Z]/;
console.log(patten.test(str));
// console.log(str.match(patten)); // dùng để tách chuỗi
