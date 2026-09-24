const menu = document.getElementById("menu");
const links = document.getElementById("links");
if (menu && links) {
  menu.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
}
const form = document.getElementById("form");
const ok = document.getElementById("ok");
if (form && ok) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    ok.style.display = "block";
    form.reset();
  });
}
