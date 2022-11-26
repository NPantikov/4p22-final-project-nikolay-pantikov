import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const basket = useSelector((state) => state.basket);

  return (
    <header className="Header">
      <h1>Header</h1>
      <div className="Header-basketCounter">{ Object.keys(basket).length }</div>
    </header>
  );
}

export default Header;
