var VotesBlock = React.createClass({

  displayName: 'VotesBlock',
  getInitialState: function() {
    return { 
      sorted: false,
      filtred:"",
      prStrc:this.props.strings,
    };
  },
  procList: function(){
    let rest = this.props.strings.slice();
    if(this.state.filtred){
      rest = rest.filter(el => el.indexOf(this.state.filtred) > -1)
    };
    if(this.state.sorted){
      rest.sort();
    };
    this.setState({prStrc:rest})
  },
  filtrede:function(EO){
    this.setState({filtred:EO.target.value},this.procList)
  },
  sorted: function(EO){
      this.setState({sorted:EO.target.checked},this.procList)
  },
  reboot:function(){
    this.setState({sorted:false,filtred:"",},this.procList)
  },
  render: function() {
      var answersCode = this.state.prStrc.map( v =>
        React.DOM.span( {className:'VotesBlock24'}, v),
    ); 
    return React.DOM.div( {className:'VotesBlock'}, 
            React.DOM.div( {className:'FilterForm'},
            React.DOM.input( {className:'VotesQuestion',type:"checkbox",checked:this.state.sorted,
            onClick:this.sorted},),
            React.DOM.input( {className:'VotesQuestion',type:"text",value:this.state.filtred,
            onChange:this.filtrede}),
            React.DOM.button( {className:'VotesQuestion',
            onClick:this.reboot,}, 'Сброс'),
            ),
      React.DOM.div( {className:'Answers'}, answersCode ),
    );
  },
});