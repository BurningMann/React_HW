import React from 'react';
import PropTypes from 'prop-types';


import ProductSollo from './ProductSollo';

import './Catalog.css';

class Catalog extends React.Component {
  state = {currentProd:this.props.products, chosenItemId:0}
  deleteItem = (id) =>{
    let newProd = this.state.currentProd
    newProd.splice((id), 1)
    this.setState({currentProd:newProd})
  }
  choseItem = (element) =>{
    this.setState({chosenItemId:element})
  }
  render(){
    let product_s = this.state.currentProd.map( (v, i) =>
      <ProductSollo 
        key = {v.code} name = {v.name} img = {v.img} price = {v.price} count = {v.count} code = {v.code} cbDelete = {this.deleteItem} index = {i} cbchoseItem = {this.choseItem} chose = {(this.state.chosenItemId == v.code) ? "chosen" : null}
      />
    );
    return (
      <div className='product_wraper'>{product_s}</div>
    )
  }

}
  export default Catalog;
