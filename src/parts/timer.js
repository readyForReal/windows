const timer = () => {

    // Реализация таймера: http://prntscr.com/jxsx9w '2019-07-04'
    // Дедлайн - 4е июля.

    const deadline = '2019-07-04';

    const getTimeRemaining = (endtime) => {

        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)) % 24),
            days = Math.floor((t/(1000*60*60)) / 24);

        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };

    };

    const setClock = (id, endtime) => {

        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock () {

            let t = getTimeRemaining(endtime);

            if ( t.days < 10) { t.days = '0' + t.days; }
            days.textContent = t.days;
            if ( t.hours < 10) { t.hours = '0' + t.hours; }
            hours.textContent = t.hours;
            if ( t.minutes < 10) { t.minutes = '0' + t.minutes; }
            minutes.textContent = t.minutes;
            if ( t.seconds < 10) { t.seconds = '0' + t.seconds; }
            seconds.textContent = t.seconds;

            if ( t.total <= 0) {

                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

            }

        }

    };

    setClock('timer', deadline);

};

module.exports =  timer;