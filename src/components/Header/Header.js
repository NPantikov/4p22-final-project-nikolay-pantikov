import { useSelector } from "react-redux";
import "./Header.css";
import { Link } from "react-router-dom";
import cart from "../../assets/img/cart.png";

function Header() {
  const basket = useSelector((state) => state.basket);

  return (
    <header className="Header">
      <Link className="Header-logo" to={"/"}>
        market
      </Link>
      <Link to={"basketpage"}><img
          className="Header-cart"
          src={cart}
          alt="Cart"
      />
      </Link>
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
