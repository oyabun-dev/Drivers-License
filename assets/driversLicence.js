// @ts-check

let go_down = document.getElementById('go_down');
let go_up = document.getElementById('go_up');


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
    // @ts-ignore
go_down.addEventListener('click', scrollDown);
    // @ts-ignore
go_up.addEventListener('click', scrollUp);

let getStarted = document.getElementById('getStarted');
// @ts-ignore
getStarted.addEventListener('click', scrollDown);

var pageList = [1,2,];
var pageNumber = 1;

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
        let pageImage = 'B' + pageNumber + '.jpg';      //B04.jpg
    }
}
function previousPage(pageNumber) {                         // 03
    --pageNumber;                                       //04 
    if (pageList.includes(pageNumber)) {                
        let pageImage = 'B' + pageNumber + '.jpg';      //B04.jpg
    }
}


// position.addEventListener('click', ()=> {
//     if (position.name == 'next') {
//         pos = "next";
//     }    
//     else {pos = "previous"}    
// })

// togglePage(pos);