$('.product_count_button').click(function(){
  var product_count = $('.product_count').val()
  var GoodsTable = React.createClass({

  displayName: 'GoodsTable',

  getDefaultProps: function() {
    return { name: "ни о чём" }
  },

  render: function() {

    var answersCode=[];

    this.props.goods.forEach(function(product,a){
        var answerCode=        
        React.DOM.div({key:a, className:'product_element'},

          React.DOM.img({className:'product_img',src:product.img,}),

          React.DOM.span({className:'product_title'},product.name),

          React.DOM.div({className:'product_price_block',},
          React.DOM.span({className:'product_price_name'},'Цена'),
          React.DOM.span({className:'product_price'},product.price),
          ),

          React.DOM.div({className:'product_price_block',},
          React.DOM.span({className:'product_price_name'},'Колличество на складе'),
          React.DOM.span({className:'product_price'},product.count),
          )
        );
        answersCode.push(answerCode);
    });
    return React.DOM.div( {className:'VotesBlock'}, 
      React.DOM.div( {className:'Question'}, this.props.name ),
      React.DOM.div( {className:'Answers'}, answersCode ),
    );
  },
});
  var magazineName='Математика с подвохой';
  var goods=[];
  for(let i=0; i<product_count; i++){
    goods.push({name:'woodo',img:'http://kaifolog.ru/uploads/posts/2014-10/thumbs/1413966844_042_2.jpg',price:10,count:222},)
  }
  let cont = $('#container')[0]
    ReactDOM.render(
      React.createElement(GoodsTable,{name:magazineName,goods:goods}), 
      cont
    );

});
/* var GoodsTable2 = React.createClass({
  render: function() {
    return React.DOM.div( {className:'VotesBlock2'}, 
      React.DOM.div( {className:'VotesBlock'}, 
        React.DOM.form( {},
          React.DOM.input({type:'text', className:'product_count'}),
          React.DOM.input({type:'button', className:'product_count_button', value:'сколько товаров'}),
        ),
      )
    );
  }
})
ReactDOM.render(
  React.createElement(GoodsTable2), 
  document.getElementById('container')
); */