
class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      data: "Enter your Git-flavoured markup here:  **strong**, *italic* etc." 
      
    }
    this.updateState = this.updateState.bind(this);
  };
  
  updateState(e){
    this.setState({data: e.target.value});
  }
  
  render(){
    return(
      <div className="container-fluid">
      <div className="row">
      <div className="col-xs-6" id="entryDiv">
      <textarea id="ta" value={this.state.data} onChange={this.updateState}/></div>
  
        
 <div className="col-xs-6" id="displayDiv" dangerouslySetInnerHTML={{__html: marked(this.state.data)}} />       

  </div>      
 </div>
    );
  }
}

ReactDOM.render(
  <App/>,  document.getElementById('rawMarkdown')
);
