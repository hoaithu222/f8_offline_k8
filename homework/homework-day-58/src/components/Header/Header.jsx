import Menu from "../Menu/Menu";

export default function Header() {
  return (
    <div className="flex h-20 items-center justify-between p-1 px-12">
      <div className="text-blue-400 text-2xl font-bold">
        <h2>Mindmap Flow</h2>
      </div>
      <div className="ml-auto">
        <Menu />
      </div>
    </div>
  );
}
