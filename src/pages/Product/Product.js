import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../../store/basket/basketSlice";

function ProductPage({ id }) {
  const { userId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${userId}`
      );
      const result = await response.json();

      setProduct(result);
    })();
  }, []);

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
    <>
      <div className="Product">
        <h1 className="Product-title">{product.title}</h1>
        <img className="Product-img" src={product.image}></img>
        <p className="Product-description">{product.description}</p>
        <h2 className="Product-price">{product.price}$</h2>
        <div className="Product-button">
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
    </>
  );
}

export default ProductPage;
