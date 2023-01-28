window.addEventListener('load', function() {
    initFunctions();
});

function initFunctions(){
    handleStar();
    handleInputs();
};

function handleStar(){
    let starElem = document.querySelectorAll('.js-star-item');
    let rating = document.getElementById('score');

    starElem.forEach(star => {
        star.addEventListener('click', (e) => {

            let elem = e.target.parentElement;
            let starData = document.querySelectorAll('.js-star-data');

            starData.forEach(sd => {
                sd.classList.remove('hide');
                sd.classList.remove('stay');
            })

            elem.querySelector('.js-star-data').classList.add('stay')
            
            starData.forEach(sd => {
                if(!sd.classList.contains('stay')){
                    sd.classList.add('hide')
                }
            })
            
            rating.value = (elem.querySelector('.js-star-data').innerHTML);

            let classList = (elem.querySelector('.js-path').classList);
            
            if(clearStars(starElem)){
                classList.add('star-item__selected');
            }
            
            fillStars(starElem);

        }); 
    });
    
    function clearStars(stars){
        stars.forEach(star => {
            let currentClassList = star.parentElement.querySelector('.js-path'); 

            if(currentClassList.classList != null){
                currentClassList.classList.remove('star-item__selected');
            };                    
        });
        return true;
    };

    function fillStars(stars){

        for (let i = 0; i < stars.length; i++) {
            let currentClassList = stars[i].parentElement.querySelector('.js-path');

            if(!currentClassList.classList.contains('star-item__selected')){
                currentClassList.classList.add('star-item__selected');
            } else {
                return;
            };    
        };
    };
};

function handleInputs(){
    let form = document.querySelector('form');
    let sendBtn = document.getElementById('js-send'); 
    let inputs = document.querySelectorAll('.js-input-value');
    let warnigBox = document.querySelector('.js-warnig-box');
    
    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let valid = true;

        for (let i = 0; i != 4; i++) {

            inputs[i].parentElement.classList.remove('danger')
            inputs[i].parentElement.classList.remove('danger-star')
            
            if(inputs[i].value == ''){

                valid = false
                warnigBox.classList.remove('hide');

                if(i == 3){
                    inputs[i].parentElement.classList.add('danger-star')    
                } else {
                    inputs[i].parentElement.classList.add('danger')
                };
                
            };
        };

        if(valid){
            warnigBox.classList.add('hide')
            form.submit();
        }
    });
};