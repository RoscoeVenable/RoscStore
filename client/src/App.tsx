import { useEffect, useState } from "react";
import { Product } from "./product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(Response => Response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct(){
    setProducts(prevState => [...products, 
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1),
        price: (prevState.length * 1000) + 1000,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200'
      }])
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
