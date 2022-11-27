import "./Card.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../../store/basket/basketSlice";

function Card({ img, title, description, price, id }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.basket);

  const onBuyClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(addToBasket(id));
  };

  const onDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(removeFromBasket(id));
  };

  return (
    <Link to={`products/${id}`} className="Card">
      <img className="Card-img" src={img} />
      <div className="Card-container">
        <h2 className="Card-title common-header">{title}</h2>
        {/* <p className="Card-description">{description}</p> */}
        <div className="Card-price common-price">{price}</div>
        <div className="Card-button">
          {!products[id] && <Button onClick={onBuyClick}>Купить</Button>}
          {products[id] && (
            <>
              <Button onClick={onDeleteClick}>-</Button>
              {products[id]}
              <Button onClick={onBuyClick}>+</Button>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Card;
