// Carrossel JavaScript - Performance otimizada
let currentSlide = 0;
let slides, indicators;
let autoPlayInterval;
let isPaused = false;

// Cache dos elementos DOM para melhor performance
function initializeCarousel() {
  slides = document.querySelectorAll(".carousel-slide");
  indicators = document.querySelectorAll(".indicator");
}

function showSlide(n) {
  // Remove todas as classes
  slides.forEach((slide) => {
    slide.classList.remove("active", "prev");
  });
  indicators.forEach((indicator) => indicator.classList.remove("active"));

  // Calcula o índice correto
  currentSlide = (n + slides.length) % slides.length;

  // Adiciona active ao slide atual
  slides[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");

  // Adiciona prev ao slide anterior
  const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[prevSlide].classList.add("prev");
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
  // Reinicia o timer após mudança manual
  resetAutoPlay();
}

function goToSlide(n) {
  showSlide(n - 1);
  // Reinicia o timer após mudança manual
  resetAutoPlay();
}

function autoPlay() {
  if (!isPaused) {
    changeSlide(1);
  }
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(autoPlay, 4000);
}

function pauseAutoPlay() {
  isPaused = true;
  // Muda para tempo mais lento quando hover
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(autoPlay, 7000);
}

function resumeAutoPlay() {
  isPaused = false;
  // Volta para tempo normal quando não há hover
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(autoPlay, 4000);
}

// Inicializa o carrossel quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
  initializeCarousel();
  showSlide(0);
  resetAutoPlay();

  // Pausa no hover
  const carousel = document.querySelector(".carousel");
  if (carousel) {
    carousel.addEventListener("mouseenter", pauseAutoPlay);
    carousel.addEventListener("mouseleave", resumeAutoPlay);
  }
});
