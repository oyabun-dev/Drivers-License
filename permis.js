// @ts-check

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