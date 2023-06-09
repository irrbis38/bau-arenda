document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initHeaderSearch();
  initToggleFeedbackField();
  initAnimationShowByScroll();

  // init index page
  const index_page = document.querySelector(".index__page");
  if (index_page) {
    const intro = document.querySelector(".intro");

    initIndexPageIntroSlider();
    initToTopButton(intro);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
  }

  // init our_partners page
  const our_partners_page = document.querySelector(".our-partners__page");
  if (our_partners_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
  }

  // init qa page
  const qa_page = document.querySelector(".qa__page");
  if (qa_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
    initQAaccordion();
  }

  // init our_clients page
  const our_clients_page = document.querySelector(".our-clients__page");
  if (our_clients_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
  }

  // init reviews page
  const reviews_page = document.querySelector(".reviews__page");
  if (reviews_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsFullScreen();
    initForms();
  }

  // init contacts page
  const contacts_page = document.querySelector(".contacts__page");
  if (contacts_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
    initMap();
  }

  // init company page
  const company_page = document.querySelector(".company__page");
  if (company_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
  }

  // init hotline page
  const hotline_page = document.querySelector(".hotline__page");
  if (hotline_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
  }

  // init jobs page
  const jobs_page = document.querySelector(".jobs__page");
  if (jobs_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
  }

  // init licenses page
  const licenses_page = document.querySelector(".licenses__page");
  if (licenses_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
  }

  // init promotioins page
  const promotions_page = document.querySelector(".promotions__page");
  if (promotions_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
  }

  // init warranties page
  const warranties_page = document.querySelector(".warranties__page");
  if (warranties_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
  }
});

const body = document.body;
// INIT HEADER
function initHeader() {
  // HEADER

  const body = document.body;
  const header = document.querySelector(".header");
  const headerBurger = document.querySelector(".header__burger");
  const dropdownShow = Array.from(
    document.querySelectorAll(".menu-item-has-children")
  );

  // DROPDOWN BY HOVER

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

  // DROPDOWN BY CLICK

  function toggleDropdownList(event) {
    const currentLink = event.target;
    const currentItem = currentLink.closest(".menu-item-has-children");
    const isActive = currentItem.classList.contains("active");

    if (!isActive) {
      event.preventDefault();
    }

    const currentDropdownMenu = currentItem.children[1];
    const allDropdownMenus = document.querySelectorAll(
      ".menu-item-has-children > .sub-menu"
    );
    if (currentItem.classList.contains("active")) {
      dropdownShow.forEach((el) => el.classList.remove("active"));
      currentDropdownMenu.style.maxHeight = 0;
    } else {
      dropdownShow.forEach((el) => el.classList.remove("active"));
      allDropdownMenus.forEach((el) => (el.style.maxHeight = 0));
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
        // el.children[1].style.maxHeight = 0;
        el.children[1].style.maxHeight =
          el.children[1].scrollHeight + 35 + "px";
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
}

// INIT HEADER SEARCH
function initHeaderSearch() {
  //===== SEARCH

  // Show / hide search window

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
}

// INIT TO TOP BUTTOP
function initToTopButton(first_block) {
  // to top button
  const fixedBlock = document.querySelector(".fixed");
  const toTopButton = document.querySelector(".fixed__toTop");
  const header = document.querySelector(".header");

  let startHeight = header.offsetHeight + first_block.offsetHeight;

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
}

// INIT TOGGLE FEEDBACK FIELD
function initToggleFeedbackField() {
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
}

// INIT ANIMATION BY SCROLL
function initAnimationShowByScroll() {
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
  let elements = Array.from(document.querySelectorAll(".element-animation"));

  if (elements.length > 0) {
    for (let elem of elements) {
      observer.observe(elem);
    }
  }
}

// intro slider
function initIndexPageIntroSlider() {
  const introSlider = new Swiper(".intro__slider", {
    loop: true,
    navigation: {
      nextEl: ".intro__next",
      prevEl: ".intro__prev",
    },
  });
}

function initReviewsSlider() {
  // reviews slider
  const reviewsSlider = new Swiper(".reviews__slider", {
    loop: false,
    spaceBetween: 20,
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
}

function initReviewsFullScreen() {
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
}

function initForms() {
  // ===== ФОРМЫ

  // Отправка форм, расположеных на странице

  const allVisibleForms = document.querySelectorAll(".feedback__form");

  allVisibleForms.forEach((el) => {
    el.addEventListener("submit", (e) => {
      e.preventDefault();
      if (
        !el.elements.name.validity.valid &&
        !el.elements.phone.validity.valid
      ) {
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
}

// question/answer accordion

function initQAaccordion() {
  const qa_items = document.querySelectorAll(".qa__item");
  const qa_headings = document.querySelectorAll(".qa__heading");

  qa_headings.forEach((item) =>
    item.addEventListener("click", handleAccordionClick)
  );

  function handleAccordionClick(e) {
    const target = e.target;
    const qa_item = target.closest(".qa__item");
    const qa_info = qa_item.children[1];
    const isActive = qa_item.classList.contains("active");
    if (isActive) {
      qa_item.classList.remove("active");
      qa_info.style.maxHeight = null;
    } else {
      qa_items.forEach((item) => {
        item.classList.remove("active");
        item.children[1].style.maxHeight = null;
      });
      qa_item.classList.add("active");
      qa_info.style.maxHeight = qa_info.scrollHeight + "px";
    }

    window.addEventListener("resize", () => {
      qa_items.forEach((item) => {
        item.classList.remove("active");
        item.children[1].style.maxHeight = null;
      });
    });
  }
}

// INIT MAP ON CONTACTS PAGE

function initMap() {
  function init() {
    let center = [53.94869157061366, 27.61157049999995];
    let map = new ymaps.Map("contactsMap", {
      center: center,
      zoom: 16,
    });

    let mark = new ymaps.Placemark(
      center,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./../images/contacts/mark.svg",
        iconImageSize: [24, 32],
        iconImageOffset: [-5, -30],
      }
    );

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    //map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    map.geoObjects.add(mark);
  }
  ymaps.ready(init);
}
