let menu = document.querySelector(".menuSwitch");
let login = document.querySelector(".loginSwitch");
let checkboxMenu = document.querySelector("#menu");
let checkboxLogin = document.querySelector("#login");

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
        };
    });
    login.addEventListener("click",()=>{
        if(checkboxLogin.checked)return;
        else{
            checkboxLogin.checked = true;
            checkboxMenu.checked = false;
            menu.classList.add('white');
            menu.classList.remove('black');
            login.classList.add('black');
            login.classList.remove('white')
        };
    });
};
change();