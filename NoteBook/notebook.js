let qs_usersubmit = document.querySelector(".usersubmit");
let qs_userinput = document.querySelector(".userinput");
let qs_template = document.querySelector(".todo");
let qs_content = document.querySelector(".content");
//[{INDEX:timeID,VALUE:notevalue,checked:TURE]}];


window.addEventListener("DOMContentLoaded", function () {
  submit();
  createNotebook();
});
function submit() {
  qs_usersubmit.addEventListener("click", function () {
    if(qs_userinput.value == '') return;
    let notebookData;
    let item = {};

    if(localStorage.getItem('notebook')){
      notebookData = JSON.parse(localStorage.getItem('notebook'));
    }
    else{notebookData = [];}
    item.index = new Date().toLocaleString("en-us");
    item.value = qs_userinput.value;
    item.checked = false;
    notebookData.push(item);
    localStorage.setItem(
      'notebook', JSON.stringify(notebookData)
    );
    qs_content.innerHTML = '';
    createNotebook();
    qs_userinput.value = '';
  });
}

function createNotebook() {
  let data = JSON.parse(localStorage.getItem('notebook'));
  console.log(data);
  let sortdata = data.sort((a, b) => {
    return new Date(a.index) - new Date(b.index);
  });
  
  sortdata.forEach(item=>{
    let template = qs_template.content.cloneNode(true);
    let qs_userdata = template.querySelector('.userdata');
    let qs_checkbox = template.querySelector('.checkbox');
    let qs_checkboxtargetParent = template.querySelector('.time');
    let qs_revise = template.querySelector('.revise');
    let qs_delete = template.querySelector('.delete');

    qs_checkbox.addEventListener('change',function(event){
        let mark = event.target.parentNode.getAttribute('data');
        let locationAT = sortdata.findIndex(x=>x.index == mark);
        let DataValue = sortdata[locationAT]; 
        DataValue.checked = event.target.checked;
        let excludeOriginData = sortdata.filter(x=>x.index != mark);
        excludeOriginData.push(DataValue);
        localStorage.setItem(`notebook`,JSON.stringify(excludeOriginData));
    });
    qs_revise.addEventListener('click',function(event){
        if(event.target.classList.contains('btn-warning')){
            event.target.classList.remove('btn-warning');
            event.target.classList.add('btn-success');
            event.target.textContent = '保存';
            qs_userdata.disabled = false;
        }
        else{
            event.target.classList.remove('btn-success');
            event.target.classList.add('btn-warning');
            event.target.textContent = '編輯';
            qs_userdata.disabled = true;
            let mark = event.target.parentNode.getAttribute('data');
            let locationAT = sortdata.findIndex(x=>x.index == mark);
            let DataValue = sortdata[locationAT]; 
            DataValue.value = event.target.previousSibling.previousSibling.value;
            let excludeOriginData = sortdata.filter(x=>x.index != mark);
            excludeOriginData.push(DataValue);
            localStorage.setItem(`notebook`,JSON.stringify(excludeOriginData));
        }
    });
    qs_delete.addEventListener('click',function(event){
        let mark = event.target.parentNode.getAttribute('data');
        let excludeDelData = sortdata.filter(x=>x.index != mark);
        localStorage.setItem(`notebook`,JSON.stringify(excludeDelData));
        qs_content.innerHTML = '';
        createNotebook();
    });
    qs_checkboxtargetParent.setAttribute('data',`${item.index}`);
    qs_userdata.value = item.value;
    qs_userdata.disabled = true;
    qs_checkbox.checked = item.checked;
    qs_content.append(template);
  })
}

