import { FaRegStar } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiClock, FiLogIn, FiTag, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <div style={{background:"linear-gradient(180deg, #050816, #060b23)"}}
      className="offcanvas border-end offcanvas-start  text-white d-lg-none"
      id="sideMenu"
    >
      <div className="offcanvas-header">
        {/* <h5 className="offcanvas-title fw-bold">Menu</h5> */}
        <button
          className="btn-close text-white btn-close-white"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>

      <div className="offcanvas-body">
        <ul className="list-unstyled  text-start ms-auto gap-3 text-uppercase fw-semibold">

          <li className="mb-3"><Link to="/new" className="text-white text-decoration-none d-flex items-center fs-4 gap-3"><FiTag className="mt-1"/> New</Link></li>
          <li className="mb-3"><Link to="/popular" className="text-white text-decoration-none d-flex items-center fs-4 gap-3"><FaArrowTrendUp className="mt-1"/> Popular</Link></li>
          <li className="mb-3"><Link to="/trending" className="text-white text-decoration-none d-flex items-center fs-4 gap-3"><FiZap className="mt-1"/> Trending</Link></li>
          {/* <li className="mb-3"><Link to="/tags" className="text-white text-decoration-none">🏷 Tags</Link></li> */}
          {/* <li className="mb-3"><Link to="/models" className="text-white text-decoration-none">👤 Models</Link></li> */}
          <li className="mb-3"><Link to="/favorites" className="text-white text-decoration-none d-flex items-center fs-4 gap-3"><FaRegStar className="mt-1"/> Favorites</Link></li>
          <li className="mb-3"><Link to="/history" className="text-white text-decoration-none d-flex items-center fs-4 gap-3"><FiClock className="mt-1"/> History</Link></li>

          <hr />

          <li>
            <Link to="/login" className="text-white text-decoration-none d-flex items-center fs-4 gap-3">
             < FiLogIn  className="mt-1"/> Login
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
}
