const images = document.querySelectorAll(".img");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
console.log(images[0]);

nextBtn.addEventListener("click", function () {
  nextPic();
  clearInterval(myInterval);
  myInterval = setInterval(function () {
    nextPic();
  }, 3000);
});

prevBtn.addEventListener("click", function () {
  PrevPic();
  clearInterval(myInterval);
  myInterval = setInterval(function () {
    nextPic();
  }, 3000);
});

const nextPic = () => {
  const current = document.querySelector(".current");
  if (current.nextElementSibling) {
    current.classList.remove("current");
    current.nextElementSibling.classList.add("current");
    console.log(current.nextElementSibling);
  } else {
    current.classList.remove("current");
    images[0].classList.add("current");
  }
};

const PrevPic = () => {
  const current = document.querySelector(".current");
  if (current.previousElementSibling) {
    current.classList.remove("current");
    current.previousElementSibling.classList.add("current");
    console.log(current.nextElementSibling);
  } else {
    current.classList.remove("current");
    images[images.length - 1].classList.add("current");
  }
};

let myInterval = setInterval(function () {
  nextPic();
}, 3000);
