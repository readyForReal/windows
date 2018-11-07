const modal = () => {

    // При клике на эту кнопку: http://prntscr.com/jxsjjb
    // Должно вызываться модальное окно (класс popup_engineer)
    // При клике на крестик или подложку - исчезать

    // При клике на эти надписи: http://prntscr.com/jxsllv
    // http://prntscr.com/jxslti
    // Должно вызываться модальное окно (класс popup)
    // При клике на крестик или подложку - исчезать

    let phonePopupBtn = document.querySelectorAll('.phone_link'), // [0] = phone, [1] = phone bottom
        phonePopup = document.querySelector('.popup'),
        measurePopupBtn = document.querySelector('.header_btn'),
        engineerPopup = document.querySelector('.popup_engineer'),
        popupCloseBtn = document.querySelectorAll('.popup_close'); // [0] = phone, [1] = measure

    popupToggle = (popup, closeBtn) => {

        if ( event ) { event.preventDefault(); }
        popup.style.display = 'block';
        document.querySelector('html').style.overflow = 'hidden';

        popup.addEventListener('click', () => {
            
            if (event.target == popup) {

                popup.style.display = "none";
                document.querySelector('html').style.overflow = 'visible';
    
            }

        });

        closeBtn.addEventListener('click', () => {

            popup.style.display = "none";
            document.querySelector('html').style.overflow = 'visible';

    });

    }

    phonePopupBtn[0].addEventListener('click', () => {
        popupToggle(phonePopup, popupCloseBtn[0]);
    });

    phonePopupBtn[1].addEventListener('click', () => {
        popupToggle(phonePopup, popupCloseBtn[0]);
    });

    measurePopupBtn.addEventListener('click', () => {
        popupToggle(engineerPopup, popupCloseBtn[1]);
    });

    func = () => {
        popupToggle(phonePopup, popupCloseBtn[0])
    }

    setTimeout(func, 60000);

};

export default modal;