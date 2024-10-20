import { useState, useTransition } from "react";
import students from "./db.json";

export default function App() {
  const [search, setSearch] = useState("");
  const [pending, startTransition] = useTransition();
  const handleChange = (e) => {
    startTransition(() => {
      setSearch(e.target.value);
    });
  };
  return (
    <div>
      <input type="search" placeholder="Từ khóa" onChange={handleChange} />
      <h2>Danh sách sinh viên{pending && <span>....</span>}</h2>
      {students.map((item, index) => {
        if (search.length) {
          const position = item.fullName
            .toLowerCase()
            .indexOf(search.toLowerCase());
          if (position !== -1) {
            return (
              <h3 key={index}>
                {item.fullName.slice(0, position)}
                <span style={{ background: "yellow" }}>
                  {item.fullName.slice(position, position + search.length)}
                </span>
                <span>{item.fullName.slice(position + search.length)}</span>
              </h3>
            );
          }
        }
        return <h3 key={index}>{item.fullName}</h3>;
      })}
    </div>
  );
}
