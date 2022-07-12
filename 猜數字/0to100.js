let getRandom = (min,max) => {
    let number = Math.floor(Math.random()*(max-min+1))+min;
    return number;
};

let answer;
let inputNumber = '';
let maxNumber = 100;
let minNumber = 0;

let button = document.querySelector('.generator');
let number = document.querySelectorAll('.number>span');
let cancel = document.querySelector('.cancel');
let check = document.querySelector('.check');
let judgeAnswer = document.querySelector('.judgeAnswer');
let input = document.querySelector('.input');
let record = document.querySelector('.interactive');
let max = document.querySelector('.max');
let min = document.querySelector('.min');
let banner = document.querySelector('.range');


button.addEventListener('click', ()=>{
    answer = getRandom(0,100);
    console.log(answer);
    if(banner.textContent === '答對了'){
        banner.innerHTML ='請輸入<span class="min">0</span>~<span class="max">100</span>之間的數字';
        max = document.querySelector('.max');
        min = document.querySelector('.min');
    } 
});

number.forEach(item => {
    item.addEventListener('click', (event)=>{
        if(!answer)return;
        if(judgeAnswer.textContent){
            judgeAnswer.textContent = '';
            input.textContent = '';
            inputNumber = '';
        }
        if(banner.textContent === '請重新輸入範圍的數字'){
            banner.innerHTML ='請輸入<span class="min"></span>~<span class="max"></span>之間的數字';
            max = document.querySelector('.max');
            min = document.querySelector('.min');
            max.textContent = `${maxNumber}`
            min.textContent = `${minNumber}`
        } 
        let originNumber = inputNumber;
        inputNumber += `${event.target.textContent}`;
        if(inputNumber > 100) inputNumber = originNumber;
        else input.textContent = inputNumber;
    });
});


cancel.addEventListener('click', (event)=>{
    inputNumber = '';
    input.textContent = inputNumber;
    judgeAnswer.textContent = '';

});

check.addEventListener('click', (event)=>{
    if(!answer)return;
    let parseNumber = parseInt(inputNumber,10);
    if(parseNumber > answer&& maxNumber > parseNumber){
        maxNumber = parseNumber;
        max.textContent = `${maxNumber}`
    } 
    else if(answer > parseNumber && parseNumber > minNumber){
        minNumber = parseNumber;
        min.textContent = `${minNumber}`
    } 
    else if(answer === parseNumber){
        minNumber = ''; maxNumber = '';
        banner.textContent = '答對了';
    }
    else banner.textContent = '請重新輸入範圍的數字';
    if(answer === parseNumber)judgeAnswer.textContent = '答案:正確';
    else judgeAnswer.textContent = '答案:錯誤';
    let submitNumber = document.createElement('p');
    submitNumber.textContent = inputNumber;
    record.append(submitNumber);

});