import PropTypes from "prop-types";
// rfcp có propTypes
User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string.isRequired,
};
export default function User({ name, email }) {
  return (
    <div>
      <div
        style={{
          background: "orange",
          padding: "10px",
          borderRadius: "10px",
          marginBottom: "20px",
          color: "white",
        }}
      >
        <p>Name:{name}</p>
        <p>Email:{email}</p>
      </div>
    </div>
  );
}
