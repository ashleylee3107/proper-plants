import { useState } from "react";
import plants from "./data";
import PlantList from "./PlantList";
import Cart from "./Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const plantInCart = cart.find((item) => item.id === plant.id);
    if (plantInCart) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }

  function removeFromCart(plant) {
    const plantInCart = cart.find((item) => item.id === plant.id);

    if (plantInCart.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    } else {
      setCart(cart.filter((item) => item.id !== plant.id));
    }
  }

  return (
    <main className="app">
      <section className="plants-section">
        <h1>Proper Plants</h1>
        <h2>Plants</h2>
        <PlantList plants={plants} addToCart={addToCart} />
      </section>

      <section className="cart-section">
        <h2>Cart</h2>
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </section>
    </main>
  );
}
