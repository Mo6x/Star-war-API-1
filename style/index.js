/* Modal Display of stars info*/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
let modalName = document.querySelector("#name");
let modalgender = document.querySelector("#gender");
let modalheight = document.querySelector("#height");

console.log(btnsOpenModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// API CALL
const BASE_URL = "https://swapi.dev/api/people";
const main = document.getElementById("main");

const images = [
  "blood-shot.jpg",
  "becky-fantham-d-l1y3n4r04-unsplash.jpg",
  "wanda.png",
  "nice-m-nshuti-cTqxDBsEv3g-unsplash.jpg",
  "transformer.jpg",
  "cade-roberts-EpIUbeFrqwQ-unsplash.jpg",
  "wanda.webp",
  "jim-tegman-n8EBy1hXdTI-unsplash.jpg",
  "anthony-duran-ghziyUe5eI8-unsplash.jpg",
  "eduardo-balderas-uoRwuaQhMBw-unsplash.jpg",
];

getPeople(BASE_URL);
function getPeople(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showPeople(data.results);
      // console.log(data);
    });
}

function showPeople(data) {
  main.innerHTML = "";
  data.forEach((character, index) => {
    const { name, gender, height } = character;
    const charEl = document.createElement("div");
    charEl.classList.add("movie");
    let showModal = document.createElement("div");
    showModal.classList.add("show-modal");
    charEl.appendChild(showModal);
    showModal.innerHTML = `

    <img src="./series/${images[index]}" alt="image">
    <div class="movie-info">
        <h2>NAME : ${name}</h2>

    </div>

    `;
    const openModal = function () {
      modalName.textContent = `Name: ${name}`;
      modalgender.textContent = `Gender: ${gender}`;
      modalheight.textContent = `Height: ${height}`;
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    };
    showModal.addEventListener("click", openModal);

    main.appendChild(charEl);
  });
}
