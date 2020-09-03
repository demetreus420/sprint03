"use strict";

function getFormattedDate(dateObject) {
    let date;
    let timeDayWeek;
    let dayOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    date = String(isLess(dateObject.getDate())
            + '.'
            + isLess(dateObject.getMonth()+ 1)
            + '.'
            + dateObject.getFullYear());

    timeDayWeek = String(isLess(dateObject.getHours())
            + ':'
            + isLess(dateObject.getMinutes())
            + ' '
            + dayOfWeek[dateObject.getDay()]);

    return date + ' ' + timeDayWeek;
}

function isLess(n) {return (n < 10) ? `0${n}` : n};
