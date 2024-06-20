Number.prototype.getCurrency = function (currency) {
    if (typeof currency !== 'string' || currency.length === 0) {
        console.log("Đơn vị tiền tệ không hợp lệ ");
    }
    var number = this;
    var result = '';
    var count = 0;
    while (number >= 1) {
        if (count > 0 && count % 3 === 0) {
            result = ',' + result;
        }
        result = Math.floor(number % 10) + result;
        number = Math.floor(number / 10);
        count++;
    }
    return result + " " + currency;
}
String.prototype.getCurrency = function (currency) {
    var number = parseInt(this);
    if (isNaN(number)) {
        console.log("Giá trị chuỗi không phải số hợp lệ ");
    }
    return number.getCurrency(currency);
}
var price = 12000;
console.log(price.getCurrency('đ'));
var price = 1000;
console.log(price.getCurrency('đ'));
var price = "12000000";
console.log(price.getCurrency('đ'));
var price = "100000000";
console.log(price.getCurrency('đ'));

