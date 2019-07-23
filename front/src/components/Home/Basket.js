import React from 'react';
import PropTypes from 'prop-types';
import util from '../../util';
import { Button } from '../../commun';

const Basket = ({ cartItems, handleRemoveFromCart, handleRemoveAllFromCart }) => (
  <div className="alert alert-info">
    {cartItems.length === 0
      ? 'Basket is empty'
      : (
        <div>
          {'You have'}
          {cartItems.length}
          {'items in the basket. '}
          <hr />
        </div>
      )
    }
    {cartItems.length > 0 && (
      <div>
        <ul style={{ marginLeft: -25 }}>
          {cartItems.map((item) => (
            <li key={item.id}>
              <b>{item.title}</b>
              <Button
                style={{ float: 'right' }}
                className="btn btn-danger btn-xs"
                onClick={() => handleRemoveFromCart(cartItems, item)}
                label="X"
              />
              <br />
              {item.count}
              {'X'}
              {util.formatCurrency(item.price)}
            </li>
          ))
          }
        </ul>
        <b>{`Sum: ${util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}`}</b>
        <Button
          style={{ float: 'right' }}
          className="btn btn-primary"
          onClick={() => alert('Todo: Implement checkout page.')}
          label="Checkout"
        />
        <Button
          className="btn btn-primary"
          onClick={() => handleRemoveAllFromCart()}
          label="Reset basket"
        />
      </div>
    )}
  </div>
);

Basket.propTypes = {
  cartItems: PropTypes.array,
  handleRemoveAllFromCart: PropTypes.func,
  handleRemoveFromCart: PropTypes.func,
};

export default Basket;
