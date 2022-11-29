import "./Index.css";
import Card from "../../components/Card/Card";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket } from "../../store/basket/basketSlice";
import { getProducts } from "../../store/products/productsSlice";

function IndexPage() {
  const [products, isLoading] = useSelector((state) => [
    state.products.entities,
    state.products.loading,
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="Index-button">
      <Button onClick={() => dispatch(clearBasket())}>Clear cart</Button>
      <div className="Index-container">
        {!isLoading &&
          products.map((item, index) => {
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
        {isLoading && <h2>Loading...</h2>}
        {/* <Link to={"contacts"}>Контакты</Link> */}
      </div>
    </div>
  );
}

export default IndexPage;
