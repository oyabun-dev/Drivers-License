// @ts-check

function scrolling() {
    window.scrollTo(0, 700);
}

// let startMenu = document.getElementById('startMenu');
// // @ts-ignore
// startMenu.addEventListener('click', scrolling);

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