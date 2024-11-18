import { addToCart } from "../../store/cart";
import { removeFromCart } from "../../store/cart";
import { useDispatch } from "react-redux";

function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addToCart(produce.id));
  }

  const removeItem = () => {
    dispatch(removeFromCart(produce.id));
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={addItem}
        >
          <i className="fas fa-plus" />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={removeItem}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
