import Input from "./components/input";

export default function App() {
  return (
    <div>
      <Input label="Tên" name="Tên" />
      <Input type="email" label="Email" name="email" />
    </div>
  );
}
