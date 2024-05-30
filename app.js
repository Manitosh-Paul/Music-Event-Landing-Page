const carouselSlider = document.querySelector(".carousel-slider");
const images = document.querySelectorAll(".carousel-slider .img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const size = images[0].clientWidth;

let counter = 1;
carouselSlider.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) {
    return;
  }
  counter += 1;
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  carouselSlider.style.transition = "all 0.3s linear";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) {
    return;
  }
  counter -= 1;
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  carouselSlider.style.transition = "all 0.3s linear";
});

carouselSlider.addEventListener("transitionend", () => {
  if (images[counter].id == "first-clone") {
    carouselSlider.style.transition = "none";
    counter = images.length - counter;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (images[counter].id == "last-clone") {
    carouselSlider.style.transition = "none";
    counter = images.length - 2;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  }
});

// countdown timer
const countDownClock = (number = 100, format = "seconds") => {
  const d = document;
  const daysElement = d.querySelector(".days");
  const hoursElement = d.querySelector(".hours");
  const minutesElement = d.querySelector(".minutes");
  const secondsElement = d.querySelector(".seconds");
  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case "seconds":
        return timer(number);
      case "minutes":
        return timer(number * 60);
      case "hours":
        return timer(number * 60 * 60);
      case "days":
        return timer(number * 60 * 60 * 24);
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    daysElement.textContent = Math.floor(seconds / 86400);
    hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
};

/*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/
countDownClock(9, "days");

// Date navigation
const band_playing = document.getElementById("band_playing");
const interaction = document.getElementById("interaction_status");
const date1 = document.getElementById("Jun7");
const date2 = document.getElementById("Jun8");
const date3 = document.getElementById("Jun9");

date1.addEventListener("click", () => {
  band_playing.innerHTML = "Indian Ocean";
  interaction.innerHTML = "Mingle with fellow attendes";
});

date2.addEventListener("click", () => {
  band_playing.innerHTML = "TRAP";
  interaction.innerHTML =
    "games with fellow attendes followed by making connections.";
});

date3.addEventListener("click", () => {
  band_playing.innerHTML = "Local Train";
  interaction.innerHTML = "couple dance with connections made.";
});
