import './App.css';
import Carts from './Cart';
import Goods from './Goods';

import goodsArr from './goods.json';

function App() {
  return (
    <>
      <div className="container">
        <h1>Cart</h1>
        <div className="goods-field">
          {goodsArr.map((item) => (
            <Goods
              title={item.title}
              cost={item.cost}
              image={item.image}
              articul={item.articul}
              key={item.articul}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
