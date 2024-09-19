export default function Input({ onChange }) {
  return (
    <div>
      <input type="text" placeholder="Nhập tên" onChange={onChange} />
    </div>
  );
}

/*
App
   -Component A 
   -Component B
   const a = () =>{};
    const b = a;
    const c = b;

*/
