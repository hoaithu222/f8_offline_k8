// eslint-disable-next-line react/prop-types
export default function Header({ title, name, email, children }) {
  return (
    <div>
      <h2>Header</h2>
      <h3>{title}</h3>
      <h3>{name}</h3>
      <h3>{email}</h3>
      {children}
    </div>
  );
}
