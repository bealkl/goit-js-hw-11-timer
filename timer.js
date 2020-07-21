'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.timeCalculation = this.timeCalculation.bind(this);
    this.begin();
  }
  timeCalculation() {
    const day = document.querySelector('[data-value="days"]');
    const hour = document.querySelector("[data-value='hours']");
    const minute = document.querySelector("[data-value='mins']");
    const second = document.querySelector("[data-value='secs']");
    const timeNow = Date.now();
    this.time = this.targetDate - timeNow;
    const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    day.textContent = days < 10 ? `0${days}` : days;
    const hours = Math.floor(
      (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    hour.textContent = hours < 10 ? `0${hours}` : hours;
    const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    minute.textContent = mins < 10 ? `0${mins}` : mins;
    const secs = Math.floor((this.time % (1000 * 60)) / 1000);
    second.textContent = secs < 10 ? `0${secs}` : secs;
  }

  begin() {
    setInterval(this.timeCalculation, 1000);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
});

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = Math.floor((time % (1000 * 60)) / 1000);
