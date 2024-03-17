$(function() {
    function showTime() {
        let time = new Date()
        let hour = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()
        am_pm = "AM"

        if (hour >= 12) {
            if (hour > 12) {
                hour = hour - 12
            }
            am_pm = "PM"
        }
        else if (hour == 0) {
            hour = 12
            am_pm = "AM"
    }

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    $('.time-1').html(hour)
    $('.time-2').html(minutes)
    $('.time-3').html(seconds)
    $('.time-4').html(am_pm)
    }
    setInterval(showTime, 1000)
});