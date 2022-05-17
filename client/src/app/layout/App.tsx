import { Container, CssBaseline, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Product } from "./models/product";

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
    <>
    <CssBaseline/>
      <Header/>
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
      

    </>
  );
}

export default App;
