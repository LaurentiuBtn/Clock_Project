const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function setDate() {
    const now = new Date();

    const getS = now.getSeconds();
    const getM = now.getMinutes();
    const getH = now.getHours();

    const secondsDegree = (getS/60) * 360;
    const minutesDegree = (getM/60) * 360;
    const hourDegree = (getH/12) * 360;


    seconds.style.transform =  `rotate(${secondsDegree}deg)`;
    minutes.style.transform =  `rotate(${minutesDegree}deg)`;
    hour.style.transform =  `rotate(${hourDegree}deg)`;


}

setInterval(setDate,1000);
