import React from 'react';
import Timer from './Timer/Timer';
import TimerService from './Timer/TimerService';
import MyButton from './Button/MyButton';

import './TimerApp.css';

class TimerApp extends React.Component{

  MAX_TIME = 5*1000;
  UPDATE_FREQUENCY = 1000;

  START = "START";
  RUNNING = "RUNNING";
  PAUSED = "PAUSED";
  FINISHED = "FINISHED";

  RESET = "RESET";
  STOP = "STOP";

  constructor(props){
    super(props);

    this.state = {
      timeRemained: this.MAX_TIME,
      runningState: this.START,
      leftButtonText: this.START,
      rightButtonText: this.RESET,
    };

    this.timerService = new TimerService();
  }

  componentDidMount(){
    this.timerID = setInterval(() => {
      switch(this.state.runningState){
        case this.START:
          this.setState({
            timeRemained: this.MAX_TIME,
            leftButtonText: this.START
          });
          break;
        case this.RUNNING:
          if (this.state.timeRemained > 0){
            this.setState({
              timeRemained: this.state.timeRemained - 1000,
              leftButtonText: this.STOP
            });
          }
          else{
            this.setState({
              runningState: this.START,
              leftButtonText: this.START
            })
          }
          break;
        case this.PAUSED:
          this.setState({
            leftButtonText: this.START
          });
          break;
        case this.FINISHED:
          this.setState({
            runningState: this.START
          });
      }
    }, this.UPDATE_FREQUENCY);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  handleStopStart = () => {
    switch(this.state.leftButtonText) {
      case this.START:
        this.setState({
          runningState: this.RUNNING,
          leftButtonText: this.STOP
        });
        break;
      case this.STOP:
        this.setState({
          runningState: this.PAUSED,
          leftButtonText: this.START
        });
        break;
    }
  };

  handleReset = () => {
      this.setState({
        runningState: this.START,
        leftButtonText: this.START
      });
  };

  render(){
    return (
      <div className="TimerApp">
        <Timer timeRemained = {this.timerService.format(this.state.timeRemained)}/>
        <div className="Buttons">
          <MyButton className="LeftButton" buttonText={this.state.leftButtonText} onClick={this.handleStopStart}/>
          <MyButton className="RightButton" buttonText={this.state.rightButtonText} onClick={this.handleReset}/>
        </div>
      </div>
    );
  }
}

export default TimerApp;