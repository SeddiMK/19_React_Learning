import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';

import { selectCart, minus, del } from '../store/cartSlice';

import Cart from '../components/Cart';

export default function CartList() {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const dispath = useDispatch();

  // переидексирую массив товара
  const goodsObj = goods.reduce((accum, item) => {
    accum[item['articul']] = item;
    return accum;
  }, {});
  // console.log(goodsObj);

  let clickHandler = (e) => {
    e.preventDefault();
    let targ = e.target;

    if (!targ.classList.contains('add-to-cart')) {
      return true;
    }
    if (!targ.classList.contains('delete-one-position')) {
      return true;
    }
    if (!targ.classList.contains('delete-quantity')) {
      return true;
    }

    dispath(minus(targ.getAttribute('data-key')));
    dispath(del(targ.getAttribute('data-key')));
  };

  return (
    <div className="goods-table" onClick={clickHandler}>
      <ul>
        {Object.keys(cart).map((el) => (
          <li key={el + goodsObj[el]['title']}>
            {goodsObj[el]['title']} - {cart[el]}
          </li>
        ))}
      </ul>

      <div>
        <ul>
          {Object.keys(cart).map((el) => (
            <Cart
              title={goodsObj[el]['title']}
              cost={goodsObj[el]['cost']}
              quantity={cart[el]}
              priceAllItem={goodsObj[el]['cost'] * cart[el]}
              // image={goodsObj[el]['image']}
              // articul={goodsObj[el]['articul']}
              key={el + goodsObj[el]['title']}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
