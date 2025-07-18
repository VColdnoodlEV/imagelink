// 캐러셀 데이터
const characters = [
  {
    img: "https://i.ibb.co/tmSp38M/character1.png",
    name: "캐릭터 이름 1",
    desc: "이 캐릭터는 용감하고 정의로우며 모험을 사랑합니다."
  },
  {
    img: "https://i.ibb.co/VH9RZgL/profile-thumb.jpg",
    name: "캐릭터 이름 2",
    desc: "차분하고 지혜로운 성격으로 모두의 신뢰를 받습니다."
  },
  {
    img: "https://i.ibb.co/Tkq4P94/gallery-thumb.jpg",
    name: "캐릭터 이름 3",
    desc: "유쾌하고 명랑한 분위기로 분위기 메이커 역할을 합니다."
  },
  {
    img: "https://i.ibb.co/WnqXnTx/story-thumb.jpg",
    name: "캐릭터 이름 4",
    desc: "냉철한 전략가로 팀의 전술을 책임지고 있습니다."
  },
  {
    img: "https://i.ibb.co/0GtC6mW/world-thumb.jpg",
    name: "캐릭터 이름 5",
    desc: "자유로운 영혼으로 예술과 음악을 사랑합니다."
  }
];

const imgEl = document.getElementById("carousel-img");
const nameEl = document.getElementById("carousel-name");
const descEl = document.getElementById("carousel-desc");
const btns = document.querySelectorAll(".carousel-btns button");

function setCharacter(idx) {
  const c = characters[idx];
  imgEl.src = c.img;
  imgEl.alt = c.name + " 이미지";
  nameEl.textContent = c.name;
  descEl.textContent = c.desc;

  btns.forEach((btn, i) => {
    btn.classList.toggle("active", i === idx);
    btn.setAttribute("aria-selected", i === idx ? "true" : "false");
  });
}

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    setCharacter(parseInt(btn.dataset.index));
  });
});

// 초기 표시
setCharacter(0);
