document.addEventListener("DOMContentLoaded", function () {
  const datePicker = document.getElementById("datePicker");
  const message = document.getElementById("message");

  // Khi chọn ngày
  datePicker.addEventListener("change", function () {
    const selectedDate = new Date(datePicker.value);
    const currentDate = new Date();

    // Tính thời gian còn lại
    const timeDifference = selectedDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    if (timeDifference > 0) {
      message.innerHTML = `Còn ${daysRemaining} ngày ${hoursRemaining} giờ nữa để đăng bài.`;
      message.className = "info";
    } else {
      message.innerHTML = "Ngày đã qua hoặc hiện tại.";
      message.className = "warning";
    }
  });

  // Khi không chọn ngày, hiển thị giờ hiện tại
  if (!datePicker.value) {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    message.innerHTML = `Không chọn ngày. Giờ hiện tại là: ${currentTime}`;
    message.className = "info";
  }
});
