import React from 'react';
import PropTypes from 'prop-types';


class ProductSollo extends React.Component {
    state = { 
        selectItemId:0
    }
    chosen = (e) =>{
        this.props.cbchoseItem(e.target.closest('.product_element').getAttribute("data_id"))        
    }
    dellProduct = (e) =>{
        e.stopPropagation()
        this.props.cbDelete(this.props.index)
    }
    redactProduct = (e) =>{
        e.stopPropagation()
        this.props.cdRedactItem(this.props.code,this.props.name,this.props.img,this.props.price,this.props.count)
    }
    render() {
        return (
            <div className={"product_element " + this.props.chose} data_id={this.props.code} onClick={this.chosen}>
                <img className="product_img" src={this.props.img} />
                <span className="product_title">{this.props.name}</span>
                <div className="product_price_block">
                    <span className="product_price_name">Цена</span>
                    <span className="product_price">{this.props.price}</span>
                </div>
                <div className="product_price_block">
                    <span className="product_price_name">Колличество на складе</span>
                    <span className="product_price">{this.props.count}</span>
                </div>
                <button className="button_dell" onClick={this.dellProduct}>удалить</button>
                <button className="button_dell" onClick={this.redactProduct}>редактировать</button>
                
            </div>
        );
      
    }
}
export default ProductSollo;