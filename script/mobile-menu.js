// Menu mobile
document.addEventListener("DOMContentLoaded", function () {
  initializeMobileMenu();
});

// Função para inicializar o menu mobile
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("nav");
  const body = document.body;

  // Criar overlay
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  body.appendChild(overlay);

  // Toggle do menu
  mobileMenuBtn.addEventListener("click", function () {
    mobileMenuBtn.classList.toggle("active");
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
    document.querySelector(".header").classList.toggle("menu-open");
    body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
  });

  // Fechar menu ao clicar no overlay
  overlay.addEventListener("click", function () {
    mobileMenuBtn.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.querySelector(".header").classList.remove("menu-open");
    body.style.overflow = "";
  });

  // Fechar menu ao clicar em um link
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenuBtn.classList.remove("active");
      nav.classList.remove("active");
      overlay.classList.remove("active");
      document.querySelector(".header").classList.remove("menu-open");
      body.style.overflow = "";
      // Scroll para o topo da página após navegação
      window.scrollTo(0, 0);
    });
  });

  // Fechar menu ao pressionar ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      mobileMenuBtn.classList.remove("active");
      nav.classList.remove("active");
      overlay.classList.remove("active");
      document.querySelector(".header").classList.remove("menu-open");
      body.style.overflow = "";
    }
  });
}
