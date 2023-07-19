import React from 'react';
import { useSelector } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';

import { selectCart } from '../store/cartSlice';

export default function CartList() {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  // переидексирую массив товара
  const goodsObj = goods.reduce((accum, item) => {
    accum[item['articul']] = item;
    return accum;
  }, {});
  // console.log(goodsObj);

  return (
    <div>
      <ul>
        {Object.keys(cart).map((el) => (
          <li key={el + goodsObj[el]['title']}>
            {goodsObj[el]['title']} - {cart[el]}
          </li>
        ))}
      </ul>
    </div>
  );
}
