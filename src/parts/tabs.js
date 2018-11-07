const tabs = () => {

    // Должны быть реализованы табы http://prntscr.com/jxsp24
    // Так же идет переключение активного таба и его стиля. (класс active)

    // Реализация табов: http://prntscr.com/jxswhk
    // Так же идет переключение активного таба и его стиля. (класс after_click)

    let glazingTabBtnParent = document.querySelector('.glazing_slider'), // tab btn parentNode
        glazingTabBtnLinks = document.querySelectorAll('.glazing_block a'), // tab btn links <a></a>
        glazingTabBtn = document.querySelectorAll('.glazing_block'), // tab button HTML collection
        glazingTabContent = document.querySelectorAll('.tab_content'), // tab content HTML collection

        decorationTabBtnParent = document.querySelector('.decoration_slider'), // tab btn parentNode
        decorationTabBtnLinks = document.querySelectorAll('.decoration_item div'), // tab btn links <div></div>
        decorationTabBtn = document.querySelectorAll('.decoration_item'), // tab button HTML collection
        decorationTabContent = document.querySelectorAll('.row')[8].children, // tab content HTML collection

    hideTabContent = (start, content, links, removeClass) => {

        for (let i = start; i < content.length ; i++) {

            content[i].style.display = 'none';
            links[i].classList.remove(removeClass);

        }
    };

    hideTabContent(1, glazingTabContent, glazingTabBtnLinks, 'active');
    hideTabContent(1, decorationTabContent, decorationTabBtnLinks, 'after_click');

    showTabContent = (tabNum, content, links, addClass) => {

        if (content[ tabNum ].style.display == 'none') {

            content[ tabNum ].style.display = 'block';
            links[ tabNum ].classList.add(addClass);

        }
    };

    toggleTabs = (parentClass, tabBtn, content, links, toggleClass) => {

        let target = event.target;

        if (target && target.classList.contains(parentClass) ||
        target && target.parentNode.classList.contains(parentClass) ||
        target && target.parentNode.parentNode.classList.contains(parentClass)) {

            for (let i = 0; i < tabBtn.length; i++) {

                if (target == tabBtn[i] || target.parentNode == tabBtn[i] || target.parentNode.parentNode == tabBtn[i]) {

                    hideTabContent(0, content, links, toggleClass);
                    showTabContent(i, content, links, toggleClass);
                    break;

                }
            }
        }
    };

    glazingTabBtnParent.addEventListener('click', () => {

        toggleTabs('glazing_block', glazingTabBtn, glazingTabContent, glazingTabBtnLinks, 'active');

    });

    decorationTabBtnParent.addEventListener('click', () => {
        toggleTabs('decoration_item', decorationTabBtn, decorationTabContent, decorationTabBtnLinks, 'after_click');

    });
    
};

export default tabs;