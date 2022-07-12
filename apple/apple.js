let iPhoneData = [
    {
    device: "iPhone13mini",
    data : {
        storage1 : ["128GB","NT$22,900"],
        storage2 : ["256GB","NT$26,400"],
        storage3 : ["512GB","NT$33,400"],
        }
    },
    {
    device: "iPhone13",
    data : {
        storage1 : ["128GB","NT$25,900"],
        storage2 : ["256GB","NT$29,400"],
        storage3 : ["512GB","NT$36,400"],
        }
    },
];

let openbutton = document.querySelectorAll('.open');
let chooseStorage = document.querySelector('.chooseStorage>.wrapper');
let iPhone13Spec = document.querySelector('.Phone13');
let iPhone13miniSpec = document.querySelector('.Phone13mini');
let iPhonePrice = document.querySelector('.summaryPrice');
let installmentPrice = document.querySelector('.months');
let tax = document.querySelector('.taxPrice');
let colorButtons = document.querySelectorAll('.chooseColor .spec');
let specButtons = document.querySelectorAll('.chooseSpec .spec');
let exchangeButtons = document.querySelectorAll('.exchange .spec');
let deliverTime = document.querySelector('.deliverTime');


let iPhone13miniData = iPhoneData[0].data;
let iPhone13Data = iPhoneData[1].data;

let loadElement = (data) =>{
    Object.values(data).forEach((item) =>{
        let specContainer = document.createElement('div');
        let spec = document.createElement('div');
        let GB = document.createElement('span');
        let price = document.createElement('span');

        specContainer.classList.add('specContainer', 'col');
        spec.classList.add('spec');
        GB.classList.add('GB');
        price.classList.add('price');
    
        GB.textContent = item[0];
        price.textContent = item[1];

        spec.append(GB,price);
        specContainer.append(spec);
        chooseStorage.append(specContainer);
        spec.addEventListener('click',(event)=>{
            let storageButtons = document.querySelectorAll('.chooseStorage .spec');
            let storage = Array.from(storageButtons);
            for(let i = 0; i<storage.length; i++){
                storage[i].style.boxShadow = "";
            }
            event.currentTarget.style.boxShadow = "0 0 0 6px #0066CC";
            let priceString = event.currentTarget.querySelector('.price').textContent;
            let priceNumber = priceString.substring(3).replace(',','');
            installmentPrice.textContent = Math.floor(parseInt(priceNumber)/12);
            tax.textContent = Math.floor(parseInt(priceNumber)*0.05);
        })
    });
}

window.addEventListener('DOMContentLoaded',()=>loadElement(iPhone13miniData));

iPhone13Spec.addEventListener('click',()=>{
    chooseStorage.innerHTML ='';
    loadElement(iPhone13Data);
    
    iPhonePrice.textContent = "NT$25,900";
    installmentPrice.textContent = Math.floor(25900/12);
    tax.textContent = Math.floor(25900*0.05);
});
iPhone13miniSpec.addEventListener('click',()=>{
    chooseStorage.innerHTML ='';
    loadElement(iPhone13miniData);
    iPhonePrice.textContent = "NT$22,900";
    installmentPrice.textContent = Math.floor(22900/12);
    tax.textContent = Math.floor(22900*0.05);
    
});

const addShadow = (buttons)=>{
    let buttonArray = Array.from(buttons);
    for(let i = 0; i<buttonArray.length; i++){
        buttonArray[i].addEventListener('click',(event)=>{
            for(let i = 0; i<buttonArray.length; i++){
                buttonArray[i].style.boxShadow = "";
            }
            event.currentTarget.style.boxShadow = "0 0 0 6px #0066CC";
        });
    }
};
const addShadow2 = (buttons)=>{
    let buttonArray = Array.from(buttons);
    for(let i = 0; i<buttonArray.length; i++){
        buttonArray[i].addEventListener('click',(event)=>{
            for(let i = 0; i<buttonArray.length; i++){
                buttonArray[i].style.boxShadow = "";
            }
            event.currentTarget.style.boxShadow = "0 0 0 6px #0066CC";

            let Target = event.currentTarget.querySelector('.colorTXT').textContent;
            let imageAddress = document.querySelector('.imgWrapper>img');

            
            switch (Target){
                default: ;
                break;
                case "綠色": imageAddress.src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-green-select?wid=470&hei=556&fmt=png-alpha&.v=1645036275894";
                break;
                case "粉紅色": imageAddress.src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315655";
                break;
                case "藍色": imageAddress.src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315986";
                break;
                case "午夜色": imageAddress.src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-midnight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315770";
                break;
                case "星光色": imageAddress.src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-starlight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315872";
                break;
                case "(PRODUCT)RED": imageAddress.src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-product-red-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315893";
                break;
            }
        });
    }
};

addShadow(specButtons);
addShadow(exchangeButtons);
addShadow2(colorButtons);




let button = Array.from(openbutton);
for(let i = 0; i<button.length; i++){
    button[i].addEventListener('click',(event)=>{
        if(event.target.parentNode.classList.contains('openMenu')){
            event.target.parentNode.classList.add('closeMenu');
            event.target.parentNode.classList.remove('openMenu');
        }
        else{
            event.target.parentNode.classList.add('openMenu');
            event.target.parentNode.classList.remove('closeMenu');
        }
    });
}

let today = new Date().toLocaleDateString();
let dayOfWeek = new Date().getDay();
let chineseDayOfWeek;

switch (dayOfWeek){
    default: ;
    break;
    case 1: chineseDayOfWeek = "週一";
    break;
    case 2: chineseDayOfWeek = "週二";
    break;
    case 3: chineseDayOfWeek = "週三";
    break;
    case 4: chineseDayOfWeek = "週四";
    break;
    case 5: chineseDayOfWeek = "週五";
    break;
    case 6: chineseDayOfWeek = "週六";
    break;
    case 6: chineseDayOfWeek = "週日";
    break;
}
deliverTime.textContent = `${chineseDayOfWeek}  ${today}`;