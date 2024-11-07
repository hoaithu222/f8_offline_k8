import { headers } from "next/headers";
import DemoServer from "./_components/DemoServer";
import DemoClient from "./_components/DemoClient";
export default function HomePage() {
  const user = headers().get("x-user");
  return (
    <div>
      <h1>Home</h1>
      <h2>User: {user}</h2>

      <DemoClient>
        <DemoServer />
      </DemoClient>
    </div>
  );
}
