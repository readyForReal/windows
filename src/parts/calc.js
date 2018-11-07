import {sendForm} from './form.js';

const calc = () => {

    // Внутри всех табов есть кнопки “Рассчитать стоимость” http://prntscr.com/jxsqka
    // При клике на них должно появляться модальное окно с классом popup_calc
    // Как оно должно выглядеть: http://prntscr.com/jxsrn4
    // Основная задача: при клике на маленькие превью (4 в ряд сверху) эта превьюшка(картинка) 
    // становится несколько больше. Под ними показывается картинка-аналог активной превью. 
    // При выборе другой - аналогичная логика. В верстке все готово - нужно только прописать логику.

    // В поля “ширина” и “высота” можно вписать только цифры.
    // При клике на кнопку “Далее” данное модальное окно скрывается. Появляется popup_calc_profile
    // На этом окне реализовать, что можно выбрать только 1 профиль. Или холодное или теплое.
    // При клике на кнопку “Далее” данное модальное окно скрывается. Появляется popup_calc_end
    // Здесь требования точно такие же как и в других формах. НО! Все данные, что отметил или 
    // выбрал человек должны быть переданы вместе с формой. Сохраните их в объекте.
    // После передачи данных этот объект очищается.
    // При клике на крестик (и только крестик) на любом этапе - модальное окно закрывается и объект очищается.


    let calcOpenBtn = document.querySelectorAll('.glazing_price_btn'),
    
        popupCalc = document.querySelector('.popup_calc'),
        popupCalcCloseBtn = document.querySelector('.popup_calc_close'),
        popupCalcBalconIcons = document.querySelectorAll('.balcon_icons img'),
        popupCalcBigImg = document.querySelectorAll('.big_img img'),
        popupCalcNextBtn = document.querySelector('.popup_calc_button'),
        popupCalcInput = document.querySelectorAll('.popup_calc input'),

        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        popupCalcProfileCloseBtn = document.querySelector('.popup_calc_profile_close'),
        popupCalcProfileNextBtn = document.querySelector('.popup_calc_profile_button'),
        popupCalcDropDown = document.getElementById('view_type'),

        popupCalcEnd = document.querySelector('.popup_calc_end'),
        popupCalcEndCloseBtn = document.querySelector('.popup_calc_end_close'),
        endForm = document.querySelectorAll('.form')[8],
        popupCalcEndForm = document.querySelectorAll('.popup_form .form')[2],
        popupCalcEndFormInput = popupCalcEndForm.querySelectorAll('input'),
        popupCalcEndFormSubmit = popupCalcEndForm.querySelectorAll('button')[0],

        obj = {};

    // restrict width and height to number's and backspace

    for (let i = 0; i < popupCalcInput.length; i++) {

        popupCalcInput[i].addEventListener('input', function() {

            popupCalcInput[i].value = popupCalcInput[i].value.match(/[\+0-9]+/ig);

        });

        popupCalcInput[i].addEventListener('change', () => {

            if (popupCalcInput[i].value < 1 || popupCalcInput[i].value.startsWith(0)) {

                popupCalcInput[i].value = '';

            }
        });
    }

    const cleanObj = () => {

        obj = {};

        for ( let i = 0 ; i < popupCalcInput.length ; i++ ) { // first tab

            popupCalcInput[i].value = '';

        }

        hideTab(0);
        showTab(0);

        popupCalcDropDown.selectedIndex = '0'; // second tab
        checkBoxOne.checked = false;
        checkBoxTwo.checked = false;

        for ( let i = 0 ; i < popupCalcEndFormInput.length ; i++ ) { // third tab

            popupCalcEndFormInput[i].value = '';

        }

        console.log('obj and inputs are clean');
    };

    const togglePopup = (popup, closeBtn) => { // open and close popup
    
        if (event) { event.preventDefault(); }
        popup.style.display = 'block';
        document.querySelector('html').style.overflow = 'hidden';

        popup.addEventListener('click', () => {
            
            if (event.target == popup) {

                popup.style.display = "none";
                document.querySelector('html').style.overflow = 'visible';
                cleanObj();
    
            }

        });

        closeBtn.addEventListener('click', () => {

            popup.style.display = "none";
            document.querySelector('html').style.overflow = 'visible';
            cleanObj();

        });

    };

    for ( let i = 0 ; i < calcOpenBtn.length ; i++ ) { // listen to calc popup buttons

        calcOpenBtn[i].addEventListener('click', function() {

            togglePopup(popupCalc, popupCalcCloseBtn);

        });
    }

    popupCalcNextBtn.addEventListener('click', function() { // first tab

        obj.width = document.getElementById('width').value;
        obj.height = document.getElementById('height').value;

        if (obj.frame && obj.width && obj.height) {

            popupCalc.style.display = 'none';
            togglePopup(popupCalcProfile, popupCalcProfileCloseBtn);
        
        } else {

            console.log('not all data recieved');
        }
    });

    let checkBoxOne = document.querySelectorAll('.checkbox')[0],
        checkBoxTwo = document.querySelectorAll('.checkbox')[1];

    checkBoxOne.addEventListener('change', function(event) {

        if (checkBoxOne.checked) {

            checkBoxTwo.disabled = true;

        } else {

            checkBoxOne.disabled = false;
            checkBoxTwo.disabled = false;

        }

        event.stopImmediatePropagation();

    });

    checkBoxTwo.addEventListener('change', function(event) {

        if (checkBoxTwo.checked) {

            checkBoxOne.disabled = true;

        } else {

            checkBoxOne.disabled = false;
            checkBoxTwo.disabled = false;

        }

        event.stopImmediatePropagation();

    });

    popupCalcProfileNextBtn.addEventListener('click', () => {

        obj.type = popupCalcDropDown.options[popupCalcDropDown.selectedIndex].text;
        obj.coldBox = checkBoxOne.checked;
        obj.warmBox = checkBoxTwo.checked;

        if ( obj.coldBox || obj.warmBox ) {
            
            popupCalcProfile.style.display = 'none';
            togglePopup(popupCalcEnd, popupCalcEndCloseBtn);

        } else {

            console.log('no boxes checked');

        }
    });

    popupCalcEndFormSubmit.addEventListener('click', () => {

        if (popupCalcEndFormInput[0].value != '' && popupCalcEndFormInput[1].value != '') {

            endForm.addEventListener('submit', sendForm);
    
        } else {
    
            console.log('fill out both fields');
    
        }

    });

    const hideTab = (start) => {

        for (let i = start; i < popupCalcBigImg.length ; i++) {

            popupCalcBigImg[i].style.display = 'none';
            popupCalcBalconIcons[i].style.transform = ''; 
            popupCalcBigImg[i].style.transform = '';

        }
    };

    hideTab(1);

    const showTab = (num) => {

        if (popupCalcBigImg[num].style.display == 'none') {

            popupCalcBigImg[num].style.display = 'block';
            popupCalcBigImg[num].style.transform = 'translateX(50%)';

        }
    };

    for ( let i = 0 ; i < popupCalcBalconIcons.length ; i++ ) {

        popupCalcBalconIcons[i].addEventListener('click', function(e) {

            event.preventDefault();
            let t = event.target;
            
            obj.frame = t.parentNode.classList.value;

            hideTab(0);
            showTab(i);

            popupCalcBalconIcons[i].style.transform = 'scale(1.25)';

        });
    }
};

module.exports = calc;