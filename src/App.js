import './App.css';
import Product from './Products';

function App() {
  return (
    <div className="App">
      <h1>STORE</h1>
      <h3 className="error">An error occurred</h3>
      <Product name="TV Samsung" description="14' pol tela wide" price="1769,45" />
      <Product name="Apple box" description="setup box" price="299,99" />
      <Product name="Home Theater module" description="300w RMS" price="178,00" />
    </div>
  );
}

export default App;
