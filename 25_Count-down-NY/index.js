
const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const sceondEl = document.getElementById('second');
// console.log(day);

const newYearTime = new Date('Aug 5, 2024 12:00:00 PM').getTime();

updateCountDown();

function updateCountDown() {
    const now = new Date().getTime();
    const gap = newYearTime - now;

    const sceond = 1000;
    const minute = sceond * 60;
    const hour =  minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / sceond);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    sceondEl.innerText = s;
    setTimeout(updateCountDown, 1000);
}



