var btnSave = document.querySelector(".save");
var innerMenu = document.querySelector(".inner-menu");
var newBtn = document.querySelector(".new-btn");
var txtBtn = document.querySelector(".txt-btn");
var pdfBtn = document.querySelector(".pdf-btn");
var content = document.querySelector(".content");
var filenameInput = document.querySelector(".name input");

btnSave.addEventListener("click", function (e) {
  e.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
  innerMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!innerMenu.contains(e.target) && !btnSave.contains(e.target)) {
    innerMenu.classList.remove("active");
  }
});

txtBtn.addEventListener("click", function () {
  var textContent = content.innerText;
  var blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filenameInput.value + ".txt";
  link.click();
});

pdfBtn.addEventListener("click", function () {
  var element = document.querySelector(".content");
  var opt = {
    margin: 1,
    filename: filenameInput.value + ".pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
});

document.querySelector(".bold-btn").addEventListener("click", function () {
  document.execCommand("bold");
});

document.querySelector(".underline-btn").addEventListener("click", function () {
  document.execCommand("underline");
});

document.querySelector(".italic-btn").addEventListener("click", function () {
  document.execCommand("italic");
});

document
  .querySelector("input[type='color']")
  .addEventListener("change", function (e) {
    document.execCommand("foreColor", false, e.target.value);
  });

content.addEventListener("input", function () {
  document.querySelector(".footer p span").innerText = content.innerText.length;
  document.querySelectorAll(".footer p span")[1].innerText = content.innerText
    .split(/\s+/)
    .filter(Boolean).length;
});
