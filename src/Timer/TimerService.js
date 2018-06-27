class TimerService {

  format(milliseconds){
    return this.computeNumberWithTwoDigits(this.computeMinute(milliseconds)) + ':' +
      this.computeNumberWithTwoDigits(this.computeSecond(milliseconds));
  }

  computeNumberWithTwoDigits = (number) => {
    return (number < 10 ? '0' : '') + number;
  };

  computeMinute = (milliseconds) => {
    return Math.floor(milliseconds/60000);
  };

  computeSecond = (milliseconds) => {
    return (milliseconds/1000) % 60;
  };
}

export default TimerService;
