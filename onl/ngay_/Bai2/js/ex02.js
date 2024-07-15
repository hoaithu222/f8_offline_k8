// var input = document.querySelector("input");



const beforeUnloadHander = (event) => {
    event.preventDefault();


    event.returnValue = true;

}
// input.addEventListener("input", function (e) {
//     // lấy giá trị cũ
//     var defaultValue = e.target.defaultValue;
//     var value = e.target.value;
//     if (defaultValue !== value) {
//         window.addEventListener("beforeunload", beforeUnloadHander);
//     }
//     else { 
//         window.removeEventListener("beforeunload", beforeUnloadHander);
//     }
// });

var form = document.querySelector("form");
form.addEventListener("input", function (e) {
    var defaultValue = e.target.defaultValue;
    var value = e.target.value;
    if (defaultValue !== value) {
        window.addEventListener("beforeunload", beforeUnloadHander);
    }
    else {
        window.removeEventListener("beforeunload", beforeUnloadHander);
    }

});