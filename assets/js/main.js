// ===============================
// Config
// ===============================
const WHATSAPP_URL =
  "https://wa.me/554333711212?text=Olá! Preciso de ajuda com um problema bancário relacionado ao meu benefício. Gostaria de saber mais sobre os serviços da INVESTCRED.";

// Helpers
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function openWhatsApp(e) {
  if (e) e.preventDefault();
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
}

// ===============================
// Menu mobile (toggle + ARIA + close on link)
// ===============================
const hamburger = $(".hamburger");
const navMenu = $(".nav-menu");

function setMenuState(isOpen) {
  if (!navMenu || !hamburger) return;
  navMenu.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
}

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("active");
    setMenuState(!isOpen);
  });

  // Close mobile menu when clicking on a link
  $$(".nav-link").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
}

// ===============================
// Smooth scrolling
// ===============================
$$('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    const target = $(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ===============================
// Form validation (if form exists)
// ===============================
const form = $("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = $$("input[required], textarea[required], select[required]", form);
    let isValid = true;

    inputs.forEach((input) => {
      const ok = Boolean(input.value && input.value.trim());
      input.style.borderColor = ok ? "#1d1d35" : "#ff0000";
      if (!ok) isValid = false;
    });

    if (isValid) {
      alert("Solicitação enviada com sucesso! Entraremos em contato em breve para analisar seu caso.");
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
}

// ===============================
// Portfolio hover effects
// (ideal seria CSS :hover, mas mantive JS igual ao original)
// ===============================
$$(".portfolio-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.02)";
    item.style.transition = "transform 0.3s ease";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
  });
});

// ===============================
// Service card hover (corrigido para voltar à cor original)
// (ideal: mover para CSS :hover depois)
// ===============================
const SERVICE_CARD_BG_DEFAULT = "#3f6083";
const SERVICE_CARD_BG_HOVER = "#5681ae";

$$(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = SERVICE_CARD_BG_HOVER;
    card.style.transition = "background-color 0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = SERVICE_CARD_BG_DEFAULT;
  });
});

// ===============================
// WhatsApp buttons (CTA + ebook + hero)
// ===============================
$$(".cta-button, .ebook-button").forEach((btn) => {
  btn.addEventListener("click", openWhatsApp);
});

const whatsappBtn = $(".whatsapp-btn");
if (whatsappBtn) whatsappBtn.addEventListener("click", openWhatsApp);

// ===============================
// Floating WhatsApp pulse animation
// (melhor: colocar @keyframes no CSS; aqui mantém em JS mas de forma segura)
// ===============================
const whatsappFloat = $(".whatsapp-float");

function ensurePulseKeyframes() {
  if ($("#pulse-keyframes")) return;

  const style = document.createElement("style");
  style.id = "pulse-keyframes";
  style.textContent = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(style);
}

if (whatsappFloat) {
  ensurePulseKeyframes();

  setInterval(() => {
    whatsappFloat.style.animation = "pulse 1s ease-in-out";
    setTimeout(() => {
      whatsappFloat.style.animation = "";
    }, 1000);
  }, 5000);
}
