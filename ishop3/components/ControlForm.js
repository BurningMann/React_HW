import React from 'react';


class ControlForm extends React.Component {
    addItem = () =>{
        let name = document.getElementsByName("name")[0].value
        let img = document.getElementsByName("img")[0].value
        let price = document.getElementsByName("price")[0].value
        let count = document.getElementsByName("count")[0].value
        this.props.cbAddElement(name,img,price,count)
    }
    back = () =>{
        this.props.cbBack()
    }
    render() {
        return(
            <div>
            {/* {(this.state.addCart) ?  */}
                <div>
                <span>name</span><div className="name"><input type="text" name="name"/></div>
                <span>img</span><div className="img"><input type="text" name="img" /></div>
                <span>price</span><div className="price"><input type="text" name="price"/></div>
                <span>count</span><div className="count"><input type="text" name="count"/></div>
                <button className="button_dell" onClick={this.addItem}>Go</button>
                <button className="button_dell" onClick={this.back}>Back</button>
                 </div> 
               {/*  : 
                null} */}
            </div>

        );
    }
}

export default ControlForm;