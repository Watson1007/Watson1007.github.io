let MarketShare = {
    title: ["rank", "Corp.", "Country", "percentage"],
    data: [
        {
            rank: 1,
            company: "台積電",
            country: "台灣",
            percentage: 53.1,
        },
        {
            rank: 2,
            company: "三星",
            country: "韓國",
            percentage: 17.3,
        },
        {
            rank: 3,
            company: "聯電",
            country: "台灣",
            percentage: 7.2,
        },
        {
            rank: 4,
            company: "格羅芳德",
            country: "美國",
            percentage: 6.1,
        },
        {
            rank: 5,
            company: "中芯",
            country: "中國",
            percentage: 5.3,
        },
        {
            rank: 6,
            company: "華虹",
            country: "中國",
            percentage: 2.6,
        },
        {
            rank: 7,
            company: "力積電 ",
            country: "台灣",
            percentage: 1.8,
        },
        {
            rank: 8,
            company: "世界先進",
            country: "台灣",
            percentage: 1.4,
        },
        {
            rank: 9,
            company: "高塔",
            country: "以色列",
            percentage: 1.4,
        },
        {
            rank: 10,
            company: "東部高科",
            country: "韓國",
            percentage: 1,
        },
    ],
};

let thead = document.querySelector(".main-table thead");
let tbody = document.querySelector(".main-table tbody");
let th = document.createElement("th");
let corpname = [];
let Marketpercentage = [];

MarketShare.title.forEach((title) => {
    let td = document.createElement("td");
    td.textContent = title;
    th.appendChild(td);
});

thead.appendChild(th);

MarketShare.data.forEach((item) => {
    let tr = document.createElement("tr");
    Object.values(item).forEach((objValue) => {
        let td = document.createElement("td");
        td.textContent = objValue;
        tr.appendChild(td);
    });
    corpname.push(item.company);
    Marketpercentage.push(item.percentage);
    tbody.appendChild(tr);
});

let MarketChart = document.querySelector(".Chart");
let ctxPie = document.getElementById("mkShare");
var pieChart = new Chart(MarketChart, {
    type: "doughnut",
    data: {
        labels: corpname,
        datasets: [
            {
                data: Marketpercentage,
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255,75,50)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
                    "rgb(255, 138, 64)",
                    "rgb(142, 65, 64)",
                    "rgb(59, 72, 64)",
                ],
            },
        ],
    },
    options: {
        responsive: true,
        title: {
            display: true,
            fontSize: 26,
            text: "2021年全球晶圓代工市佔率%",
        },
        tooltips: {
            mode: "point",
            intersect: true,
        },
        legend: {
            position: "bottom",
            labels: {
                fontColor: "black",
            },
        },
    },
});
// const myChart = new Chart(MarketChart, {
//     type: 'doughnut',
//     data: {
//         labels: corpname,
//         datasets: [{
//             label: '# of Votes',
//             data: Marketpercentage,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//         }],
//         options:{
//             responsive: true,
//             title: {
//                 display: true,
//                 fontSize: 26,
//                 text: '2021年全球晶圓代工市佔率%'
//             },
//             tooltips: {
//                 mode: 'point',
//                 intersect: true,
//             },
//             legend: {
//                 position: 'bottom',
//                 labels: {
//                     fontColor: 'red',
//                 }
//             }
//         },
//     }});
