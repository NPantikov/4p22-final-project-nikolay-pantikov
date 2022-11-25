import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const count = useSelector((state) => state.counter.value);

  return (
    <header className="Header">
      <h1>Header</h1>
      <h1>{ count }</h1>
    </header>
  );
}

export default Header;
