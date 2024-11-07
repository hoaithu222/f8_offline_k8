import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";
import Menu from "./_components/Menu";
export default function ClientLayout({ children }) {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-3">
          <Menu />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </div>
  );
}
