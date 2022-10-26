var map = L.map("map").setView([23.7078958, 121.4200929], 8);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 13,
  minZoom: 8,
  attribution: "© OpenStreetMap",
}).addTo(map);
let url = "https://raw.githubusercontent.com/Watson1007/220607/main/Map.json";
let rawData;
let markers = L.markerClusterGroup();

window.addEventListener("DOMContentLoaded", function () {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      rawData = Object.values(res.XML_Head.Infos.Info);
      let group = rawData.groupBy('Region');
      console.log(group);
    //   setMarker();
    });
});
// const setMarker = () => {
//   rawData.forEach((item) => {
//     console.log(item.Px)
//     let marker = L.marker([item.Px, item.Py])
//       .addTo(map)
//       .bindPopup(`${item.Name},${item.Parkinginfo}`);
//       markers.addLayer(marker);
//       map.addLayer(markers);
//   });
// };
Array.prototype.groupBy = function (prop) {
  return this.reduce(function (groups, item) {
    const val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
};
Array.prototype.GroupBy = function (prop) {
  //prop為data的property，想要分類的值
  //groups為分組的累加器
  //item為每一筆rawdata資料
  //value當作分類的KEYs
  //groups的Values為data
  return this.reduce(function (groups, item) {
    const value = item[prop];
    groups[value] = groups[value] || [];
    groups[value].push(item);
    return groups;
  }, {});
};
