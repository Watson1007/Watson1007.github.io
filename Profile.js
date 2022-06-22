let itemOneImage = document.querySelector(".item.one > img");

itemOneImage.setAttribute("src", "https://cdn2.ettoday.net/images/2731/2731666.jpg");

let profile = {
    "姓名":"777",
    "Email":"8787@gmail.com",
    "學校":"Build school",
    "興趣":"發電"
}

let itemTwoUl = document.querySelector(".item.two > ul");

Object.entries(profile).forEach((item)=>{
    let lielemnt = document.createElement("li");
    const[key, value] = item;
    lielemnt.textContent = key + ":" + value;
    itemTwoUl.appendChild(lielemnt);
})

let picture = [
    "https://cdn.ftvnews.com.tw/summernotefiles/News/3fe3f1e6-553b-4078-9668-7df30c7ab58b.jpg",
    "https://www.look-in.com.tw/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdzdWQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5bf12e48a24821978d93e6067bccc2aa20f4e370/7275897a8755e75f6fb4c16db2d39ca2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4MPJaQ3zjRWz2bAUGAL8A14S4X6D7SOqtg&usqp=CAU"
]

let itemThreeImage = document.querySelector(".item.three");

picture.forEach((item)=>{
    let lielemnt = document.createElement("img");
    lielemnt.setAttribute("src",item);
    itemThreeImage.appendChild(lielemnt);
})