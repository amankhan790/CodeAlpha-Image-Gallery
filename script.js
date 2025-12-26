let imageGallery = document.querySelector("#image-gallery");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

let arr = [
  { Image: "/Images/Animals/animal1.jpg", name: "Animal 1" },
  { Image: "/Images/Animals/animal2.jpg", name: "Animal 2" },
  { Image: "/Images/Animals/animal3.jpg", name: "Animal 3" },
  { Image: "/Images/Animals/turtle.jpg", name: "Turtle" },
  { Image: "/Images/Animals/wolf.jpg", name: "Wolf" },

  { Image: "/Images/architecture/Axel Towers.jpg", name: "Axel Towers" },
  {
    Image: "/Images/architecture/Rennes architecture.jpg",
    name: "Rennes Archite/food",
  },
  {
    Image: "/Images/architecture/Rock and Roll Hall of Fame.jpg",
    name: "Rock & Roll Hall of Fame",
  },
  {
    Image: "/Images/architecture/textures wallpaper.jpg",
    name: "Textures Wallpaper",
  },
  {
    Image: "/Images/architecture/White apartment building.jpg",
    name: "White Apartment Building",
  },

  { Image: "/Images/nature/nature1.jpg", name: "Nature 1" },
  { Image: "/Images/nature/nature2.jpg", name: "Nature 2" },
  { Image: "/Images/nature/nature3.jpg", name: "Nature 3" },
  { Image: "/Images/nature/nature4.jpg", name: "Nature 4" },
  { Image: "/Images/nature/nature5.jpg", name: "Nature 5" },
  { Image: "/Images/nature/nature6.jpg", name: "Nature 6" },
  { Image: "/Images/nature/nature7.jpg", name: "Nature 7" },

  {
    Image: "/Images/food/Avocado and Egg Toast.jpg",
    name: "Avocado Toast",
  },
  { Image: "/Images/food/cake.jpg", name: "Cake" },
  { Image: "/Images/food/eggs and food.jpg", name: "Eggs & Food" },
  { Image: "/Images/food/kawab food.jpg", name: "Kebab Food" },
  { Image: "/Images/food/meal with salmon.jpg", name: "Salmon Meal" },
  { Image: "/Images/food/meat.jpg", name: "Meat" },
  { Image: "/Images/food/pizza.jpg", name: "Pizza" },
  { Image: "/Images/food/salad vegan.jpg", name: "Vegan Salad" },
  { Image: "/Images/food/vagetables.jpg", name: "Vegetables" },

  { Image: "/Images/travel/baloons.jpg", name: "Balloons" },
  { Image: "/Images/travel/boat.jpg", name: "Boat" },
  { Image: "/Images/travel/buildings.jpg", name: "Buildings" },
  { Image: "/Images/travel/mountains.jpg", name: "Mountains" },
];

const cardSizes = ["tall", "medium", "small"];

arr.map((item, index) => {
  card = document.createElement("div");

  let cardClass = cardSizes[index % cardSizes.length];

  card.classList.add("card", cardClass);

  let img = document.createElement("img");

  img.src = item.Image;
  img.alt = item.name;

  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    imageGallery.src = img.src;
    lightbox.classList.remove("active");
  });

  card.appendChild(img);
  imageGallery.appendChild(card);
});
