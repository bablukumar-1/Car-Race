window.addEventListener('DOMContentLoaded', () => {
  const car = document.getElementById('cars');
  car.addEventListener('click', () => {
    const audio = new Audio('sound.mp3');
    audio.loop = true;
    audio.play().catch(console.error);
  });
});