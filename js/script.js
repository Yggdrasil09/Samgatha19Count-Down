let destiny = new Date("Mar 1, 2019 0:0:0").getTime();

let activity = setInterval(() => {
    let now = new Date().getTime();

    let delay = destiny - now;
    
    let remain_days = Math.floor(delay /(1000*60*60*24));
    let remain_hours = Math.floor((delay%(1000*60*60*24))/(1000*60*60));
    let remain_minutes = Math.floor((delay%(1000*60*60))/(1000 * 60));
    let remain_seconds = Math.floor((delay%(1000*60))/1000);

    document.getElementById("days").innerHTML = remain_days;
    document.getElementById("hours").innerHTML = remain_hours;
    document.getElementById("minutes").innerHTML = remain_minutes;
    document.getElementById("seconds").innerHTML = remain_seconds;
}, 1000);



