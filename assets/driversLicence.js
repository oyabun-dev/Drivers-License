// @ts-check
var start = document.getElementById('start');
var exam_couv = document.getElementById('exam_couv');
var exam_img = document.getElementById('exam_img');
var exam_form = document.getElementById('exam_form');
var type_el_from = document.getElementById('img_container');
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var type = type_el_from?.className;

start?.addEventListener('click', function () {
    exam_couv?.toggleAttribute('hidden');
    exam_img?.removeAttribute('hidden');
    exam_form?.removeAttribute('hidden');
    // @ts-ignores
    start.style.display = 'none';
    previous?.toggleAttribute('disabled');
});

var pageList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var pageNumber = pageList[0];

next?.addEventListener('click', nextPage);
previous?.addEventListener('click', previousPage);   
function nextPage(e) {
    e.preventDefault();
    ++pageNumber;
    previous?.removeAttribute('disabled'); 
    if (pageList.includes(pageNumber)) {                
        let pageImage = 'assets/img/' + type + '/' + type + '-' + pageNumber + '.jpg';
        exam_img?.setAttribute('src', pageImage);
        if (pageList.includes(pageNumber + 1)) {
            // next?.toggleAttribute('disabled');
        }
        else {
            next?.toggleAttribute('disabled');
        }
    }
}
function previousPage(e) {
    e.preventDefault();
    --pageNumber;
    next?.removeAttribute('disabled');
    if (pageList.includes(pageNumber)) {                
        let pageImage = 'assets/img/' + type + '/' + type + '-' + pageNumber + '.jpg';
        exam_img?.setAttribute('src', pageImage);
        if (pageList.includes(pageNumber - 1)) {
            // previous?.toggleAttribute('disabled');
        }
        else {
            previous?.toggleAttribute('disabled');
        }
    }
}

