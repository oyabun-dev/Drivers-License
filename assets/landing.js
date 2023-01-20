// @ts-check
var go_down = document.getElementById('go_down');
var go_up = document.getElementById('go_up');
var getStarted = document.getElementById('getStarted');

go_down?.addEventListener('click', scrollDown);
go_up?.addEventListener('click', scrollUp);
getStarted?.addEventListener('click', scrollDown);


function scrollDown() {
    window.scrollTo(0, 820);
    go_down?.toggleAttribute('hidden');
    go_up?.removeAttribute('hidden');
}
function scrollUp() {
    window.scrollTo(0, 0);
    go_up?.toggleAttribute('hidden');
    go_down?.removeAttribute('hidden')  ;
}
