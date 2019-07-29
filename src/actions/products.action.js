export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';


export const addNewProduct = payload => ({type: ADD_NEW_PRODUCT, product: payload});

export const fetchGithubData = () => {
    return (dispatch) => {
      return fetch('/data.json')
        .then(response => response.json())
        .then(data => dispatch({type: GET_PRODUCT_LIST, product: data.products}))
        .catch(error => {
          throw(error);
        });
    };
  };