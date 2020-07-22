'use strict';

const refs = {
  btnStar: document.querySelector('.startBtn'),
  btnStop: document.querySelector('.stopBtn'),
  day: document.querySelector('[data-value="days"]'),
  hour: document.querySelector('[data-value="hours"]'),
  minute: document.querySelector('[data-value="mins"]'),
  second: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    refs.btnStop.addEventListener('click', () => {
      refs.btnStar.removeAttribute('disabled');
      refs.btnStop.setAttribute('disabled', true);
      clearInterval(this.selector);
    });

    refs.btnStar.addEventListener('click', () => {
      refs.btnStar.setAttribute('disabled', true);
      refs.btnStop.removeAttribute('disabled');

      this.selector = setInterval(() => {
        const diffTime = this.targetDate - Date.now();
        refs.day.textContent = Math.floor(diffTime / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(3, 0);
        refs.hour.textContent = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          .toString()
          .padStart(2, 0);
        refs.minute.textContent = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, 0);
        refs.second.textContent = Math.floor((diffTime % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, 0);
      }, 1000);
    });
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
});
