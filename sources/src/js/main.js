document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initHeaderSearch();
  initToTopButton();
  initToggleFeedbackField();
  initAnimationShowByScroll();

  const index__page = document.querySelector(".index__page");
  if (index__page) {
    initIndexPage();
  }
});

const body = document.body;
// INIT HEADER
function initHeader() {
  // HEADER

  const body = document.body;
  const header = document.querySelector(".header");
  const headerBurger = document.querySelector(".header__burger");
  const dropdownShow = Array.from(document.querySelectorAll(".dropdown_show"));

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
function initToTopButton() {
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

// INIT INDEX PAGE
function initIndexPage() {
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
