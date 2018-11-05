window.addEventListener('DOMContentLoaded', function() {

    // При клике на эту кнопку: http://prntscr.com/jxsjjb +
    // Должно вызываться модальное окно (класс popup_engineer) +
    // При клике на крестик или подложку - исчезать

    let headerBtn = document.querySelector('.header_btn'),
        closeBtn = document.getElementsByClassName('popup_close')[1],
        engineerPopup = document.querySelector('.popup_engineer');

    headerBtn.addEventListener('click', () => {
        engineerPopup.style.display = "block";
    });

    closeBtn.addEventListener('click', () => {
        engineerPopup.style.display = "none";
    });

    window.addEventListener('click', () => {
        if (event.target == engineerPopup) {
            console.log(event.target)
            engineerPopup.style.display = "none";
        }
    });

    // Должны быть реализованы табы http://prntscr.com/jxsp24
    // Так же идет переключение активного таба и его стиля. (класс active)

    let tabs = document.querySelectorAll('.glazing_block'),
        parent = document.querySelector('.glazing_slider'),
        tabContent = document.querySelectorAll('.tab_content');

    const hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].style.display = 'none';
            tabs[i].children[1].classList.remove('active');
        }
    }

    hideTabContent(1);

    const showTabContent = (b) => {
        if (tabContent[b].style.display = 'none') {
            tabContent[b].style.display = 'block';
            tabs[b].children[1].classList.add('active');
        }
    }

    parent.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('glazing_block') ||
            target && target.parentNode.classList.contains('glazing_block')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i] || target.parentNode == tabs[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

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
    }

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
    }

    setClock('timer', deadline);

    // При клике на любую из восьми картинок - она открывается на весь экран с полупрозрачной, темной подложкой.
    // Как должно выглядеть: http://prntscr.com/jxsz2i
    // При клике на подложку - все исчезает.
    // Здесь много вариантов реализации. Верстка отдельных блоков запрещена. Реализация на ваше усмотрение, но все делать через JS.

    let gallery = document.querySelector('.gallery'),
        galleryItem = document.querySelector('.gallery').children,
        popup = document.querySelector('.popup_gallery'),
        box = document.querySelector('.box');

    gallery.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('html').style.overflow = 'hidden';
        let target = event.target;
        for (let i = 0; i < galleryItem.length + 1; i++) {
            if (target.parentNode.parentNode == galleryItem[i - 1]) {
                popup.style.display = 'block';
                box.src = `img/our_works/big_img/${i}.png`;
            }
        }
    });

    popup.addEventListener('click', function(event) {
        if (event.target != box) {
            popup.style.display = 'none';
            document.querySelector('html').style.overflow = 'visible';
        }
    });

    

});
