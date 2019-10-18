'use strict';

const refs = {
  days: document.querySelector(`span[data-value="days"]`),
  hours: document.querySelector(`span[data-value="hours"]`),
  mins: document.querySelector(`span[data-value="mins"]`),
  secs: document.querySelector(`span[data-value="secs"]`),
};

class CountdownTimer {
  constructor(CountdownTimer) {
    this.selector = CountdownTimer.selector;
    this.targetDate = CountdownTimer.targetDate;
    this.startTimer();
  }

  updateTimer(time) {
    let day = Math.floor(time / (1000 * 60 * 60 * 24));
    let hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((time % (1000 * 60)) / 1000);

    return { day, hour, min, sec };
  }

  startTimer() {
    this.timerId = setInterval(() => {
      const deltaTime = this.targetDate - Date.now();
      if (deltaTime === 0) {
        clearInterval(this.timerId);
        refs.days.textContent = 0;
        refs.hours.textContent = 0;
        refs.mins.textContent = 0;
        refs.secs.textContent = 0;
      } else {
        this.placeToHtml(this.updateTimer(deltaTime));
      }
    }, 1000);
  }

  placeToHtml({ day, hour, min, sec }) {
    refs.days.textContent = day;
    refs.hours.textContent = hour;
    refs.mins.textContent = min;
    refs.secs.textContent = sec;
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
