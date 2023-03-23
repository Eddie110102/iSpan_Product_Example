const cardBox = document.getElementById("cardBox");
let random = Math.floor(Math.random(1) * 30);
random > 12 ? (random = 9) : random < 5 ? (random = 5) : random;

const card =
  '<div class="card"><div class="imgBox"><img src="./images/courseImg.jpg" alt="course"><div class="circleImgBox"><img src="./images/user.jpg" alt="user" class="circleImg"></div><div class="myListIcon"><img src="./images/play-list-bg.png" alt=""></div></div><div class="cardTextBox"><p class="cardTag">標籤</p><h2 class="cardTitle">卡片標題</h2><div class="cardInfo"><span class="cardView">觀看次數：399</span><span class="cardDate">2023-03-23</span><span class="cardLike"><i class="fa-regular fa-heart"></i> 199</span></div></div></div>';

for (let i = 0; i < random; i++) {
  cardBox.innerHTML += card;
}

// 補齊空白卡片
cardBox.innerHTML +=
  '<div style="width:380px;"></div><div style="width:380px;"></div><div style="width:380px;"></div>';
