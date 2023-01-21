// @ts-check
var start = document.getElementById('start');
var exam_couv = document.getElementById('exam_couv');
var exam_img = document.getElementById('exam_img');
var exam_form = document.getElementById('exam_form');
var type_el_from = document.getElementById('img_container');
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var type = type_el_from?.className;
var answers = [];
var pageList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var pageNumber = pageList[0];

start?.addEventListener('click', Start);
next?.addEventListener('click', nextPage);
previous?.addEventListener('click', previousPage);

function Start () {
    exam_couv?.toggleAttribute('hidden');
    exam_img?.removeAttribute('hidden');
    exam_form?.removeAttribute('hidden');
    // @ts-ignores
    start.style.display = 'none';
    previous?.toggleAttribute('disabled');
}
function nextPage(e) {
    e.preventDefault();
    resetCheckbox();
    ++pageNumber; //2
    previous?.removeAttribute('disabled'); 
    if (pageList.includes(pageNumber)) {   //si 2 appartient à pageList             
        let pageImage = 'assets/img/' + type + '/' + type + '-' + pageNumber + '.jpg';
        // assets/img/B12/B12-2.jpg
        exam_img?.setAttribute('src', pageImage); //src = assets/img/B12/B12-2.jpg  
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
function saveAnswer() {
    var checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked'); //[input#A input#C input#D]
    var checkedValues = Array.from(checkedBoxes).map(function(box) { // [A,C,D] 
        // @ts-ignore
        return box.value; //input#A.value = A
    });
    
    answers[pageNumber] = checkedValues; //answers[1] = [A,C,D]
}
function resetCheckbox() {
    saveAnswer();
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    Array.from(checkboxes).forEach(function(box) {
        // @ts-ignore
        box.checked = false;
  });
}
        
// all i'am left with is the result page