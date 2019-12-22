var Filter = React.createClass({

  displayName: 'Filter',

  filtred:function(hp) { 
    var filter_value = hp.target.value
    console.log(hp.target.value); 
    answerSelected();
  },

  render: function() {

    return React.DOM.div( {className:'FilterForm'},
      React.DOM.input( {className:'VotesQuestion',type:"checkbox"},),
      React.DOM.input( {className:'VotesQuestion',type:"text",
      onChange:this.filtred}),
      React.DOM.button( {className:'VotesQuestion'}, 'Сброс'),
    );
  },

});