document.querySelector(".hero").addEventListener("mousemove", (e) => {
  const mask = document.getElementById('mask');
  const maskParent = mask.closest('svg');
  const offset = (document.body.clientWidth - maskParent.clientWidth) / 2;

  let x = e.pageX - 250 - offset;
  let y = e.pageY - 250;
  
  mask.setAttribute('transform', `translate(${x}, ${y})`)
})

document.querySelectorAll("[data-max]").forEach(el => {
  let currentValue = el.innerHTML;
  const maxValue = el.dataset.max;
  const speed = 3000 / maxValue;
  
  setInterval(() => {
    if (currentValue < maxValue) {
      currentValue++;
      el.innerHTML = currentValue;
    }
  }, speed)
});

const heroIcons = Array.from(document.querySelectorAll(".hero__icon"))
let currentHeroIcon = heroIcons[0];

setInterval(() => {
  currentHeroIcon = heroIcons.next()
  
  currentHeroIcon.classList.add("animated");
  currentHeroIcon.classList.add("jello");

  setTimeout(() => {
    currentHeroIcon.classList.remove("animated");
    currentHeroIcon.classList.remove("jello");
  }, 1000)
}, 2000)