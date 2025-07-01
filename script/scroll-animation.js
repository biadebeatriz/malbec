document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // 🔁 Remove classe quando sai da tela, para reanimar ao voltar
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.01, // menor threshold para ativar mesmo com pequena parte visível
    }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
    // Se já está visível ao carregar, ativa imediatamente
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("visible");
    }
  });
});
