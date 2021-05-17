const countDown = () => {
   
    const countDate = new Date("August 17, 2021 00:00:00").getTime(); // gets the interval in seconds between now till August 17 2021 12am
    // console.log(countDate);
    const present = new Date().getTime();
    // console.log(present);
    const timeGap = countDate - present;
    // console.log(timeGap);


    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;


    const day = Math.floor(timeGap / d);
    // console.log(day);
    const hour = Math.floor((timeGap % d) / h);
    // console.log(hour);
    const minute = Math.floor((timeGap % h)/ m);
    // console.log(minute);
    const second = Math.floor((timeGap % m) / s)
    // console.log(second);

    const formattedDay = (day < 10) ? '0' + day: day; // To display double digit
    const formattedHour = (hour < 10) ? '0' + hour: hour;
    const formattedMinute = (minute < 10) ? '0' + minute: minute;
    const formattedSecond = (second < 10) ? '0' + second: second;

    document.querySelector('.day').innerText = formattedDay;
    document.querySelector('.hour').innerText = formattedHour;
    document.querySelector('.minutes').innerText = formattedMinute;
    document.querySelector('.seconds').innerText = formattedSecond
};

setInterval(countDown, 1000);