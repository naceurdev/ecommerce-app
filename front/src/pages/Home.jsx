import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Products from '../components/Products';
import Filter from '../components/Filter';
import Basket from '../components/Basket';
import { fetchProducts, filterProducts, sortProducts } from '../actions/productActions';
import { addToCart, removeFromCart, removeAllFromCart } from '../actions/cartActions';


class Home extends Component {
  componentWillMount() {
    const { getProducts } = this.props;
    getProducts();
    // if (localStorage.getItem('cartItems')) {
    //   this.setState({})
    // }
  }

  render() {
    const {
      handleRemoveFromCart,
      handleRemoveAllFromCart,
      handleAddToCart,
      handlefilterProducts,
      handlesortProducts,
      products,
      cartItems,
      filteredProducts,
      size,
      sort,
    } = this.props;
    return (
      <div className="row">
        <div className="col-md-9">
          <Filter
            handleSortChange={handlesortProducts}
            handleSizeChange={handlefilterProducts}
            products={products}
            filteredProducts={filteredProducts}
            size={size}
            sort={sort}
          />
          <hr />
          <Products
            products={filteredProducts}
            handleAddToCart={handleAddToCart}
            cartItems={cartItems}
          />
        </div>
        <div className="col-md-3">
          <Basket
            cartItems={cartItems}
            handleRemoveFromCart={handleRemoveFromCart}
            handleRemoveAllFromCart={handleRemoveAllFromCart}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getProducts: PropTypes.func,
  handleRemoveFromCart: PropTypes.func,
  handleRemoveAllFromCart: PropTypes.func,
  handleAddToCart: PropTypes.func,
  handlefilterProducts: PropTypes.func,
  handlesortProducts: PropTypes.func,
  products: PropTypes.array,
  cartItems: PropTypes.array,
  filteredProducts: PropTypes.array,
  size: PropTypes.string,
  sort: PropTypes.string,
};

const mapStateToProps = (state) => ({
  products: state.products.items,
  cartItems: state.cart.items,
  filteredProducts: state.products.filteredItems,
  size: state.size,
  sort: state.sort,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => (dispatch(fetchProducts())),
  handleAddToCart: (cartItems, product) => (dispatch(addToCart(cartItems, product))),
  handleRemoveFromCart: (cartItems, item) => (dispatch(removeFromCart(cartItems, item))),
  handleRemoveAllFromCart: () => (dispatch(removeAllFromCart())),
  handlefilterProducts: (products, value) => (dispatch(filterProducts(products, value))),
  handlesortProducts: (products, value) => (dispatch(sortProducts(products, value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
