import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../../actions/cart.actions'
import './cart.css';

export class Cart extends Component {

  render() {
    return (<div className="App-cart">
      {!this.props.cart.inCart.length ? 'Your cart is empty :(' : this.props.cart.inCart.map((cart, index) => (
        <div className="product_list_item" key={index}>
          <p>{cart.name}</p>
          <p>Price: {cart.price}</p>
          <p>{cart.available > 0 ? 'In stock' : 'Sold out'}</p>
          <button className="remove-from-cart-btn" onClick={() => this.props.remove(index)}>Remove from card</button>
        </div>
      ))}
    </div>);
  }
}

const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => ({
  remove: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
