// Простая логика для переключения вкладок
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

function showSection(id) {
  sections.forEach(sec => sec.classList.remove("active"));
  const section = document.querySelector(id);
  if (section) section.classList.add("active");
}

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");
    showSection(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// При загрузке показываем главную страницу
showSection("#home");
