var inputList = document.querySelectorAll("input");
var finishEvent = new Event("finish");

inputList.forEach(function (input) {
    input.addEventListener("mousedown", function (e) {
        var initialRate = (e.offsetX * 100) / this.clientWidth;
        initialRate = Math.round(initialRate);
        finishEvent.initialRate = initialRate;
    });
    input.addEventListener("input", function (e) {
        var value = e.target.value;
        if (+value === 100) {
            this.dispatchEvent(finishEvent);
        }
    });
})


