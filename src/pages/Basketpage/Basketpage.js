import "./Basketpage.css";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { clearBasket } from "../../store/basket/basketSlice";

function BasketPage() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  return (
    <div className="Basketpage-button">
      <Button onClick={() => dispatch(clearBasket())}>Clear cart</Button>
      <div className="Basketpage-container">
        {products.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              id={item.id}
              onClick={(event) => console.log("click on", event)}
              img={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BasketPage;
