let buttons = document.querySelectorAll('.lv1-button');

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        if(button.parentNode.className)button.parentNode.classList.remove('show');
        else button.parentNode.classList.add('show');
    });
});