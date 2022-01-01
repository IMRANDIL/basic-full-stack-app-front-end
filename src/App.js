import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    getProducts()

  }, [products])


  const getProducts = async () => {
    try {
      const fetchData = await fetch('http://localhost:5000/products');
      const response = await fetchData.json();
      const data = await response.data;
      setProducts(data)
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="App">
      <h1 >Basic_full_Stack_App</h1>
      {products.map(({ product_id, name, price }) => {
        return <div key={product_id} style={{ background: 'red', color: 'white' }}>

          <div style={{ padding: '20px' }}>
            {name}
            <span style={{ margin: '15px' }}>{price}Rupees</span>
          </div>

        </div>
      })}
    </div >
  );
}

export default App;
