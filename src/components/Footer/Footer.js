import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="Footer">
      <span>Footer</span>
      <Link className="Footer-link" to={"contacts"}>Контакты</Link>
    </footer>
  );
}

export default Footer;
  

  

