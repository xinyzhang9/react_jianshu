import React, { Component } from 'react';
import Button from './Button';
import Dialog from './Dialog';


import './App.css';

class App extends Component {
  state={
    loading: false,
    dialog: false,
    message: 'Hello World!'
  }

  submit = () => {
    this.setState({
      loading: true
    })

    setTimeout( ()=> {
      const res = Math.random(1);
      if(res > 0.5){
        this.setState({
          dialog: true,
          message: 'Success!',
        })
      }else{
        this.setState({
          dialog: true,
          message: 'Failed!',
        })
      }
      this.setState({
        loading: false
      })
    },1000)

  }

  close = ()=> {
    this.setState({
      dialog: false
    })
  }


  render() {
    const { loading, dialog, message } = this.state;
    return (
      <div className='app-wrap'>
        <Button loading={ loading } submit={ this.submit }>Submit</Button>
        { dialog && <Dialog message={ message } close={ this.close } /> }
      </div>
    );
  }
}

export default App;
