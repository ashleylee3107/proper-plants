export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <article className="cart-item">
      <p>{item.image}</p>
      <h2>{item.name}</h2>
      <p>Quantity: {item.quantity}</p>

      <button onClick={() => addToCart(item)}>+</button>
      <button onClick={() => removeFromCart(item)}>-</button>
    </article>
  );
}
