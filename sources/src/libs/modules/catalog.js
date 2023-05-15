document.addEventListener("DOMContentLoaded", function () {
  const catalog = document.querySelector(".catalog");
  if (catalog) {
    initCatalog();
  }
});

// INIT CATALOG
function initCatalog() {
  const catalog_categories = Array.from(
    document.querySelectorAll(".catalog__category")
  );
  const catalog_sort = document.querySelector(".catalog__sort");

  selectCategory();
  showCatalogSortList();
  hideCatalogSortList();
  selectSortOptions();

  // select catalog category
  function selectCategory() {
    catalog_categories.forEach((el) =>
      el.addEventListener("click", (e) => {
        const isActive = e.target.classList.contains("active");
        if (!isActive) {
          catalog_categories.forEach((item) => item.classList.remove("active"));
          e.target.classList.add("active");
        }
      })
    );
  }

  // show and hide catalog sort list by hover

  function showCatalogSortList() {
    catalog_sort.addEventListener("mouseenter", () => {
      catalog_sort.classList.add("active");
    });
  }

  function hideCatalogSortList() {
    catalog_sort.addEventListener("mouseleave", () => {
      catalog_sort.classList.remove("active");
    });
  }

  // hide catalog sort list by click category
  const catalog_sort_items = Array.from(
    document.querySelectorAll(".catalog__sort-item")
  );

  catalog_sort_items.forEach((item) =>
    item.addEventListener("click", () =>
      catalog_sort.classList.remove("active")
    )
  );

  // select sort-item
  function selectSortOptions() {
    const sortOptions = document.querySelectorAll(".catalog__sort-item");

    sortOptions.forEach((option) =>
      option.addEventListener("click", handleSelectSortOptions)
    );
  }

  function handleSelectSortOptions(event) {
    const sort_type = document.querySelector(".catalog__sort-type");
    const text = event.target.dataset.text;
    const type = event.target.dataset.type;
    if (sort_type.textContent !== text) {
      sort_type.textContent = text;
    }
  }
}
