var btnSave = document.querySelector(".save");
var innerMenu = document.querySelector(".inner-menu");
var newBtn = document.querySelector(".new-btn");
var txtBtn = document.querySelector(".txt-btn");
var pdfBtn = document.querySelector(".pdf-btn");
var content = document.querySelector(".content");
var filenameInput = document.querySelector(".name input");

// Xử lý sự kiện click để hiển thị hoặc ẩn menu khi nhấn nút "Save"
btnSave.addEventListener("click", function (e) {
  e.stopPropagation();
  innerMenu.classList.toggle("active");
});

// Ẩn menu nếu người dùng click ra ngoài menu hoặc nút "Save"
document.addEventListener("click", function (e) {
  if (!innerMenu.contains(e.target) && !btnSave.contains(e.target)) {
    innerMenu.classList.remove("active");
  }
});

// Xử lý sự kiện khi người dùng muốn lưu nội dung dưới dạng tệp TXT
txtBtn.addEventListener("click", function () {
  var textContent = content.innerText; // Lấy nội dung văn bản
  var blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob); // Tạo URL tạm thời cho tệp
  link.download = filenameInput.value + ".txt"; // Tên tệp sẽ được lưu
  link.click(); // Tự động click để tải xuống tệp
});

// Xử lý sự kiện khi người dùng muốn lưu nội dung dưới dạng tệp PDF
pdfBtn.addEventListener("click", function () {
  var element = document.querySelector(".content"); // Lấy nội dung cần lưu
  var opt = {
    margin: 1,
    filename: filenameInput.value + ".pdf", // Tên tệp PDF sẽ được lưu
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save(); // Chuyển đổi nội dung sang PDF và lưu
});

// Xử lý sự kiện khi người dùng nhấn nút "b" để in đậm nội dung
document.querySelector(".bold-btn").addEventListener("click", function () {
  document.execCommand("bold");
});

// Xử lý sự kiện khi người dùng nhấn nút "u" để gạch chân nội dung
document.querySelector(".underline-btn").addEventListener("click", function () {
  document.execCommand("underline");
});

// Xử lý sự kiện khi người dùng nhấn nút "i" để in nghiêng nội dung
document.querySelector(".italic-btn").addEventListener("click", function () {
  document.execCommand("italic");
});

// Xử lý sự kiện khi người dùng chọn màu văn bản
document
  .querySelector("input[type='color']")
  .addEventListener("change", function (e) {
    document.execCommand("foreColor", false, e.target.value);
  });

// Xử lý sự kiện khi người dùng nhập nội dung để cập nhật số ký tự và số từ
content.addEventListener("input", function () {
  var charCount = content.innerText.length; // Đếm số ký tự
  var wordCount = content.innerText.split(/\s+/).filter(Boolean).length; // Đếm số từ

  // Nếu nội dung bị xóa hết (nhưng vẫn còn ký tự không mong muốn), đặt lại số ký tự và số từ về 0
  if (charCount === 1 && content.innerText === "") {
    charCount = 0;
    wordCount = 0;
  }

  document.querySelector(".footer p span").innerText = charCount; // Hiển thị số ký tự
  document.querySelectorAll(".footer p span")[1].innerText = wordCount; // Hiển thị số từ
});

// Xử lý sự kiện paste để chỉ dán văn bản thuần (plain text)
content.addEventListener("paste", function (e) {
  e.preventDefault();
  var text = (e.clipboardData || window.clipboardData).getData("text");
  document.execCommand("insertText", false, text); // Chèn văn bản thuần vào trình soạn thảo
});

// Xử lý sự kiện khi người dùng nhấn nút "New" để tạo file mới
newBtn.addEventListener("click", function () {
  content.innerText = ""; // Xóa toàn bộ nội dung
  filenameInput.value = "untitled"; // Đặt lại tên tệp về mặc định
  document.querySelector(".footer p span").innerText = "0"; // Đặt lại số ký tự về 0
  document.querySelectorAll(".footer p span")[1].innerText = "0"; // Đặt lại số từ về 0
});
