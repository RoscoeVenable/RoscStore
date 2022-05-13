import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
  {name: 'product1', price: 1000.00},
  {name: 'product2', price: 2000.00},
]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(Response => Response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct(){
    setProducts(prevState => [...products, 
      {name: 'product' + (prevState.length + 1), price: (prevState.length * 1000) + 1000}])
  }
  return (
    <div>
      <h1>Store</h1>
      <ul>
        <>{products.map((product, index) => (
          <li key={index}>
            <>{product.name} - {product.price}</>
          </li>
        ))}</>
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
}

export default App;
