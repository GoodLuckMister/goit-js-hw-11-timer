const ref = {
  days: document.querySelector('span[data-value = days]'),
  hours: document.querySelector('span[data-value = hours]'),
  minutes: document.querySelector('span[data-value = mins]'),
  seconds: document.querySelector('span[data-value = secs]'),
};

let intervalRef = null;

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start(timerClock) {
    intervalRef = setInterval(() => {
      const startTime = this.targetDate;
      const currentNow = Date.now();
      const time = startTime - currentNow;
      timerClock(time);
    }, 1000);
  }
  stop() {
    clearInterval(intervalRef);
  }
}
const startTime = new Date('December 17, 2021');
const timer = new CountdownTimer('#timer1', startTime);

timer.start(updateClockFace);

function updateClockFace(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );

  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  setTimeClockFace(days, hours, mins, secs);
}
function pad(value) {
  return String(value).padStart(2, '0');
}

function setTimeClockFace(days, hours, mins, secs) {
  ref.days.textContent = days;
  ref.hours.textContent = hours;
  ref.minutes.textContent = mins;
  ref.seconds.textContent = secs;
}
