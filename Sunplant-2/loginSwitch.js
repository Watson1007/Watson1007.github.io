let menu = document.querySelector(".show-menu");
let login = document.querySelector(".show-login");
let checkboxMenu = document.querySelector("#menu");
let checkboxLogin = document.querySelector("#login");
let lv1Content = document.querySelector('.lv1');
let loginContent = document.querySelector('.login');

let change = () =>{
    menu.addEventListener("click",()=>{
        if(checkboxMenu.checked)return;
        else{
            checkboxMenu.checked = true;
            checkboxLogin.checked = false;
            menu.classList.add('black');
            menu.classList.remove('white');
            login.classList.add('white');
            login.classList.remove('black');
            loginContent.style.display = 'none';
            lv1Content.style.display= 'block';
        };
    });
    login.addEventListener("click",()=>{
        if(checkboxLogin.checked) return;
        else{
            checkboxLogin.checked = true;
            checkboxMenu.checked = false;
            menu.classList.add('white');
            menu.classList.remove('black');
            login.classList.add('black');
            login.classList.remove('white')
            lv1Content.style.display= 'none';
            loginContent.style.display = 'block';
        };
    });
};
change();