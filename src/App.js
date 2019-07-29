import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

// Components
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';
import Modal from './components/modal/index'

// CSS
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeComponent: 'product-list',
      isVisible: false,
    };
  }

  visibleModal = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className="App-title">My simple shop</h1>
          </Link>
          <div className="App-new-product">
            <button className="add-product" onClick={this.visibleModal}>New product</button>
          </div>
          <Link to="/cart">
            <h1 className="App-count-items">Cart {this.props.cart.inCart.length}</h1>
          </Link>
        </header>
        <div className="App-wrapper">
            <SideBar />
            <Switch>
              <Route path="/" exact component={ProductList} />
              <Route path="/cart" component={Cart} />
            </Switch>
        </div>
        <Modal visibleModal={this.visibleModal} isVisible={this.state.isVisible}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});


export default connect(mapStateToProps)(App);