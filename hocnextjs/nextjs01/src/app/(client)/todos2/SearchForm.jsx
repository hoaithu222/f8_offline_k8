export default function SearchForm({ onChange }) {
  return (
    <div>
      <input
        type="search"
        placeholder="Nhập từ khóa tìm kiếm....."
        onChange={onChange}
      />
    </div>
  );
}

// Nhập từ khóa sẽ tìm todo tương ứng
// Sử dụng swr
// sử dụng debounce
