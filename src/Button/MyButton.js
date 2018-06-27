import React from 'react';
// import { Button } from "@myob/myob-widgets";
import './MyButton.css';

class MyButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <button className={this.props.buttonText.toLowerCase()} onClick={() => this.props.onClick()}>
        {this.props.buttonText}
      </button>
    )
  }
}

export default MyButton;
