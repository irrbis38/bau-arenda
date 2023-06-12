document.addEventListener("DOMContentLoaded", function () {
  const catalog = document.querySelector(".catalog");
  if (catalog) {
    initCatalog();
  }
});

// INIT CATALOG
function initCatalog() {
  // add listeners to catalog__categories
  const categories_titles = document.querySelectorAll(".categories__title");
  const categories_groups = document.querySelectorAll(".categories__group");

  categories_titles.forEach((title) =>
    title.addEventListener("click", (e) => {
      requestAnimationFrame(() => toggleCategoriesList(e));
    })
  );

  function toggleCategoriesList(e) {
    const title = e.target.closest(".categories__title");
    const group = title.closest(".categories__group");
    const list = title.nextElementSibling;
    const isGroupActive = group.classList.contains("active");

    if (isGroupActive) {
      group.classList.remove("active");
      list.style.maxHeight = null;
    } else {
      categories_groups.forEach((group) => {
        group.classList.remove("active");
        const list = group.children[1];
        list.style.maxHeight = null;
      });
      group.classList.add("active");
      list.style.maxHeight = list.scrollHeight + "px";
    }
  }
}
