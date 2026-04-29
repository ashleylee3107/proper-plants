export default function PlantCard({ plant, addToCart }) {
  return (
    <article className="plant-card">
      <p>{plant.image}</p>
      <h2>{plant.name}</h2>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </article>
  );
}
