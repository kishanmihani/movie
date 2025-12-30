export default function Footer() {
  return (
    <footer className="backgroundColor text-light pt-5">
      <div className="container">
        <div className="row">

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Careers</a></li>
            </ul>
          </div>

          {/* Language */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">View Website in</h6>
            <p className="text-secondary mb-0">✓ English</p>
          </div>

          {/* Help */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Need Help?</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">Visit Help Center</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Share Feedback</a></li>
            </ul>
          </div>

          {/* Social & Apps */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Connect with Us</h6>

            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-light fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>

            <div className="d-flex gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                height="40"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                height="40"
              />
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between pb-3 text-secondary">
          <p className="mb-2 mb-md-0">
            © 2025 STAR. All Rights Reserved.
          </p>
          <div>
            <a href="#" className="text-secondary text-decoration-none me-3">Terms Of Use</a>
            <a href="#" className="text-secondary text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-secondary text-decoration-none">FAQ</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
