const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function updateClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    const secondDeg = (second / 60) * 360;
    const minuteDeg = (minute / 60) * 360 + (second / 60) * 6; 
    const hourDeg = (hour % 12 / 12) * 360 + (minute / 60) * 30; 

    
    gsap.to(hourHand, { rotation: hourDeg, duration: 0.5 });
    gsap.to(minuteHand, { rotation: minuteDeg, duration: 0.5 });
    gsap.to(secondHand, { rotation: secondDeg, duration: 0.5 });
}


setInterval(updateClock, 1000);
updateClock(); 

