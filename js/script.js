let hour = document.querySelector(".hour-hand");
let minute = document.querySelector(".min-hand");
let second = document.querySelector(".second-hand");


function makTime() {
    let now = new Date();
    let hourDegree = ((now.getHours() / 12) * 360) + 90;
    let minuteDegree = ((now.getMinutes() / 60) * 360) + 90;
    let secondDegree = ((now.getSeconds() / 60) * 360) + 90;

    hour.style.transform = `rotate(${hourDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    second.style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(makTime, 1000);
makTime();




