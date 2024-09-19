import User from "./components/User";

export default function App() {
  const users = [
    { id: 1, name: "user 1", email: "user1@gmail.com" },
    { id: 2, name: "user 2", email: "user2@gmail.com" },
    { id: 3, name: "user 3", email: "user3@gmail.com" },
    { id: 4, name: "user 4", email: "user4@gmail.com" },
  ];
  return (
    <div>
      <h1>User list</h1>
      {users.map(({ id, ...rest }) => (
        <User key={id} {...rest} />
      ))}
    </div>
  );
}

// Hook
// useState
// useEffect
