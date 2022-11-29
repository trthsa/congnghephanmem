import logo from "../img/logo.png";
import SearchBox from "../components/SearchBox";
import BottomNavigation from "../components/Navigation";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img width="100px" src={logo} alt="" />
          <span className="text-light">ĐẠI LÝ BIA</span>
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
          <span className="navbar-toggler-icon stroke-white"></span>
        </button>
        <div
          className="justify-content-end collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <ul className="nav nav-tabs justify-content-start">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Giới thiệu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Tin tức
              </a>
            </li>
          </ul>
          <div className="navbar-nav " id="user-info">
            <SearchBox />
            <a className="nav-link ms-1" href="/">
              Cart
            </a>
            <a className="nav-link" href="../Screen/UserScreen">
              User
            </a>
          </div>
        </div>
        <BottomNavigation />
      </div>
    </nav>
  );
}
