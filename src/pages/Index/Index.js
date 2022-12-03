import "./Index.css";
import Card from "../../components/Card/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <div className="Index-page">
      <h1 className="Index-page-title">market</h1>
      <h2 className="Index-page-subtitle">Epic holiday deals for everyone</h2>
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
      </div>
    </div>
  );
}

export default IndexPage;
