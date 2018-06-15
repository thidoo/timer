import React from 'react';
import { Button } from "@myob/myob-widgets";

class MyButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Button type="primary" onClick={() => this.props.onClick()}>
        {this.props.buttonText}
      </Button>
    )
  }
}

export default MyButton;