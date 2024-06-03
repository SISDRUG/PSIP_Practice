//#region modaquerySelectorl getStart
function onShowGetStartedButtonClick() {
    const modal = document.querySelector("#modal-get-started");
    const closeModalButton = modal.querySelector(".modal-close");
    const contactModalButton = modal.querySelector("#btn-get-contact");
    

    modal.classList.remove("hidden");

    document.addEventListener("keydown", onEscapeFromModalKeydown);

    function onEscapeFromModalKeydown(e) {
        if(e.code == "Escape") {
            closeModal();
        }
    }


    closeModalButton.addEventListener("click", onCloseModalButtonClick);

    function onCloseModalButtonClick() {
        closeModal();
	};


    window.addEventListener("click", onWindowClick);

    function onWindowClick(e) {
        if (e.target == modal) {
            modal.classList.add("hidden");
            closeModal();
        };
    };


    contactModalButton.addEventListener("click", onMoveToContactButtonClick);

    function onMoveToContactButtonClick() {
        closeModal();
    }

    function closeModal() {
        modal.classList.add("hidden");
        removeEvents();
    }

    function removeEvents() {
        closeModalButton.removeEventListener("click", onCloseModalButtonClick);
        contactModalButton.removeEventListener("click", onMoveToContactButtonClick);
        document.removeEventListener("keydown", onEscapeFromModalKeydown);
        window.removeEventListener("click", onWindowClick);
    }
}


const home = document.querySelector(".home");

if(home) {
    const showGetStartedButton = home.querySelector("#btn-get-started");
    showGetStartedButton.addEventListener("click", onShowGetStartedButtonClick);
}

//#endregion

//#region swiper employers
                    
const mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
    nextEl: ".slider__right-button-block",
    prevEl: ".slider__left-button-block",
    },
    
});

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

//#endregion

//#region swiper worksFilter
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

const works = document.querySelector(".works");

if(works) {
    const filterItems = document.querySelectorAll(".filter-item");

    filterItems.forEach(filterItem => {
        filterItem.addEventListener("click", () => onFilterItemClick(filterItem))
    });
}
//#endregion

//#region aos
AOS.init();
//#endregion

//#region parsley contactForm
$('#contact-form').parsley();
//#endregion

//#region cleave contactForm phone
const cleave = new Cleave(".input-tel", {
    delimiters: [" (",") ","-"],
    blocks: [4,2, 3, 2, 2],
    uppercase: true
});
//#endregion