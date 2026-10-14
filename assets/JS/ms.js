const menuButton = document.querySelector("#menu-celular");
const mainMenu = document.querySelector("#menu-principal");
const mobileMenu = window.matchMedia("(max-width: 900px)");

function closeMenu() {
  if (!menuButton || !mainMenu) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  menuButton.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
  mainMenu.classList.remove("menu-aberto");
}

if (menuButton && mainMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    menuButton.innerHTML = `<i class="fa fa-${isOpen ? "bars" : "times"}" aria-hidden="true"></i>`;
    mainMenu.classList.toggle("menu-aberto", !isOpen);
  });

  mainMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  mobileMenu.addEventListener("change", (event) => {
    if (!event.matches) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

if (typeof Swiper !== "undefined") {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  new Swiper(".msSlider", {
    loop: true,
    speed: reduceMotion ? 0 : 650,
    autoplay: reduceMotion ? false : { delay: 5500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    a11y: { enabled: true },
  });
}

const yearLabel = document.querySelector("#ano-atual");
if (yearLabel) yearLabel.textContent = String(new Date().getFullYear());

const appointmentForm = document.querySelector("#form-agendamento");
if (appointmentForm) {
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    const formData = new FormData(appointmentForm);
    const whatsappNumber = window.MS_CLINICA?.whatsappNumber ?? "";

    if (!/^\d{10,15}$/.test(whatsappNumber)) {
      status.textContent =
        "O WhatsApp da clínica ainda não foi configurado. Entre em contato diretamente com a recepção.";
      return;
    }

    const message = [
      "Olá! Gostaria de solicitar um agendamento.",
      `Nome: ${formData.get("nome")}`,
      `Telefone: ${formData.get("telefone")}`,
      `Serviço de interesse: ${formData.get("servico")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    status.textContent =
      "O navegador tentou abrir o WhatsApp. Se nada acontecer, verifique o bloqueador de pop-ups.";
  });
}