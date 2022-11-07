import AOS from "aos";

AOS.init();

const stagesIcons = Array.from(document.querySelectorAll(".stages__icon"))
let currentStagesIcon = stagesIcons[0];

setInterval(() => {
  currentStagesIcon = stagesIcons.next()
  
  if (document.querySelector(".aos-animate")) {
    currentStagesIcon.classList.add("animated");
    currentStagesIcon.classList.add("jello");

    setTimeout(() => {
      currentStagesIcon.classList.remove("animated");
      currentStagesIcon.classList.remove("jello");
    }, 1000)
  }
}, 2000)