document.addEventListener("DOMContentLoaded", function (event) {
  // Your code here
});

window.onload = () => {
  // header menu

  const dropdownShow = Array.from(document.querySelectorAll(".dropdown_show"));
  // const dropdownMenu = document.querySelectorAll(".dropdown_menu");

  // BY HOVER

  function showDropdownList(event) {
    event.target.classList.add("active");
  }

  function hideDropdownList(event) {
    event.target.classList.remove("active");
  }

  // add event-listeners to all dropdown menues in header
  function addListenersToDropdownByHover() {
    dropdownShow.forEach((el) => {
      el.addEventListener("mouseenter", showDropdownList);
    });

    dropdownShow.forEach((el) => {
      el.addEventListener("mouseleave", hideDropdownList);
    });
  }

  // remove event-listeners to all dropdown menues in header

  function removeListenersToDropdownByHover() {
    dropdownShow.forEach((el) => {
      el.removeEventListener("mouseenter", showDropdownList);
    });

    dropdownShow.forEach((el) => {
      el.removeEventListener("mouseleave", hideDropdownList);
    });
  }

  // END BY HOVER

  // BY CLICK
  function toggleDropdownList(event) {
    event.preventDefault();

    const currentLink = event.target;
    const currentItem = currentLink.closest(".dropdown_show");
    const currentDropdownMenu = currentItem.children[1];
    if (currentItem.classList.contains("active")) {
      dropdownShow.forEach((el) => el.classList.remove("active"));
      currentDropdownMenu.style.maxHeight = 0;
    } else {
      dropdownShow.forEach((el) => el.classList.remove("active"));
      currentItem.classList.add("active");
      currentDropdownMenu.style.maxHeight =
        currentDropdownMenu.scrollHeight + "px";
    }
  }

  function addListenersToDropdownByClick() {
    dropdownShow.forEach((el) => {
      el.addEventListener("click", toggleDropdownList);
    });
  }

  function removeListenersToDropdownByClick() {
    dropdownShow.forEach((el) => {
      el.removeEventListener("click", toggleDropdownList);
    });
  }
  // END BY CLICK

  // add or remove event-listeners depend window.innerWidth
  if (window.innerWidth >= 1280) {
    addListenersToDropdownByHover();
  } else {
    addListenersToDropdownByClick();
  }

  const mq1280 = window.matchMedia("(min-width: 1280px)");
  const headerBurger = document.querySelector(".header__burger");
  // const burgerNav = document.querySelector(".burger__nav");

  mq1280.addEventListener("change", handleMQ);

  function handleMQ(e) {
    if (e.matches) {
      addListenersToDropdownByHover();
      removeListenersToDropdownByClick();
      header.classList.remove("header__fixed");
      headerBurger.classList.remove("active");
      body.classList.remove("lock");

      // set dropdown menu to default
      dropdownShow.forEach((el) => {
        el.classList.remove("active");
        el.children[1].style.maxHeight = 0;
      });
    } else {
      removeListenersToDropdownByHover();
      addListenersToDropdownByClick();
    }
  }

  // ===== БУРГЕР_МЕНЮ

  headerBurger.addEventListener("click", () => {
    header.classList.toggle("header__fixed");
    headerBurger.classList.toggle("active");
    body.classList.toggle("lock");
    // set dropdown menu to default
    dropdownShow.forEach((el) => {
      el.classList.remove("active");
      el.children[1].style.maxHeight = 0;
    });
  });

  // intro slider

  const introSlider = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".intro__next",
      prevEl: ".intro__prev",
    },
  });

  // reviews slider

  const reviewsSlider = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev",
    },
    pagination: {
      el: ".reviews__pagination",
      type: "bullets",
      bulletClass: "reviews__dot",
      bulletActiveClass: "reviews__dot-active",
      clickable: "true",
    },
  });

  // to top button

  const fixedBlock = document.querySelector(".fixed");
  const toTopButton = document.querySelector(".fixed__toTop");
  const header = document.querySelector(".header");
  const intro = document.querySelector(".intro");

  let startHeight = header.offsetHeight + intro.offsetHeight;

  window.addEventListener("scroll", function () {
    if (this.scrollY > startHeight) {
      fixedBlock.classList.add("show");
    } else {
      fixedBlock.classList.remove("show");
    }
  });

  toTopButton.addEventListener("click", () => {
    const scrollTarget = document.getElementById("top");
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: "smooth",
    });
  });

  // show / hide feedback field

  const body = document.querySelector("body");
  const fixedShowField = document.querySelector(".fixed__showField");
  const fixedFeedback = document.querySelector(".fixed__feedback");
  const fixedBG = document.querySelector(".fixed__bg");
  const fixedClose = document.querySelector(".fixed__close");

  fixedShowField.addEventListener("click", () => {
    body.classList.add("lock");
    fixedFeedback.classList.add("active");
    fixedBG.classList.add("active");
  });

  fixedClose.addEventListener("click", () => {
    body.classList.remove("lock");
    fixedFeedback.classList.remove("active");
    fixedBG.classList.remove("active");
  });

  // show by scroll

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }

  let options = {
    threshold: [0.5],
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".element-animation");

  for (let elem of elements) {
    observer.observe(elem);
  }

  //===== ПОИСК

  // Показ / скрытие окна поиска

  const headerSearch = document.querySelector(".header__search");
  const headerSearchSmall = document.querySelector(".header__search-small");
  const headerSearchFrame = document.querySelector(".header__search-frame");
  const headerSearchCloser = document.querySelector(".header__search-closer");
  const headerSearchInput = document.querySelector(".header__search-input");

  const openHeaderSearch = () => {
    headerSearchFrame.classList.add("active");
    body.classList.add("lock");
    header.classList.remove("header__fixed");
    headerBurger.classList.remove("active");
    body.classList.remove("lock");

    // set dropdown menu to default
    dropdownShow.forEach((el) => {
      el.classList.remove("active");
      el.children[1].style.maxHeight = 0;
    });

    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        closeHeaderSearch();
      }
    });
  };

  const closeHeaderSearch = () => {
    headerSearchFrame.classList.remove("active");
    body.classList.remove("lock");
    headerSearchInput.value = "";
    headerBurger.classList.remove("active");
    // burgerNav.classList.remove("active");
  };

  headerSearch.addEventListener("click", openHeaderSearch);

  headerSearchSmall.addEventListener("click", openHeaderSearch);

  headerSearchCloser.addEventListener("click", closeHeaderSearch);

  // Переключение категории поиска

  const headerSearchCategories = document.querySelectorAll(
    ".header__search-category"
  );

  headerSearchCategories.forEach((el) => {
    el.addEventListener("click", () => {
      if (!el.classList.contains("active")) {
        headerSearchCategories.forEach((elem) => {
          elem.classList.remove("active");
        });
        el.classList.add("active");
      }
    });
  });

  // скриншот отзыва на весь экран

  const reviewsImages = document.querySelectorAll(".reviews__preview");
  const reviewsFullscreen = document.querySelector(".reviews__fullscreen");
  const reviewsFullscreenImg = document.querySelector(
    ".reviews__fullscreen-img"
  );

  const reviewsFullscreenEscape = (e) => {
    if ((e.code = "Escape")) {
      reviewsFullscreen.classList.remove("active");
      body.classList.remove("lock");
      window.removeEventListener("keydown", reviewsFullscreenEscape);
    }
  };

  reviewsImages.forEach((el) => {
    el.addEventListener("click", (e) => {
      let elem = e.target.closest(".reviews__preview");
      let src = elem.firstElementChild.firstElementChild.getAttribute("src");
      reviewsFullscreenImg.setAttribute("src", src);
      reviewsFullscreen.classList.add("active");
      body.classList.add("lock");

      window.addEventListener("keydown", reviewsFullscreenEscape);
    });
  });

  reviewsFullscreen.addEventListener("click", (e) => {
    if (!e.target.classList.contains("reviews__fullscreen-img")) {
      reviewsFullscreen.classList.remove("active");
      body.classList.remove("lock");
    }
  });
};

// ===== ФОРМЫ

// Отправка форм, расположеных на странице

const allVisibleForms = document.querySelectorAll(".feedback__form");

allVisibleForms.forEach((el) => {
  el.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!el.elements.name.validity.valid && !el.elements.phone.validity.valid) {
      el.firstElementChild.classList.add("show");
      el.children[1].classList.add("error");
      el.children[2].classList.add("error");
    } else if (!el.elements.name.validity.valid) {
      el.firstElementChild.classList.add("show");
      el.children[1].classList.add("error");
    } else if (!el.elements.phone.validity.valid) {
      el.firstElementChild.classList.add("show");
      el.children[2].classList.add("error");
    } else {
      let formData = new FormData(el);
      el.reset();
      el.innerHTML = "";
      el.previousElementSibling.textContent =
        "Спасибо, ваша заявка отправлена. Наш менеджер свяжется с вами в ближайшее время!";
    }
  });
});

// Отправка формы из всплывающего окна

const fixedForm = document.querySelector(".fixed__form");

fixedForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !fixedForm.elements.name.validity.valid &&
    !fixedForm.elements.phone.validity.valid
  ) {
    fixedForm.firstElementChild.classList.add("show");
    fixedForm.children[1].classList.add("error");
    fixedForm.children[2].classList.add("error");
  } else if (!fixedForm.elements.name.validity.valid) {
    fixedForm.firstElementChild.classList.add("show");
    fixedForm.children[1].classList.add("error");
  } else if (!fixedForm.elements.phone.validity.valid) {
    fixedForm.firstElementChild.classList.add("show");
    fixedForm.children[2].classList.add("error");
  } else {
    let formData = new FormData(fixedForm);
    fixedForm.reset();
    fixedForm.innerHTML = `<p class="fixed__after">Спасибо, ваша заявка отправлена.<br>Наш менеджер свяжется с вами в ближайшее время!</p><input type="submit" class="fixed__submit btn__yellow btn__link" value="Отправить" name="submit">`;
  }
});

// Очистка сообщений об ошибке при фокусе на input

const feedbackNameAll = document.querySelectorAll(".feedback__name");
const feedbackPhoneAll = document.querySelectorAll(".feedback__phone");

const removeOnFocus = (el) => {
  el.addEventListener("input", (e) => {
    el.parentElement.classList.remove("error");
    el.parentElement.parentElement.children[0].classList.remove("show");
  });
};

feedbackNameAll.forEach(removeOnFocus);
feedbackPhoneAll.forEach(removeOnFocus);

// КАТАЛОГ

const catalogWrapper = document.querySelector(".catalog__wrapper");
let counter = 0;

// Содержимое каталога

let data = {
  // Экскаваторы-погрузчики
  excavator: [
    {
      imgName: "1.jpg",
      header: "Аренда экскаваторов CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 150,
      popularity: 1,
    },
    {
      imgName: "1.jpg",
      header: "Аренда экскаваторов CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 200,
      popularity: 1,
    },
    {
      imgName: "1.jpg",
      header: "Аренда экскаваторов CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 130,
      popularity: 2,
    },
    {
      imgName: "1.jpg",
      header: "Аренда экскаваторов CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Самосвалы
  tipper: [
    {
      imgName: "2.jpg",
      header: "Аренда самосвалов CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 150,
      popularity: 1,
    },
    {
      imgName: "2.jpg",
      header: "Аренда самосвалов CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 2,
    },
  ],
  // Бульдозеры
  dozer: [
    {
      imgName: "3.jpg",
      header: "Аренда бульдозеров CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Гусеничные экскаваторы
  digger: [
    {
      imgName: "4.jpg",
      header: "Аренда экскаваторов CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Погрузчик
  loader: [
    {
      imgName: "5.jpg",
      header: "Аренда погрузчиков CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Фронтальный погрузчик
  fLoader: [
    {
      imgName: "6.jpg",
      header: "Аренда фронтальных погрузчиков CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Колесный экскаватор
  wheelDigger: [
    {
      imgName: "7.jpg",
      header: "Аренда колёсных экскаваторов CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Тралы и низкорамные площадки
  flail: [
    {
      imgName: "8.jpg",
      header: "Аренда тралов CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Грунтовой каток
  truck: [
    {
      imgName: "9.jpg",
      header: "Аренда грунтовых катков CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Автокран
  crane: [
    {
      imgName: "10.jpg",
      header: "Аренда автокранов CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Автогрейдер
  grader: [
    {
      imgName: "11.jpg",
      header: "Аренда автогрейдеров CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Телескопический погрузчик
  telescopicLoader: [
    {
      imgName: "12.jpg",
      header: "Аренда телескопических погрузчиков CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Мини-техника
  mini: [
    {
      imgName: "13.jpg",
      header: "Аренда мини-техники CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Гидромолоты
  hydraulicHammer: [
    {
      imgName: "14.jpg",
      header: "Аренда гидромолотов CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 1,
    },
  ],
  // Буровая техника
  drillingEquipment: [
    {
      imgName: "15.jpg",
      header: "Аренда буровой техники CATERPILLAR",
      name1: "Объём фронтального ковша",
      value1: "1,3 м3",
      name2: "Высота выгрузки",
      value2: "2690 мм",
      name3: "Мощность двигателя",
      value3: "100 л.с.",
      price: 100,
      popularity: 2,
    },
  ],
};

// Создание карточки каталога

const createElement = (arr) => {
  let catalogItem = [];

  for (let i = 0; i < arr.length; i++) {
    catalogItem[i] = document.createElement("DIV");
    catalogItem[i].classList.add("catalog__item");
    catalogItem[i].innerHTML = `<a href="#" class="catalog__link"></a>

    <div class="catalog__img">
      <img src="./images/catalog/${arr[i].imgName}" alt="экскаватор" />
    </div>

    <a href="#" class="catalog__button">Подробнее</a>

    <div class="catalog__info">
      <h4 class="catalog__header">${arr[i].header}</h4>

      <div class="catalog__options">
        <div class="catalog__feature">
          <p class="catalog__name">${arr[i].name1}</p>
          <p class="catalog__value">${arr[i].value1}</p>
        </div>

        <div class="catalog__feature">
          <p class="catalog__name">${arr[i].name2}</p>
          <p class="catalog__value">${arr[i].value2}</p>
        </div>

        <div class="catalog__feature">
          <p class="catalog__name">${arr[i].name3}</p>
          <p class="catalog__value">${arr[i].value3}</p>
        </div>
      </div>

      <p class="catalog__price">${arr[i].price} BYN</p>
    </div>`;
  }

  return catalogItem;
};

// выбор всех категории каталога

const concatAllCategories = (tech) => {
  let union = [];
  for (let key in tech) {
    union = [...union, ...tech[key]];
  }
  return union;
};

// переключение категории

const switchCategory = (name, tech) => {
  let cat = [];
  if (name in tech) {
    cat = [...tech[name]];
  } else {
    cat = concatAllCategories(tech);
  }
  return cat;
};

// создание и инициализация стартовой категории каталога
let category = "all";
let catalog = createElement(switchCategory(category, data));

const catalolgCategories = document.querySelectorAll(".catalog__category");

// сортировка категорий

const compareMin = (a, b) => {
  if (a.price > b.price) return 1;
  if (a.price == b.price) return 0;
  if (a.price < b.price) return -1;
};

const compareMax = (a, b) => {
  if (a.price < b.price) return 1;
  if (a.price == b.price) return 0;
  if (a.price > b.price) return -1;
};

const sortByPopularity = (a, b) => {
  if (a.popularity < b.popularity) return 1;
  if (a.popularity == b.popularity) return 0;
  if (a.popularity > b.popularity) return -1;
};

const sortCatalog = (tech, type) => {
  if (type === "fromMaxToMin") {
    return tech.sort(compareMax);
  } else if (type === "fromMinToMax") {
    return tech.sort(compareMin);
  } else if (type === "popularity") {
    return tech.sort(sortByPopularity);
  } else {
    return switchCategory(category, data);
  }
};

// работа меню для выбора типа сортировки

const catalogSort = document.querySelector(".catalog__sort");
const catalogSortList = document.querySelector(".catalog__sort-list");
const catalogSortItems = document.querySelectorAll(".catalog__sort-item");
const catalogSortType = document.querySelector(".catalog__sort-type");
let sortingType = "start";

const hideCatalogSortList = () => {
  catalogSortList.classList.remove("active");
};

catalogSort.addEventListener("click", () => {
  catalogSortList.classList.add("active");
});

window.addEventListener("click", (e) => {
  if (
    !e.target.matches(".catalog__sort") &&
    !e.target.matches(".catalog__sort-list") &&
    !e.target.matches(".catalog__sort-type") &&
    !e.target.matches(".catalog__arrow")
  ) {
    hideCatalogSortList();
  }
});

catalogSortItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    catalogSortType.textContent = e.target.dataset.text;

    if (sortingType === e.target.dataset.type) {
      hideCatalogSortList();
    } else {
      sortingType = e.target.dataset.type;
      hideCatalogSortList();

      counter = 0;
      catalogWrapper.innerHTML = "";
      catalog = createElement(
        sortCatalog(switchCategory(category, data), sortingType)
      );
      addToPage(catalog);
    }
  });
});

// отображение при переключении категорий

catalolgCategories.forEach((el) => {
  el.addEventListener("click", (e) => {
    catalolgCategories.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");

    if (category === e.target.dataset.type) {
      return;
    } else {
      category = e.target.dataset.type;

      counter = 0;
      catalogWrapper.innerHTML = "";
      catalog = createElement(
        sortCatalog(switchCategory(category, data), sortingType)
      );
      addToPage(catalog);
    }
  });
});

// изменение количества карточек при ресайзе экрана

let cardsAmout = 16;

window.addEventListener("resize", () => {
  document.documentElement.clientWidth > 1279
    ? (cardsAmout = 16)
    : (cardsAmout = 12);
});

// отрисовка каталога

const addToPage = (sortedItems) => {
  for (let i = counter; i < counter + cardsAmout; i++) {
    if (sortedItems[i] !== undefined) {
      catalogWrapper.append(sortedItems[i]);
    }
  }
  counter += cardsAmout;
};

// работа кнопки "показать больше"

const catalogMore = document.querySelector(".catalog__more");
catalogMore.addEventListener("click", () => {
  addToPage(catalog);
});

// первоначальное отображение каталога

window.addEventListener("load", () => {
  document.documentElement.clientWidth > 1279
    ? (cardsAmout = 16)
    : (cardsAmout = 12);
  addToPage(createElement(switchCategory(category, data)));
});
