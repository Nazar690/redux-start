import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../../actions/cart.actions'
import './cart.css';

export class Cart extends Component {

  render() {
    let carts = this.props.cart.inCart;
    return (<div className="App-cart">
      {!carts.length ? 'Your cart is empty :(' : carts.map((cart, index) => (
        <div className="cart_list_item" key={index}>
          <p>{cart.name}</p>
          <button className="remove-from-cart-btn" onClick={() => this.props.remove(index)}>Delete</button>
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
