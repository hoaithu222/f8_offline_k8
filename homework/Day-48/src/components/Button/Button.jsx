import "./Button.css";

const Button = ({ onClick, children, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
