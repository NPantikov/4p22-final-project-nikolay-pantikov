import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const basket = useSelector((state) => state.basket);

  return (
    <header className="Header">
      <h1>Header</h1>
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
