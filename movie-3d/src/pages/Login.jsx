import { useState } from "react";
import { BsWallet2 } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { MdDevices } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginPopup({ open, onClose }) {
  const [isRegister, setIsRegister] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  if (!open) return null;

  return (
    <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.8)" }}>
      <div className="container modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content bg-dark text-white rounded-4 overflow-hidden">

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="btn btn-link text-secondary position-absolute top-0 end-0 m-3 text-decoration-none"
          >
            Skip for now
          </button>

          <div className="row g-0">

            {/* LEFT SECTION */}
            <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center p-5">
              <div className="fw-bold fs-2 mb-3">
                <span className="text-danger">Movie</span>Flix
              </div>

              <p className="text-secondary mb-4">
                Premium OTT service in India. Watch movies & shows for free.
              </p>

              <ul className="list-unstyled text-secondary">
                <li className="mb-2 d-flex gap-3">
                  <MdDevices className="text-danger fs-5" /> Watch on any device
                </li>
                <li className="mb-2 d-flex gap-3">
                  <FiDownload className="text-danger fs-5" /> Download anytime
                </li>
                <li className="d-flex gap-3">
                  <BsWallet2 className="text-danger fs-5" /> Ad-Lite experience
                </li>
              </ul>
            </div>

            {/* RIGHT SECTION */}
            <div className="col-lg-6 col-12 p-4 p-lg-5">
              <h3 className="fs-2 fw-bold mb-3 text-secondary">
                {isRegister ? "Register" : "Login"}
              </h3>

              {/* REGISTER NAME */}
              {isRegister && (
                <input
                  type="text"
                  className="form-control bg-white  border-0 text-black mb-3"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              {/* EMAIL */}
              <input
                type="email"
                className="form-control bg-white  border-0 text-black mb-3"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* PASSWORD */}
              <div className="position-relative mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control bg-white  border-0 text-black mb-3 pe-5"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="text-secondary fs-5" />
                  ) : (
                    <AiOutlineEye className="text-secondary fs-5" />
                  )}
                </span>
              </div>

              {/* REMEMBER */}
              {!isRegister && (
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <label className="form-check-label text-secondary">
                    Remember Password
                  </label>
                </div>
              )}

              {/* SUBMIT */}
              <button className="btn btn-danger w-100 py-2 mb-3">
                {isRegister ? "Create Account" : "Login"}
              </button>

              {/* SWITCH */}
              <p className="text-secondary text-center small">
                {isRegister ? "Already have an account?" : "New user?"}{" "}
                <span
                  className="text-danger cursor-pointer"
                  onClick={() => setIsRegister(!isRegister)}
                >
                  {isRegister ? "Login" : "Register"}
                </span>
              </p>

              <p className="text-secondary small mt-3">
                By continuing, you agree to our{" "}
                <span className="text-primary">Terms</span> &{" "}
                <span className="text-primary">Privacy Policy</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
