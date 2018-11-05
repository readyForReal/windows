const modal = () => {

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

            engineerPopup.style.display = "none";

        }

    });

}

module.exports = modal;