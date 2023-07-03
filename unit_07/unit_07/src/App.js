import React from 'react';

import './App.css';
import Cart from './Cart';
import Goods from './Goods';

import goodsArr from './goods.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: {},
      count: 0,
    };
  }

  addToCart = (event) => {
    event.preventDefault();

    if (!event.target.classList.contains('add-to-cart')) return false; //если кликнули не на кнопке с нужным нам классом, то выходим из метода.

    let cartTemp = this.state.cart; //получаем текущее значение state для манипуляции

    cartTemp[event.target.dataset.key]
      ? cartTemp[event.target.dataset.key]++
      : (cartTemp[event.target.dataset.key] = 1); //проверяем, если артикула товара нет в объекте корзине - то делаем запись в формате атикул : 1, т.е. один товар, а если товар уже есть - то увеличиваем количество на единицу.
    // cartTemp++;
    this.setState({ cart: cartTemp });
    let count = this.state.count;
    count++;
    this.setState({ count: count });
  };

  render() {
    let showCart;

    if (this.state.count !== 0) {
      showCart = <Cart cart={this.state.cart} goods={goodsArr} />;
    } else {
      showCart = 'Empty';
    }

    return (
      <div className="container">
        <h1>Cart</h1>
        <div className="goods-field" onClick={this.addToCart}>
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
        {showCart}
      </div>
    );
  }
}

export default App;
