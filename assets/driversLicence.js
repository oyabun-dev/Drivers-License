// @ts-check

let go_down = document.getElementById('go_down');
let go_up = document.getElementById('go_up');
let getStarted = document.getElementById('getStarted');

go_down?go_down.addEventListener('click', scrollDown):console.error('go_down is null');
go_up?go_up.addEventListener('click', scrollUp):console.error('go_up is null');
getStarted?getStarted.addEventListener('click', scrollDown):console.error('getStarted is null');


function scrollDown() {
    window.scrollTo(0, 820);
    go_down?go_down.toggleAttribute('hidden'):console.error('go_down is null');
    go_up?go_up.removeAttribute('hidden'):console.error('go_up is null');
}
function scrollUp() {
    window.scrollTo(0, 0);
    go_up?go_up.toggleAttribute('hidden'):console.error('go_up is null');
    go_down?go_down.removeAttribute('hidden'):console.error('go_down is null')  ;
}

var pageList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var pageNumber = 1;
var type = 'B1';

function togglePage(position) {
    if (position === "next") {
        nextPage();
    } else {
        previousPage();
    }
}   
function nextPage(pageNumber) {                         // 03
    ++pageNumber;                                       //04 
    if (pageList.includes(pageNumber)) {                
        let pageImage = type + '-' + pageNumber + '.jpg';      //B04.jpg
    }
    else {
        // disable next button
    }
}
function previousPage(pageNumber) {                         // 03
    --pageNumber;                                       //04 
    if (pageList.includes(pageNumber)) {                
        let pageImage = type + '-' + pageNumber + '.jpg';      //B04.jpg
    }
    else {
        // disable previous button
    }
}
// position.addEventListener('click', ()=> {
//     if (position.name == 'next') {
//         pos = "next";
//     }    
//     else {pos = "previous"}    
// })

// togglePage(pos);