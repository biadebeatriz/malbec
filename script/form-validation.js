// Validação do formulário de contato
document.addEventListener("DOMContentLoaded", function () {
  const formContato = document.getElementById("formContato");

  if (formContato) {
    formContato.addEventListener("submit", function (e) {
      e.preventDefault();
      let ok = true;
      const form = e.target;

      // Remove erros antigos
      form
        .querySelectorAll(".erro")
        .forEach((el) => el.classList.remove("erro"));

      // Validação simples
      ["tipo", "nome", "email", "comentarios"].forEach((id) => {
        const el = form.querySelector("#" + id);
        if (!el.value) {
          el.classList.add("erro");
          ok = false;
        }
      });

      if (!ok) return;

      // Mostra mensagem de sucesso
      document.getElementById("mensagemSucesso").style.display = "block";
      form.reset();

      setTimeout(() => {
        document.getElementById("mensagemSucesso").style.display = "none";
      }, 4000);
    });
  }
});
