const tabs = () => {

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
    
}

module.exports = tabs;