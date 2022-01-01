import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

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


  const addProduct = async () => {

    try {
      await fetch(`http://localhost:5000/products/add?name=${name}&price=${price}`);
      await getProducts()

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
            <span style={{ margin: '15px' }}>{price}_Rupees</span>
          </div>

        </div>
      })}
      <div>
        <input type="text" value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
        <input type="number" value={price} placeholder='price' onChange={(e) => setPrice(parseInt(e.target.value))} />
        <button onClick={addProduct}>Add Data</button>
      </div>
    </div >
  );
}

export default App;
