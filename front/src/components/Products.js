import React from 'react';
import PropTypes from 'prop-types';
import util from '../util';
import { Button } from '../Common';

const Products = ({
  products,
  handleAddToCart,
  cartItems,
}) => {
  const productItems = (products || []).map((product) => (
    <div className="col-md-4" key={product.id}>
      <div className="thumbnail text-center">
        <a href={`#${product.id}`} onClick={() => handleAddToCart(cartItems, product)}>
          <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
          <p>{product.title}</p>
        </a>
        <b>{util.formatCurrency(product.price)}</b>
        <Button
          className="btn btn-primary"
          onClick={() => handleAddToCart(cartItems, product)}
          label="Add to cart"
        />
      </div>
    </div>
  ));

  return (
    <div className="row">
      {productItems}
    </div>
  );
};

Products.propTypes = {
  handleAddToCart: PropTypes.func,
  products: PropTypes.array,
  cartItems: PropTypes.array,
};

export default Products;
