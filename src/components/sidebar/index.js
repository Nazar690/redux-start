import React from 'react';
import './sidebar.css';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchGithubData} from '../../actions/products.action';

export class SideBar extends React.Component {
  
  componentDidMount() {
    this.props.getProduct();
  }
  
  render() {
    return (<div className="App-sidebar">
      <nav className="App-sidebar-nav">
        <ul>
          <Link to="/">
            <li>Product list</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </nav>
    </div>);
  }
};

const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => ({
  getProduct: () => dispatch(fetchGithubData())
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);