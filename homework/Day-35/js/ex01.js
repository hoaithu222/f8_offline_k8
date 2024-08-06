document.addEventListener("DOMContentLoaded", function () {
  const counter = document.querySelector(".counter");
  const button = document.querySelector(".btn");
  let time = 30;
  let active = true;
  let lastTime = performance.now();

  function updateCounter(timestamp) {
    // Kiểm tra xem tài liệu có bị ẩn không
    if (document.hidden) {
      lastTime = timestamp;
      requestAnimationFrame(updateCounter); // Tiếp tục gọi hàm updateCounter để đảm bảo cập nhật liên tục
      return;
    }

    // Nếu thời gian còn và bộ đếm đang hoạt động
    if (time > 0 && active) {
      const elapsed = timestamp - lastTime;
      if (elapsed >= 1000) {
        time--;
        counter.textContent = time; // Cập nhật hiển thị thời gian
        lastTime = timestamp;
      }
    } else if (time === 0) {
      button.disabled = false; // Kích hoạt nút Get Link khi hết thời gian
      button.addEventListener("click", function () {
        window.location.href = "https://fullstack-nodejs.fullstack.edu.vn/"; // Chuyển hướng khi nhấn nút
      });
    }

    requestAnimationFrame(updateCounter); // Liên tục gọi hàm để cập nhật
  }

  document.addEventListener("visibilitychange", function () {
    // Xử lý khi trang bị ẩn hoặc hiển thị lại
    if (document.hidden) {
      active = false;
    } else {
      active = true;
    }
  });

  requestAnimationFrame(updateCounter); // Bắt đầu vòng lặp cập nhật bộ đếm
});
