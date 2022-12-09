function showTime() {
    var date = new Date();

    var hours = date.getHours(); // 0-23

    var minutes = date.getMinutes();

    var seconds = date.getSeconds();

    var meridiem = "AM";

    if (hours == 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
        meridiem = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;




    var time = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").innerHTML = time;

    setTimeout(showTime, 1000);
}

showTime();

