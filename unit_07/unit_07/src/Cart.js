import React from 'react';

class Cart extends React.Component {
  getGoodsFromArr = (art) => {
    // дополнительный метод, который позволяет вытянуть из массива товаров - описание одного товара, и здесь его получаем по артикулу.
    for (let i = 0; i < this.props.goods.length; i++) {
      if (art === this.props.goods[i]['articul']) {
        return this.props.goods[i];
      }
    }
  };

  renderObj = () => {
    let out = []; //теги, используя возможности jsx будем класть в массив
    console.log(out);
    for (let key in this.props.cart) {
      //перебираем переданный props, но в props только артикул и количество
      let goods = this.getGoodsFromArr(key);
      console.log(goods);

      out.push(
        //потом добавляем нужные данные в out и возвращаем его.
        <tr key={key}>
          <td>{goods['title']}</td>
          <td>{this.props.cart[key]}</td>
          <td>{this.props.cart[key] * goods['cost']}</td>
        </tr>
      );
    }
    return out;
  };

  render() {
    return (
      <>
        <div className="cart-field">
          <h1>Корзина</h1>
          <table>
            <tbody>
              <tr>
                <th>Art</th>
                <th>Count</th>
                <th>Cost</th>
              </tr>
              {this.renderObj()}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Cart;
