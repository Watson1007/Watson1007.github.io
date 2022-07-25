let url =
  "https://ddragon.leagueoflegends.com/cdn/10.22.1/data/zh_TW/champion.json";
let cardsBody = document.querySelector(".cards-body");
let cardTemplate = document.querySelector("#heroesCards");
window.onload = function () {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      championsObject = result.data;
      let dataArray = Object.entries(championsObject);
      dataArray.forEach((item, index) => {
        let [keys, values] = item;
        let pic = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${keys}_0.jpg`;
        let title = `${index}-${values.id}-${values.name}`;
        let description = `${values.blurb.substring(0, 50)}`;
        let cloneCard = cardTemplate.content.cloneNode(true);
        cloneCard.querySelector("img").src = pic;
        cloneCard.querySelector("h5").innerText = title;
        cloneCard.querySelector("p").innerText = description;
        let qu_button = cloneCard.querySelector(".btn-detail");
        qu_button.addEventListener("click", () => {
          setModal(
            values.name,
            values.stats.hp,
            values.stats.movespeed,
            values.stats.armor,
            values.stats.spellblock,
            values.stats.attackrange,
            keys
          );
        });
        cardsBody.append(cloneCard);
      });
    })
    .catch();
};

function setModal(title, hp, speed, armor, block, range, imgurl) {
  let modal = document.querySelector(".detail-modal");
  let h5 = modal.querySelector("h5");
  let img = modal.querySelector("img");
  let textArea = document.querySelector(".abilities");
  let abilities = document.createElement("span");

  h5.innerText = title;

  textArea.innerHTML = "";
  img.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${imgurl}_0.jpg`;
  abilities.innerHTML = `HP：${hp} <br><br> Move Speed：${speed} <br><br> Armor：${armor} <br><br> Spell Block：${block}<br><br> AttackRange：${range}`;
  textArea.append(abilities);
}
