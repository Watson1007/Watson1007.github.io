let getRandom = (min, max) => {
  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};


let secretGenerator = () => {
  let answer = new Set();

  while (answer.size < 4) {
    let answeritem = getRandom(0, 9);
    answer.add(answeritem);
  }

  let randomNumber = Array.from(answer).join('');
  return randomNumber;
};

let answer;

let start = document.querySelector('.start');
let restart = document.querySelector('.restart');
let present = document.querySelector('.present');
let inputAction = document.querySelector('.inputAction');
let submit = document.querySelector('.submit');
let showAnswer = document.querySelector('.showAnswer');
let record = document.querySelector('.record');


start.addEventListener('click',() =>{
    answer = secretGenerator();
    showAnswer.textContent = "XXXX"
});

restart.addEventListener('click',() =>{
  if(!answer) return;
    answer = secretGenerator();
    showAnswer.textContent = "XXXX"
    record.innerHTML = '';
});

present.addEventListener('click', ()=>{
  if(!answer) return;
  showAnswer.textContent = answer;
});

submit.addEventListener('click',() =>{
  if(!answer || !inputAction.value) return;
  let spanAB = document.createElement('span');
  spanAB.setAttribute('class', 'AB');
  let spanNumber = document.createElement('span')
  spanNumber.setAttribute('class', 'number');
  let judgeInput = inputAction.value.split('').map(x=>parseInt(x));
  let judgeInputSet = new Set([...judgeInput]);
  // if(judgeInputSet.size < 4 || inputAction.value.length>4 ){
  //   spanNumber.textContent = "請輸入四位不同的數字";
  //   spanAB.textContent = "錯誤";
  // }
  
  
  spanNumber.textContent = inputAction.value.toString();

  if(answer == inputAction.value.toString()){
    spanAB.textContent = '4A0B';
    record.prepend(spanAB,spanNumber);
  }
  let answerArr = answer.toString().split('');
  let inputArr = inputAction.value.toString().split('');

  let A = answerArr.filter((x,index)=>{
    return x === inputArr[index];
  }).length;
  let AplusB = answerArr.filter(x=>inputArr.includes(x)).length;
  let B = Math.abs(A-AplusB);

  spanAB.textContent = `${A}A${B}B`;
  record.prepend(spanAB,spanNumber);
  if(judgeInputSet.size < 4 || inputAction.value.length>4 ){
    spanNumber.textContent = "請輸入四位不同的數字";
    spanAB.textContent = "錯誤";
  }
});


