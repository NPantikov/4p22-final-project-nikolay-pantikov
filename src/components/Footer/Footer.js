import "./Footer.css";
import { Link } from "react-router-dom";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";
// import Button from "../Button/Button";
import Button from "@mui/material/Button";
import { increment } from "../../store/counter/counterSlice";
// import Input from "../Input/Input";
import TextField from "@mui/material/TextField";

function Footer() {
  const onClick = () => {
    increment();

    setTimeout(() => {
      console.log("Subscribed");
    }, 2000);
  };

  return (
    <footer className="Footer">
      <Link className="Footer-contacts-link" to={"contacts"}>
        <h2>Contacts</h2>
      </Link>
      <div className="Footer-market">
        <h2>Market.com</h2>
        <h2>Careers</h2>
      </div>
      <div className="Footer-press">
        <h2>Press Center</h2>
        <h2>Investor Resources</h2>
        <h2>Facts about Market</h2>
      </div>
      <div className="Footer-newsletter">
        <h2 className="Footer-market-news">Market news</h2>
        <h2>
          Sign up for the latest news, facts, analysis, and original stories
          about Market delivered to you.
        </h2>
        <div className="Footer-subscribe">
          {/* <Input
            className="Footer-subscribe-input"
            type="email"
            placeholder="Enter emeil"
            name="email"
            id="email"
          /> */}
          <TextField
            className="Footer-subscribe-input"
            type="email"
            name="email"
            id="email"
            label="Enter email"
            variant="outlined"
          />
          <Button
            variant="text"
            className="Footer-subscribe-button"
            onClick={onClick}
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div className="Footer-conditions">
        <div className="Footer-sociallinks">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
        <h4>
          Market.com | Conditions of Use | © 2022 Market.com, Inc. or its
          affiliates
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
