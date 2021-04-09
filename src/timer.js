class Timer {
  constructor(selector, countdown = 0) {
    this.element = document.querySelector(selector);
    this.countdown = countdown;
  }

  getSeconds() {
    const sec = Math.floor((this.countdown % (1000 * 60)) / 1000);
    return transformValues(sec);
  }

  getMinutes() {
    const min = Math.floor((this.countdown % (1000 * 60 * 60)) / (1000 * 60));
    return transformValues(min);
  }

  getHours() {
    const hours = Math.floor(
      (this.countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    return transformValues(hours);
  }

  getDays() {
    const days = Math.floor(this.countdown / (1000 * 60 * 60 * 24));
    return transformValues(days);
  }

  render() {
    this.element.innerHTML = `
      <div id="days">${this.getDays()}</div> :
      <div id="hours">${this.getHours()}</div> :
      <div id="minutes">${this.getMinutes()}</div> :
      <div id="seconds">${this.getSeconds()}</div>
    `;
  }

  init() {
    const interval = setInterval(() => {
      this.countdown -= 1000;

      if (this.countdown <= 0) {
        this.countdown = 0;
        clearInterval(interval);
      }

      this.render();
    }, 1000);
  }
}

function transformValues(value) {
  return String(value).padStart(2, '0');
}

export default Timer;
