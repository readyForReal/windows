const gallery = () => {

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

};

module.exports = gallery;