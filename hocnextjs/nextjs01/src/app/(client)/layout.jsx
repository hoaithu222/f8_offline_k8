import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";
import Menu from "./_components/Menu";

export default function ClientLayout({ children }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Menu />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </div>
  );
}
