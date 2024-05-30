//#region modal get start
const modal = document.querySelector('#modal-get-started');
const btnStarted = document.querySelector('#btn-get-started');
const btnContacts = document.querySelector('#btn-get-contact');
const closeSpan = document.querySelector('.modal-close');

btnStarted.addEventListener('click',onBtnStartedClick);

function onBtnStartedClick(){
    modal.style.display = 'block';


    closeSpan.addEventListener('click',onCloseSpanClick);

    function onCloseSpanClick() {
        modal.style.display = 'none';
        modalEventHandlerClear();
    };

    btnContacts.addEventListener('click', onBtnContactsClick);

    function onBtnContactsClick() {
        modal.style.display = 'none';
        window.location = '#Contact';
        modalEventHandlerClear();
    };

    window.addEventListener('click',onWindowClick);

    function onWindowClick(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalEventHandlerClear();
        };
    };

    window.addEventListener('keydown', onWindowKeydownEscape );

    function onWindowKeydownEscape(event) {
        if (event.key === 'Escape') {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                modalEventHandlerClear();
            };
        };
    };
};

function modalEventHandlerClear(){
    modal.removeEventListener('click',onCloseSpanClick);
    modal.removeEventListener('click',onBtnContactsClick);
    window.removeEventListener('click',onWindowClick);
    window.removeEventListener('keydown', onWindowKeydownEscape );
}

//#endregion

//#region works-filter

const workIlustratoins = document.querySelectorAll('.work-illustration');
const brandings = document.querySelectorAll('#branding-ilustrations .work-illustration');
const filters = document.querySelectorAll('.work__filter');
filters[0].style.color = 'rgb(192, 48, 28)';

filters.forEach(filter =>{
    filter.addEventListener('click', onFilterClick);
});

function onFilterClick(){
    filters.forEach(filter => filter.style.color = 'rgb(85,85,85)');
    this.style.color = 'rgb(192, 48, 28)';
}

//#endregion


//#region employer-slider

// let current = 0;
// let images = []; // Массив с путями к изображениям

// for (let i = 0; i < 6; i++) {
//     images[i] = `assets/3_about_us/employer_${i}.png`;
// }

// function updateSlider() {
//     for (let i = 0; i < 4; i++) {
//         let imgElement = document.getElementById(`employer_${i}`);
//         imgElement.src = images[(current + i) % images.length];
//     }
// }

// document.getElementById('employers-slider-right').addEventListener('click', function() {
//     current = (current + 1) % images.length;
//     updateSlider();
// });

// document.getElementById('employers-slider-left').addEventListener('click', function() {
//     current = (current - 1 + images.length) % images.length;
//     updateSlider();
// });

// updateSlider();


//#endregion