import React, { Component } from 'react';

class HelloWorld extends Component {
  clickHandler = () => {
    console.log(this.refs);
  }

  // better for ajax
  componentDidMount(props){
    console.log(this.refs);
  }


  render(){
    return(
      <div className='container' onClick={this.clickHandler.bind(this)}>
        <div ref='hello' className='hello'>Hello</div>
        <div ref='world' className='world'>World</div>
      </div>
    )
  }
}
export default HelloWorld;
