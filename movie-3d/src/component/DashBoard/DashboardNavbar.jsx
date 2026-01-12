import { useAuth } from "../../context/AuthContext";

export default function DashboardNavbar({ user }) {
  const { logout } = useAuth();

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top px-4">
      <span className="navbar-brand fw-bold">
        StreamX
      </span>

      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-dark position-relative">
          <i className="bi bi-bell fs-5"></i>
        </button>

        <div className="dropdown">
          <button
            className="btn p-0 border-0 bg-transparent dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="rounded-circle"
              width="40"
              height="40"
            />
          </button>

          <ul className="dropdown-menu dropdown-menu-end shadow">
            <li>
              <button className="dropdown-item">
                Your profile
              </button>
            </li>
            <li>
              <button className="dropdown-item">
                Plain
              </button>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <button
                className="dropdown-item text-danger"
                onClick={logout}
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
