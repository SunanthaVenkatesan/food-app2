import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "Chicken Briyani", amount: 2, price: 250 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div></div>
      <div></div>
    </div>
  );
};
export default Cart;
