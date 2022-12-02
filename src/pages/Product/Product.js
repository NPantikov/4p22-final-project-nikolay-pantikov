import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../../store/basket/basketSlice";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
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

    dispatch(addToBasket(productId));
  };

  const onDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(removeFromBasket(productId));
  };

  return (
    <>
      <div className="Product">
        <h1 className="Product__title">{product.title}</h1>
        <img className="Product__img" src={product.image}></img>
        <h3 className="Product__description">{product.description}</h3>
        <h2 className="Product__price">{product.price}$</h2>
        <div className="Product__button">
          {!products[productId] && <Button onClick={onBuyClick}>Вuy</Button>}
          {products[productId] && (
            <>
              <Button onClick={onDeleteClick}>-</Button>
              {products[productId]}
              <Button onClick={onBuyClick}>+</Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
