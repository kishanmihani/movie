import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <p className="fs-4  mb-4 text-primary">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link to="/" className="btn btn-outline-primary px-4">
          Go Home
        </Link>
      </div>
    </div>
  );
}