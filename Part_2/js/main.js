$('#email-form').parsley();
$('#myMosaicAll').Mosaic({       
    maxRowHeight: 800,     
    maxRowHeightPolicy: 'crop', 
    refitOnResizeDelay: 2,
});  
$('#myMosaicDesign').Mosaic({       
    maxRowHeight: 600,     
    maxRows:2,
    maxRowHeightPolicy: 'crop', 
    refitOnResizeDelay: 2,
});
$('#myMosaicCode').Mosaic({       
    maxRowHeight: 600,     
    maxRows:2,
    maxRowHeightPolicy: 'crop', 
    refitOnResizeDelay: 2,
});    
$('#myMosaicPhotography').Mosaic({       
    maxRowHeight: 600,     
    maxRows:2,
    maxRowHeightPolicy: 'crop', 
    refitOnResizeDelay: 2,
});  
$('#myMosaicApps').Mosaic({       
    maxRowHeight: 600,     
    maxRows:2,
    maxRowHeightPolicy: 'crop', 
    refitOnResizeDelay: 2,
});  


const filters = document.querySelectorAll('.filter');
const blocks = {
    all: document.querySelector('.col--all'),
    design: document.querySelector('.col--design'),
    code: document.querySelector('.col--code'),
    apps: document.querySelector('.col--apps'),
    photography: document.querySelector('.col--photography')
};

Object.values(blocks).forEach(col =>{
    if (col) {col.style.display = 'none'}
    });


if(blocks['all']){
    blocks['all'].style.display = 'block';
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
    Object.values(blocks).forEach(col => {
        if (col) {col.style.display = 'none'};
    });
};

function setActive(filter){
    filter.classList.add('active');
};

  
function showBlocks(filter) {
    if(blocks[filter.id]){
    blocks[filter.id].style.display = 'block';
    };
}
  
filters.forEach(filter => {
    filter.addEventListener('click', () => {
        removeActive();
        hideBlocks()
        setActive(filter)
        showBlocks(filter);
    });
});
  
