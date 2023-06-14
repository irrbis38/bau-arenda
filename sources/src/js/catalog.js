document.addEventListener("DOMContentLoaded", function () {
  const catalog = document.querySelector(".catalog");
  if (catalog) {
    initCatalog();
  }
});

// INIT CATALOG
function initCatalog() {
  // handle accordions in catalog__categories
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

  // handle all input range in filters

  const filters_range_inputs = document.querySelectorAll(".filters__range");

  filters_range_inputs.forEach((rangeInput) =>
    rangeInput.addEventListener("input", rangeInputHandler)
  );

  function rangeInputHandler(e) {
    let minInputRange, maxInputRange;
    const isMinInputRange = e.target.classList.contains("filter__inputMin");
    const isMaxInputRange = e.target.classList.contains("filter__inputMax");
    if (isMinInputRange) {
      minInputRange = e.target;
      maxInputRange = minInputRange.nextElementSibling;
    } else if (isMaxInputRange) {
      maxInputRange = e.target;
      minInputRange = maxInputRange.previousElementSibling;
    }

    const filter_block = minInputRange.closest(".filters__block");
    const track = filter_block.querySelector(".filters__track");
    const min = filter_block.querySelector(".filters__valueMin span");
    const max = filter_block.querySelector(".filters__valueMax span");

    let minValue = parseInt(minInputRange.value);
    let maxValue = parseInt(maxInputRange.value);

    let minDifference;

    if (maxInputRange.max - minInputRange.min <= 10) {
      minDifference = 1;
    } else if (maxInputRange.max - minInputRange.min <= 100) {
      minDifference = 3;
    } else {
      minDifference = 10;
    }

    if (maxValue - minValue < minDifference) {
      if (isMinInputRange) {
        minInputRange.value = maxValue - minDifference;
      } else {
        maxInputRange.value = minValue + minDifference;
      }
    } else {
      min.textContent = minValue;
      max.textContent = maxValue;
      let left =
        ((minValue - minInputRange.min) * 100) /
          (minInputRange.max - minInputRange.min) +
        "%";
      let right =
        ((maxInputRange.max - maxValue) * 100) /
          (maxInputRange.max - maxInputRange.min) +
        "%";
      track.style.left = left;
      track.style.right = right;

      console.log("left: ", left);
      console.log("right: ", right);
    }
  }
}
