let viewportWidth = window.innerWidth;
let switchbutton = document.querySelector('#menucontroller');
if(viewportWidth >= 1200 && switchbutton.checked == true) {
    switchbutton.checked = false;
}