import { useSelector } from "react-redux";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const basket = useSelector((state) => state.basket);

  return (
    <header className="Header">
      <Link className="Header-logo" to={'/'}>market</Link>
      <div className="Header-basketCounter">
        {Object.values(basket).reduce((acc, item) => {
          acc += item;

          return acc;
        }, 0)}
      </div>
    </header>
  );
}

export default Header;
