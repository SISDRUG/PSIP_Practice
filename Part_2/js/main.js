$('#email-form').parsley();



const filters = document.querySelectorAll('.filter');
const blocks = {
    all: document.querySelectorAll('.col--all'),
    design: document.querySelectorAll('.col--design'),
    code: document.querySelectorAll('.col--code'),
    apps: document.querySelectorAll('.col--apps'),
    photography: document.querySelectorAll('.col--photography')
};


function removeActive(){
    filters.forEach(filter => filter.classList.remove('active'));
};

// function hideBlocks(){
//     filters.forEach(filter => {
//         blocks[filter.id].forEach(col => col.style.display = 'none');
//       });
// };

function hideBlocks(){
    Object.values(blocks).forEach(cols => {
        cols.forEach(col => col.style.display = 'none');
    });
};

function setActive(filter){
    filter.classList.add('active');
};

  
function showBlocks(filter) {
    blocks[filter.id].forEach(col => col.style.display = 'block');
}
  
filters.forEach(filter => {
    filter.addEventListener('click', () => {
        removeActive();
        hideBlocks()
        setActive(filter)
        showBlocks(filter);
    });
});
  
