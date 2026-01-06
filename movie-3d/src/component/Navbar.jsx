import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  sticky-top px-3" style={{background:"linear-gradient(180deg, #050816, #060b23)"}}>
        <div className="container">

          {/* Mobile Menu Button */}
          <button
            className="btn text-white fs-4 d-lg-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#sideMenu"
          >
            ☰
          </button>

          {/* Logo */}
          <Link className="navbar-brand fw-bold fs-2 ms-2" to="/">
            <span className="text-danger">Movie</span>Flix
          </Link>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse d-none d-lg-flex">
            <ul className="navbar-nav ms-auto gap-3 text-uppercase fw-semibold">

              <li className="nav-item">
                <Link className="nav-link text-danger" to="/new">New</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/popular">Popular</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/trending">Trending</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/tags">Tags</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/models">Models</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/favorites">Favorites</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/history">History</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" onClick={() => props.setloginPopup(true)}>Login</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <SideMenu />
    </>
  );
}
