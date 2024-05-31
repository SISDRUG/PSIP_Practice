//#region section.work
function showAllWorkIllustrations() {
    const workIllustrations = document.querySelectorAll(".work-illustration");

    workIllustrations.forEach(workIllustration => {
        workIllustration.classList.remove("work-hide");
    });
}

function showFilterItemWorkIllustration(element) {
    const workIllustrations = document.querySelectorAll(".work-illustration");
    console.log(workIllustrations);

    workIllustrations.forEach(workIllustration => {
        const paragrafContent = workIllustration.querySelector("p").textContent;

        if(element.textContent != paragrafContent) {
            workIllustration.classList.add("work-hide");
        }
        else {
            workIllustration.classList.remove("work-hide");
        }
    });
}

function onFilterItemClick(filterElement) {  
    const filterMenuItems = document.querySelectorAll(".filter-item");

    filterMenuItems.forEach(filterMenuItem => {
        filterMenuItem.classList.remove("active");
    });

    filterElement.classList.add("active");

    if(filterElement.textContent == "all") {
        showAllWorkIllustrations();
        return;
    }
    else {
        showFilterItemWorkIllustration(filterElement);
    }
}
//#endregion

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


const works = document.querySelector(".works");

if(works) {
    const filterItems = document.querySelectorAll(".filter-item");

    filterItems.forEach(filterItem => {
        filterItem.addEventListener("click", () => onFilterItemClick(filterItem))
    });
}

const home = document.querySelector(".home");

if(home) {
    btnStarted.addEventListener('click',onBtnStartedClick);
}

//#region employer-swiper
                    
const mySwiper = new Swiper('.swiper-container', {
    // Параметры слайдера
    slidesPerView: 4,//设置slider容器能够同时显示的slides数量(carousel模式)。
    spaceBetween: 30,
    loop: true,
    // Настройка навигации
    navigation: {
    nextEl: '.slider__right-button-block',
    prevEl: '.slider__left-button-block',
    },
    
});

//#endregion

const clients = document.querySelector(".clients");

if(clients) {
    const swiper = new Swiper(".clients-swiper-container", {
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disabledOnInteractive:false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
    });
}

AOS.init();

