function fetchProducts() {
  const requestOptions = {
    method: 'GET',
    mode: 'cors',
  };
  return fetch(`${process.env.REACT_APP_PRODUCT_API_URL}/products`, requestOptions)
    .then((response) => response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (data && data.error) {
          return Promise.reject(data.error_description);
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    }));
}
export default fetchProducts;
