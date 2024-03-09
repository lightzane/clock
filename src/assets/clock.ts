// @ts-nocheck

const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');

const dh = document.querySelector('.dots.hours');
const dm = document.querySelector('.dots.minutes');
const ds = document.querySelector('.dots.seconds');

const _h = document.getElementById('h_h');
const _m = document.getElementById('h_m');
const _s = document.getElementById('h_s');

function tick() {
  const today = new Date();
  const h = today.getHours();
  const m = today.getMinutes();
  const s = today.getSeconds();

  hh.style.strokeDashoffset = 503 - (503 * h) / 12; // 503 - see clock.css | 12 - 12hrs clock
  mm.style.strokeDashoffset = 629 - (629 * m) / 60; // 629 - see clock.css | 60 - 60min clock
  ss.style.strokeDashoffset = 754 - (754 * s) / 60; // 754 - see clock.css | 60 - 60sec clock

  dh.style.transform = `rotateZ(${h * 30}deg)`; // 360 / 12 = 30
  dm.style.transform = `rotateZ(${m * 6}deg)`; // 360 / 60 = 6
  ds.style.transform = `rotateZ(${s * 6}deg)`; // 360 / 60 = 6

  _h.style.transform = `rotateZ(${h * 30}deg)`;
  _m.style.transform = `rotateZ(${m * 6}deg)`;
  _s.style.transform = `rotateZ(${s * 6}deg)`;
}

tick();

setInterval(tick, 1000);
