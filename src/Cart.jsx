import CartItem from "./CartItem";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <section className="cart">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </section>
  );
}
