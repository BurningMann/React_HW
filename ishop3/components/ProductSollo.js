import React from 'react';
import PropTypes from 'prop-types';


class ProductSollo extends React.Component {
    state = { 
        selectItemId:0
    }

/*     proc = () =>{  
        if(this.state.chosen){
            this.state.select.style.background = 'blanchedalmond'
            console.log('yes')
        }else{
            this.state.select.style.background = 'none'
            this.setState({select:undefined})
            console.log('no')
        }
    }

    chosen = (EO) => {
        var selected = EO.target.closest('.product_element')
        if(this.state.chosen){
            this.setState({chosen:false},this.proc);  
        }else{
            this.setState({chosen:true,select:selected,},this.proc);
        }
    } */
    chosen = (e) =>{
        this.props.cbchoseItem(e.target.closest('.product_element').getAttribute("data_id"))        
    }
    dellProduct = (e) =>{
        e.stopPropagation()
        this.props.cbDelete(this.props.index)
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
            </div>
        );
      
    }
}
export default ProductSollo;