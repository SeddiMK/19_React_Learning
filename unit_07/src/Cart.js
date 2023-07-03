import { useState } from 'react';
import React from 'react';

class Carts extends React.Component {
  rander() {
    const [cart, useCart] = useState({});
    const [count, useCount] = useState(0);

    return (
      <div className="container">
        <h1>Cart</h1>
        <div className="goods-field"></div>
      </div>
    );
  }
}

export default Carts;
