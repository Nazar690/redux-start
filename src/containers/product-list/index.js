import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../actions/cart.actions'
import {fetchGithubData} from '../../actions/products.action'
import './product-list.css';

export class ProductList extends Component {

  componentDidMount() {
    this.props.getProduct();
  }

  renderProducts() {
    let sorted = this.sortByName();
    return sorted.map((i, index) => (
      <div className="product_list_item" key={index}>
        <p>{i.name}</p>
        <p>Price: {i.price}</p>
        <p>Available: {i.available}</p>
        <p>{i.available > 0 ? 'In stock' : 'Sold out'}</p>
        <button className="add-to-cart-btn" disabled = {i.available === 0 ? true : false} onClick={() => this.props.add(i)}>Add to card</button>
      </div>
    ));
  }

  sortByName = () => this.props.product.products.sort((a, b) => {
      if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
      if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
      return 0; 
    })
  

  sortByPrice = () => this.props.product.products.sort((a, b) => b.price - a.price);
  

  sortByAvailable = () => this.props.product.products.sort((a, b) => b.available - a.available);

  getValue = (e) => {
    let value = e.target.value === undefined ? e.target.value : 'name';
    return value;
  }

  render() {
    return (<div>
      <select className="App-sort-select" onChange={this.getValue}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="availability">Availability</option>
        </select>
      <div className="App-product_list">
        {this.renderProducts()}
      </div>
    </div>);
  }
}

const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => ({
  add: (item) => dispatch(addToCart(item)),
  getProduct: () => dispatch(fetchGithubData())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);