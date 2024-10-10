import { useEffect, useState } from "react";

export default function UploadFile() {
  const [image, setImage] = useState({});
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    const value = e.target.files[0];
    const previewUrl = URL.createObjectURL(value);
    setImage({ ...image, previewUrl, value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image.value) {
      alert("Vui lòng chọn file");
    }
    console.log(image.value);
    const formData = new FormData();
    formData.append("file", image.value);
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/files/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    if (!response.ok) {
      return alert("Upload file lỗi");
    }
    const data = await response.json();
    console.log(data);
    setImage({ ...image, previewUrl: data.location });
    alert("Đã upload thành công");
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.previewUrl);
    };
  }, [image]);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={handleChange} />
        <button>Upload</button>
      </form>
      <div>
        {image.previewUrl && (
          <img src={image.previewUrl} alt="" style={{ width: "300px" }} />
        )}
      </div>
    </div>
  );
}

/*
Yêu cầu 
- Chọn ảnh sẽ hiển thị xem trước
- Bấm upload sẽ tải lên server 
- Hiển thị ảnh đã upload, thay thế vị trí ảnh xem trước kèm theo thông báo upload thành công
*/
