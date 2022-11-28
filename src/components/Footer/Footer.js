import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="Footer">
      <span>Footer</span>
      <Link className="Contacts-link" to={"contacts"}>Contacts</Link>
    </footer>
  );
}

export default Footer;
  

  
