import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="Timer">
        {this.props.timeRemained}
      </div>
    );
  }
}

export default Timer;