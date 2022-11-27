import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">medicine</a>
      </header>
      <main>
        <h1>Feature Product</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="products" key={product.napa}>
              <a href={`/product/${product.napa} `}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className=" product-info">
                <a href={`/product/${product.napa} `}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>{product.price} Tk</strong>{' '}
                </p>
                <button>Add cart </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
