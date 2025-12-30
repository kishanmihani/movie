import { Link } from "react-router-dom";
import data from "../data/landing.json";

export default function Footer() {
  return (
    <footer style={footer}>
      <p>{data.footer.copyright}</p>
      <div>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}

const footer = {
  padding: "20px",
  background: "#050816",
  textAlign: "center"
};
