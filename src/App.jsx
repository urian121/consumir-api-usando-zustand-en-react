import { useEffect } from "react";
import "./App.css";
import useStoreApi from "./zustand/stores/useStoreApi";

function App() {
  const { products, loading, error, fetchProducts } = useStoreApi();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Total Resultados: {products.length}</h1>
      <ul className="products-list">
        {products.map((product) => (
          <li className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
            <p className="price">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
