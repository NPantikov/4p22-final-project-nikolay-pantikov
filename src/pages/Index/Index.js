import "./Index.css";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { decrement } from "../../store/counter/counterSlice";

function IndexPage() {
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
    <>
    <Button onClick={() => dispatch(decrement())}>Убавить</Button>
      <div className="Index-container">
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
        <Link to={"contacts"}>Контакты</Link>
      </div>
    </>
  );
}

export default IndexPage;
