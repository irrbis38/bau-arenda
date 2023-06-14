document.addEventListener("DOMContentLoaded", function () {
  const catalog = document.querySelector(".catalog");
  if (catalog) {
    initCatalog();
  }
});

// function - decorator
function debounce(callee, timeoutMs) {
  return function perform(...args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();

    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer);
    }

    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
}

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
    // get current inputs - min and max
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

    // get elements
    const filter_block = minInputRange.closest(".filters__block");
    const track = filter_block.querySelector(".filters__track");
    const min = filter_block.querySelector(".filters__valueMin");
    const max = filter_block.querySelector(".filters__valueMax");

    // convert values to number
    let minValue = parseInt(minInputRange.value);
    let maxValue = parseInt(maxInputRange.value);

    // minDifference is the minimum value by which min and max can converge
    let minDifference;

    if (maxInputRange.max - minInputRange.min <= 10) {
      minDifference = 1;
    } else if (maxInputRange.max - minInputRange.min <= 100) {
      minDifference = 3;
    } else {
      minDifference = 10;
    }

    // if the input cannot be moved further
    if (maxValue - minValue < minDifference) {
      if (isMinInputRange) {
        minInputRange.value = maxValue - minDifference;
      } else {
        maxInputRange.value = minValue + minDifference;
      }
    } else {
      // otherwise calculates the value of the  two curret inputs and displays their values
      min.textContent = `от ${minValue}`;
      max.textContent = `до ${maxValue}`;
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
    }
  }

  // add selected filter

  const filters_current_container = document.querySelector(".filters__current");

  filters_range_inputs.forEach((rangeInput) =>
    rangeInput.addEventListener("change", addNewFilter)
  );

  function addNewFilter(e) {
    const filters_block = e.target.closest(".filters__block");
    const filterName = filters_block.children[0].textContent;
    const filters_elements = Array.from(
      filters_current_container.querySelectorAll(".filters__elem")
    );
    const selectedFilter = filters_elements.find(
      (elem) => elem.dataset.filter === filterName
    );
    const isFilterExist = Boolean(selectedFilter);

    const valueMin = filters_block.children[2].children[0].textContent;
    const valueMax = filters_block.children[2].children[1].textContent;
    const title = `${filterName} ${valueMin} ${valueMax}`;

    if (!isFilterExist) {
      const newFilter = createNewFilter(title, filterName);
      filters_current_container.prepend(newFilter);
      filters_current_container.classList.add("active");
    } else {
      selectedFilter.textContent = title;
    }
  }

  function createNewFilter(title, filterName) {
    const filtersElem = document.createElement("div");
    filtersElem.classList.add("filters__elem");
    filtersElem.dataset.filter = filterName;
    filtersElem.innerHTML = `
    <span class="filters__elemText">${title}</span>
    <button class="filters__elemRemove">
      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.515625 1L9.51563 10M9.51563 1L0.515625 10" stroke="#E3E3E3" stroke-linejoin="round"></path>
      </svg>
    </button>
    `;
    return filtersElem;
  }
}
