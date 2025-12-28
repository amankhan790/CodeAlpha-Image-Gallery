const imageGallery = document.querySelector("#image-gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const rightArrow = document.querySelector("#lightbox .right");
const leftArrow = document.querySelector("#lightbox .left");
const filterButtons = document.querySelectorAll(".category-item");

let arr = [
  // 🐾 Animals
  {
    Image: "/Images/Animals/animal3.jpg",
    name: "Animal 1",
    category: "animals",
  },
  {
    Image: "/Images/Animals/animal2.jpg",
    name: "Animal 2",
    category: "animals",
  },
  {
    Image: "/Images/Animals/animal1.jpg",
    name: "Animal 3",
    category: "animals",
  },
  { Image: "/Images/Animals/turtle.jpg", name: "Turtle", category: "animals" },
  { Image: "/Images/Animals/wolf.jpg", name: "Wolf", category: "animals" },

  // 🏛 Architecture
  {
    Image: "/Images/architecture/Axel Towers.jpg",
    name: "Axel Towers",
    category: "architecture",
  },
  {
    Image: "/Images/architecture/Rennes architecture.jpg",
    name: "Rennes Architecture",
    category: "architecture",
  },
  {
    Image: "/Images/architecture/Rock and Roll Hall of Fame.jpg",
    name: "Rock & Roll Hall of Fame",
    category: "architecture",
  },
  {
    Image: "/Images/architecture/textures wallpaper.jpg",
    name: "Textures Wallpaper",
    category: "architecture",
  },
  {
    Image: "/Images/architecture/White apartment building.jpg",
    name: "White Apartment Building",
    category: "architecture",
  },

  // 🌿 Nature
  { Image: "/Images/nature/nature1.jpg", name: "Nature 1", category: "nature" },
  { Image: "/Images/nature/nature2.jpg", name: "Nature 2", category: "nature" },
  { Image: "/Images/nature/nature3.jpg", name: "Nature 3", category: "nature" },
  { Image: "/Images/nature/nature4.jpg", name: "Nature 4", category: "nature" },
  { Image: "/Images/nature/nature5.jpg", name: "Nature 5", category: "nature" },
  { Image: "/Images/nature/nature6.jpg", name: "Nature 6", category: "nature" },
  { Image: "/Images/nature/nature7.jpg", name: "Nature 7", category: "nature" },

  // 🍔 Food
  {
    Image: "/Images/food/Avocado and Egg Toast.jpg",
    name: "Avocado Toast",
    category: "food",
  },
  { Image: "/Images/food/cake.jpg", name: "Cake", category: "food" },
  {
    Image: "/Images/food/eggs and food.jpg",
    name: "Eggs & Food",
    category: "food",
  },
  {
    Image: "/Images/food/kawab food.jpg",
    name: "Kebab Food",
    category: "food",
  },
  {
    Image: "/Images/food/meal with salmon.jpg",
    name: "Salmon Meal",
    category: "food",
  },
  { Image: "/Images/food/meat.jpg", name: "Meat", category: "food" },
  { Image: "/Images/food/pizza.jpg", name: "Pizza", category: "food" },
  {
    Image: "/Images/food/salad vegan.jpg",
    name: "Vegan Salad",
    category: "food",
  },
  {
    Image: "/Images/food/vagetables.jpg",
    name: "Vegetables",
    category: "food",
  },

  // ✈️ Travel
  { Image: "/Images/travel/baloons.jpg", name: "Balloons", category: "travel" },
  { Image: "/Images/travel/boat.jpg", name: "Boat", category: "travel" },
  {
    Image: "/Images/travel/buildings.jpg",
    name: "Buildings",
    category: "travel",
  },
  {
    Image: "/Images/travel/mountains.jpg",
    name: "Mountains",
    category: "travel",
  },
];

const cardSizes = ["tall", "medium", "small"];

let currList = arr;
let currIndex = 0;

function renderGallery(list) {
  imageGallery.innerHTML = "";

  list.forEach((item, index) => {
    const card = document.createElement("div");

    let cardClass = cardSizes[index % cardSizes.length];

    card.classList.add("card", cardClass);

    let img = document.createElement("img");
    img.src = item.Image;
    img.alt = item.name;

    img.addEventListener("click", () => {
      currIndex = index;
      lightboxImg.src = currList[currIndex].Image;
      lightbox.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      imageGallery.src = img.src;
      lightbox.classList.remove("active");
    });

    card.appendChild(img);
    imageGallery.appendChild(card);
  });
}

renderGallery(currList);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    console.log(category);

    currList =
      category === "all"
        ? arr
        : arr.filter((item) => item.category === category);
    currIndex = 0;
    renderGallery(currList);
  });
});
rightArrow.addEventListener("click", () => {
  currIndex = (currIndex + 1) % currList.length;
  lightboxImg.src = currList[currIndex].Image;
});
leftArrow.addEventListener("click", () => {
  currIndex = (currIndex - 1 + currList.length) % currList.length;
  lightboxImg.src = currList[currIndex].Image;
});
