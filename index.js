const counterContainers = document.querySelectorAll('.counter-container');
const countElements = document.querySelectorAll('.count');
let isCounting = [];

function startCounter(targetCount, countElement, index) {
  if (isCounting[index]) return;
  isCounting[index] = true;

  let count = 0;
  const incrementInterval = 5; // Adjust this value for faster updating

  const interval = setInterval(() => {
    count += 1;
    countElement.textContent = count;

    if (count >= targetCount) {
      clearInterval(interval);
      isCounting[index] = false;
    }
  }, incrementInterval);
}

window.addEventListener('scroll', () => {
  counterContainers.forEach((container, index) => {
    const rect = container.getBoundingClientRect();
    if (rect.top <= window.innerHeight && !isCounting[index]) {
      const targetCount = parseInt(countElements[index].getAttribute('data-limit'));
      startCounter(targetCount, countElements[index], index);
    }
  });
});





