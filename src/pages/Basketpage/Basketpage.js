import "./Basketpage.css";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { clearBasket } from "../../store/basket/basketSlice";
import { getProducts } from "../../store/products/productsSlice";
import { useEffect } from "react";

function BasketPage() {
  const products = useSelector((state) => state.products.entities);
  const basket = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="Basketpage-container">
      <h1 className="Basketpage-container__title">Cart of market</h1>
      <div className="Basketpage-card">
        {products
          .filter((product) => !!basket[product.id])
          .map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                id={item.id}
                onClick={(event) => console.log("click on", event)}
                img={item.image}
                price={item.price}
              ></Card>
            );
          })}
      </div>
      <h1 className="Basketpage-container__title-totalPrice">Total price:</h1>
      <div className="Basketpage-container__totalPrice">
        {products.reduce((acc, product) => {
          if (basket[product.id]) {
            acc += product.price * basket[product.id];
          }

          return acc;
        }, 0)}
        $
      </div>
      <div className="Basketpage-container__button">
        <Button onClick={() => dispatch(clearBasket())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default BasketPage;
