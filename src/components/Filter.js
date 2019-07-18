import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({
  filteredProducts,
  handleSortChange,
  handleSizeChange,
  size,
  sort,
  products,
}) => (
  <div className="row">
    <div className="col-md-4">
      {`${filteredProducts.length} products found.`}
    </div>
    {console.log(filteredProducts)}
    <div className="col-md-4">
      <label>
        {'Order by'}
        <select
          className="form-control"
          value={sort}
          onChange={(e) => handleSortChange(filteredProducts || products, e.target.value)}
        >
          <option value="">Select</option>
          <option value="lowestprice">Lowest to highest</option>
          <option value="highestprice">Highest to lowest</option>
        </select>
      </label>
    </div>
    <div className="col-md-4">
      <label>
        {'Filter Size'}
        <select
          className="form-control"
          value={size}
          onChange={(e) => handleSizeChange(products, e.target.value)}
        >
          <option value="">ALL</option>
          <option value="x">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
      </label>
    </div>
  </div>
);

Filter.propTypes = {
  handleSizeChange: PropTypes.func,
  handleSortChange: PropTypes.func,
  size: PropTypes.func,
  sort: PropTypes.func,
  products: PropTypes.array,
  filteredProducts: PropTypes.array,
};

export default Filter;
