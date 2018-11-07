const form = () => {

    // На странице есть 6 одинаковых форм обратной связи: http://prntscr.com/jxso7m
    // http://prntscr.com/jxsq80
    // Все они должны отправляться посредством ajax(без перезагрузки страницы) и 
    // захватывать все введенные данные. Также необходимо оповестить пользователя о 
    // состоянии отправки (идет отправка, отправлено, ошибка). В поле с телефоном можно вводить только цифры.

    //                         Phone input restrict to numbers and + sign

    let phoneInput = document.querySelectorAll("input[name=user_phone]");

    for (let i = 0; i < phoneInput.length; i++) {
        phoneInput[i].addEventListener('input', function() {
            phoneInput[i].value = phoneInput[i].value.match(/[\+0-9]+/ig);
        });
    }

    let message = {
        loading: 'Loading...',
        success: 'Thank you, we will be in touch soon!',
        failure: 'Something went wrong...'
    };

    let forms = document.querySelectorAll('.form');
    
    function sendForm(event) {

        event.preventDefault();
        let input = this.getElementsByTagName('input'),
            statusMessage = document.createElement('div');

        this.appendChild(statusMessage);
    
        let formData = new FormData(this);
        
        const postData = () => {
            return new Promise( (resolve, reject) => {
                let request = new XMLHttpRequest();
    
                request.open("POST", "server.php");
    
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
                request.onreadystatechange = () => {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState == 4) {
                        if (request.status == 200 && request.status < 300) {
                            resolve();
                        }
                        else {
                            reject();
                        }
                    }
                };

                if (this == endForm) {

                    formData.forEach(function(value, key) {

                        obj[key] = value;

                    });
    
                    let json = JSON.stringify(obj);
                    request.send(json);
                    cleanObj();

                } else {

                    let objTwo = {};
                    formData.forEach(function(value, key) {
                        objTwo[key] = value;
                    });
    
                    let jsonTwo = JSON.stringify(objTwo);
                    request.send(jsonTwo);

            }
        });
    };
    
    const clearInput = () => {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    };
    
    postData()
        .then(() => statusMessage.innerHTML = message.loading)	
        .then(() => {
            setTimeout(() => {
                statusMessage.innerHTML = message.success;
            }, 2000);
            setTimeout(() => {
                statusMessage.innerHTML = "";
            }, 4000);
        })
        .catch(() => statusMessage.innerHTML = message.failture)
        .then(clearInput);     	       
    };

    for ( let i = 0 ; i < forms.length - 1 ; i++ ) {

        forms[i].addEventListener('submit', sendForm);

    }

};
    
export default form;
export {sendForm};