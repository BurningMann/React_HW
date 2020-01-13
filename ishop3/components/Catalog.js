import React from 'react';
import PropTypes from 'prop-types';


import ProductSollo from './ProductSollo';

import ControlForm from './ControlForm';

import './Catalog.css';

class Catalog extends React.Component {
  state = {currentProd:this.props.products, chosenItemId:0}
  deleteItem = (id) =>{
    let newProd = this.state.currentProd
    newProd.splice((id), 1)
    this.setState({currentProd:newProd})
  }
  addItem = (name,img,price,count) =>{
    let maxId = []
    this.state.currentProd.map( v =>
      maxId.push(v.code)
    );
    maxId.sort(function(a, b) {
      return a - b;
    });
    let newProduct = {"name":name,"img":img,"price":price,"count":count,"code":(maxId[maxId.length - 1]+1)}
    let addNewProd = this.state.currentProd
    addNewProd.push(newProduct)
    this.setState({currentProd:addNewProd,addCart:false})
  }
  openAddForm = () =>{
    this.setState({addCart:true})
  }
  choseItem = (element) =>{
    this.setState({chosenItemId:element})
  }
  back = () =>{
    this.setState({addCart:false})
  }
  redact = (id,name,img,price,count) => {
    console.log(id)
    console.log(name)
    console.log(img)
    console.log(price)
    console.log(count)
  }
  render(){
    let product_s = this.state.currentProd.map( (v, i) =>
      <ProductSollo 
        key = {v.code} name = {v.name} img = {v.img} price = {v.price} count = {v.count} code = {v.code} cbDelete = {this.deleteItem} index = {i} cbchoseItem = {this.choseItem} chose = {(this.state.chosenItemId == v.code) ? "chosen" : null} cdRedactItem = {this.redact}
      />
    );
    let controlform = 
    <ControlForm 
    cbAddElement = {this.addItem} cbBack = {this.back}
    />
    return (
      <div>
        <div className='product_wraper'>{product_s}</div>
        <button className="button_dell" onClick={this.openAddForm}>добавить</button>
        {(this.state.addCart) ? 
        <div>{controlform}</div>
        : 
        null}
      </div>
    )
  }

}
  export default Catalog;
