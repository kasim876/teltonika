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