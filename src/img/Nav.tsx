import logo from "../img/logo.png";
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img width="100px" src={logo} alt="" />
          <span>ĐẠI LÝ BIA</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="justify-content-center collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Giới thiệu
            </a>
            <a className="nav-link" href="#">
              Thêm dữ liệu
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
