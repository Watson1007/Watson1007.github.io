let time = new Date();
let day = time.getDate();
let month = time.getMonth();
let year = time.getFullYear();
let firstDayOfWeek = new Date(year, month, 1).getDay();
let thisMonthDays = new Date(year, month + 1, 0).getDate();
let lastMonthDays = new Date(year, month, 0).getDate();

let logoDate = new Date(year,month,day).toLocaleString('en-Us',{'year':'numeric','month':'long'});
let anotherDay = new Date(year,month+1,day);
let anotherDayString = `${anotherDay.getFullYear()}${anotherDay.getMonth()}${anotherDay.getDate()}`;
let yearAndMonth = `${anotherDay.getFullYear()}${anotherDay.getMonth()}`;
let qs_todayDate = document.querySelector(".date");
let qs_insertDay = document.querySelector(".insertDay");
let qs_right = document.querySelector(".rightarrow");
let qs_left = document.querySelector(".leftarrow");
let qs_getDate = document.querySelector(".getDate");
let qs_lightBox = document.querySelector(".lightbox");
let qs_closeCheckbox = document.querySelector("#close");
let qs_closeButton = document.querySelector(".x");
let qs_text = document.querySelector("#text");
let qs_time = document.querySelector("#time");
let qs_color = document.querySelector("#color");
let qs_submit = document.querySelector(".submit");

window.onload = function () {
  createCalender();
  qs_todayDate.textContent = logoDate;
  qs_left.addEventListener("click", () => {
    month -= 1;
    useRef();
    qs_todayDate.textContent = logoDate;
    qs_insertDay.innerHTML = "";
    createCalender();
  });
  qs_right.addEventListener("click", () => {
    month += 1;
    useRef();
    qs_todayDate.textContent = logoDate;
    qs_insertDay.innerHTML = "";
    createCalender();
  });
  qs_closeButton.addEventListener('click',()=>{
    qs_lightBox.style.display = 'none';
  });
  qs_submit.addEventListener('click',storage);
};

function createCalender() {
  let lastcounter = lastMonthDays - firstDayOfWeek +1;
  let counter = 1;
  let nextcounter = 1;
  for (let i = 0; i < 42; i++) {
    let ce_dayContainer = document.createElement("div");
    let ce_day = document.createElement("div");
    ce_day.classList.add("day");
    ce_dayContainer.classList.add("dayContainer");
    ce_dayContainer.append(ce_day);
    qs_insertDay.append(ce_dayContainer);
    if (firstDayOfWeek <= i && i < thisMonthDays + firstDayOfWeek) {
      ce_day.textContent = counter;
      counter++;
      let storage = `${yearAndMonth}${i - firstDayOfWeek + 1}`;
      ce_day.setAttribute("storage", `${storage}`);
      ce_day.addEventListener("click", (event) => {
        return showLightBox(event);
      });

      let localData = localStorage.getItem(`${storage}`) && JSON.parse(localStorage.getItem(`${storage}`));
      console.log(localData);
      if(localData){
        for(let i = 0; i < localData.length; i++){
            let div = document.createElement('div');
            div.textContent = `${localData[i].time} ${localData[i].text}`;
            div.style.backgroundColor = `${localData[i].color}`;
            ce_day.append(div);
        }
      }
    } else if (thisMonthDays + firstDayOfWeek - 1 <= i) {
      ce_day.textContent = nextcounter;
      nextcounter++;
      ce_day.classList.add("lightborder");
    } else if (i < firstDayOfWeek) {
      ce_day.textContent = lastcounter;
      lastcounter++;
      ce_day.classList.add("lightborder");
    }
  }
}
function useRef() {
  yearAndMonth = `${anotherDay.getFullYear()}${anotherDay.getMonth()+1}`;
  firstDayOfWeek = new Date(year, month, 1).getDay();
  thisMonthDays = new Date(year, month + 1, 0).getDate();
  lastMonthDays = new Date(year, month, 0).getDate();
  anotherDay = new Date(year,month+1,day);
  anotherDayString = `${anotherDay.getFullYear()}${anotherDay.getMonth()+1}${anotherDay.getDate()}`;
  logoDate = new Date(year,month,day).toLocaleString('en-Us',{'year':'numeric','month':'long'});
}

function showLightBox(event) {
  let selectedMonthDays = Array.from(document.querySelectorAll("[storage]"));
  for (let i = 0; i < selectedMonthDays.length; i++) {
    selectedMonthDays[i].classList.remove("red");
  }
  event.currentTarget.classList.add("red");
  qs_getDate.textContent = event.currentTarget.getAttribute('storage');
  qs_lightBox.style.display = 'block';
  qs_closeCheckbox.checked = false;
}

function storage(){
    let localData = localStorage.getItem(`${qs_getDate.textContent}`) && JSON.parse(localStorage.getItem(`${qs_getDate.textContent}`));
    let data = [];
    if(localData)data = [...localData];
    let input = {};
    let color;
    input.time = qs_time.value;
    input.text = qs_text.value;
    if(qs_color.value==='#000000'){
      color = '#ffffff';
    } 
    input.color = color ?  color : qs_color.value;
    // input.color = qs_color.value;
    data.push(input);
    localStorage.setItem(`${qs_getDate.textContent}`,JSON.stringify(data));
    qs_insertDay.innerHTML = "";
    createCalender();
}