import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNewProduct} from '../../actions/products.action'

export class Modal extends Component {
  constructor(){
    super()
    
    this.state = {
      name: "",
      price: "",
      available: ""
    }
  }
  newProduct = (e) => {
    let state = [...this.state]
    let title = e.target.name;
    let value = e.target.value;

    state[title] = value;
    this.setState(state);
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
  }

    render() {
        return (
            <div className="modal-window" style={{ display: this.props.isVisible ? 'block' : 'none'}}>
              <form className="modal-body" onSubmit={this.handleSubmit}>
                <div className="input-field">
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" onChange={this.newProduct} required/>
                </div>
                <div className="input-field">
                  <label htmlFor="price">Price:</label>
                  <input type="text" name="price" onChange={this.newProduct} required/>
                </div>
                <div className="input-field">
                  <label htmlFor="available">Available:</label>
                  <input type="number" name="available" onChange={this.newProduct} required/>
                </div>
                <div className="btn">
                  <button className="add-product" type="submit" onClick={() => this.props.addProduct(this.state)}>Add</button>
                  <button className="btn-cancel" onClick={this.props.visibleModal}>Cancel</button>
                </div>
              </form>
            </div>
        ) 
    }
}

const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => ({
  addProduct: (item) => dispatch(addNewProduct(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);