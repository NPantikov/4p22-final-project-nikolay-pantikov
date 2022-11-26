import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { increment, incrementByAmount } from "../../store/counter/counterSlice";

function ContactsPage() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(increment());
  }

  return (
    <>
      <h1>Contacts</h1>
      <h1>{count}</h1>
      <Button onClick={onClick}>Приюавить</Button>
      <Button onClick={() => dispatch(incrementByAmount(10))}>Приюавить 10</Button>
    </>
  )
}

export default ContactsPage;
