document.addEventListener("DOMContentLoaded", function () {
  initHeader();
  initHeaderSearch();
  const fixedShowField = document.querySelector(".fixed__showField");
  if (fixedShowField) {
    initToggleFeedbackField(fixedShowField);
  }
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

  // init catalog page
  const catalog_page = document.querySelector(".catalog__page");
  if (catalog_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
    const showFixedFeedbackButton = document.querySelector(".rental__button");
    if (showFixedFeedbackButton) {
      initToggleFeedbackField(showFixedFeedbackButton);
    }
  }

  // init catalog-item page
  const catalog_item_page = document.querySelector(".catalog-item-page");
  if (catalog_item_page) {
    const view = document.querySelector(".view");
    initToTopButton(view);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
    initViewSlider();
    initDetailsTabs();
    initBookFormValidation();
    initYoutubeVideo();
    const showFixedFeedbackButton = document.querySelector(".rental__button");
    if (showFixedFeedbackButton) {
      initToggleFeedbackField(showFixedFeedbackButton);
    }
  }

  // init prices page
  const prices_page = document.querySelector(".prices__page");
  if (prices_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
  }

  // init news page
  const news_page = document.querySelector(".news__page");
  if (news_page) {
    const news_title = document.querySelector(".news__title");
    initToTopButton(news_title);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
  }

  // init news-item page
  const news_item_page = document.querySelector(".news-item");
  if (news_item_page) {
    const news_item_title = document.querySelector(".news-item__title");
    initToTopButton(news_item_title);
    initForms();
    initSmothScroll();
  }

  // init rental page
  const rental_page = document.querySelector(".rental__page");
  if (rental_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
    initQAaccordion();
    initYoutubeVideo();
    const showFixedFeedbackButton = document.querySelector(".rental__button");
    if (showFixedFeedbackButton) {
      initToggleFeedbackField(showFixedFeedbackButton);
    }
  }

  // init services-list page
  const services_list_page = document.querySelector(".services-list__page");
  if (services_list_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
    const showFixedFeedbackButton = document.querySelector(".rental__button");
    if (showFixedFeedbackButton) {
      initToggleFeedbackField(showFixedFeedbackButton);
    }
  }

  // init services-item page
  const services_item_page = document.querySelector(".services-item__page");
  if (services_item_page) {
    const first = document.querySelector(".first");
    initToTopButton(first);
    initReviewsSlider();
    initReviewsFullScreen();
    initForms();
    initQAaccordion();
    const showFixedFeedbackButton = document.querySelector(".rental__button");
    if (showFixedFeedbackButton) {
      initToggleFeedbackField(showFixedFeedbackButton);
    }
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
function initToggleFeedbackField(showFixedButton) {
  // show / hide feedback field

  const body = document.querySelector("body");
  const fixedFeedback = document.querySelector(".fixed__feedback");
  const fixedBG = document.querySelector(".fixed__bg");
  const fixedClose = document.querySelector(".fixed__close");

  showFixedButton.addEventListener("click", () => {
    body.classList.add("lock");
    fixedFeedback.classList.add("active");
    fixedBG.classList.add("active");
  });

  [fixedClose, fixedBG].forEach((el) =>
    el.addEventListener("click", closeFeedbackHandler)
  );

  function closeFeedbackHandler() {
    body.classList.remove("lock");
    fixedFeedback.classList.remove("active");
    fixedBG.classList.remove("active");
  }
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
  const mark_link =
    document.querySelector(".template__link").textContent +
    "/contacts/mark.svg";
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
        iconImageHref: mark_link,
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

// lazyLoading video from youtube

function initYoutubeVideo() {
  // get all video elements on the page
  const videos = document.querySelectorAll(".video__block");

  // generate video url
  const generateUrl = (id) => {
    const query = "?rel=0&showinfo=0&autoplay=1";
    return "https://www.youtube.com/embed/" + id + query;
  };

  // create iframe element
  const createIframe = (id) => {
    const iframe = document.createElement("iframe");
    iframe.classList.add("video__iframe");
    iframe.setAttribute("src", generateUrl(id));
    iframe.setAttribute("title", "YouTube video player");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
    );

    return iframe;
  };

  // handling each video element
  videos.forEach((el) => {
    const videoHref = el.dataset.video;
    const deletedLength = "https://youtu.be/".length;

    const videoId = videoHref.substring(deletedLength, videoHref.length);

    const img = el.querySelector("img");

    const youtubeImgSrc =
      "https://i.ytimg.com/vi/" + videoId + "/maxresdefault.jpg";

    img.setAttribute("src", youtubeImgSrc);

    el.addEventListener("click", (e) => {
      e.preventDefault();

      let iframe = createIframe(videoId);
      el.querySelector("img").remove();
      el.querySelector("button").remove();
      el.append(iframe);
    });
  });
}

// ========= CATALOG-ITEM PAGE

function initViewSlider() {
  // view slider
  const viewSlider = new Swiper(".view__slider", {
    loop: false,
    spaceBetween: 10,
    grabCursor: true,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      480: {
        spaceBetween: 10,
        slidesPerView: 3,
      },
      576: {
        spaceBetween: 10,
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  });

  const viewSliderFullsize = new Swiper(".view__fullsize", {
    effect: "fade",
    navigation: {
      nextEl: ".view__next",
      prevEl: ".view__prev",
    },
    thumbs: {
      swiper: viewSlider,
    },
  });
}

function initDetailsTabs() {
  // get all buttons and tabs
  const buttons = Array.from(document.querySelectorAll(".description__button"));
  const tabs_items = Array.from(
    document.querySelectorAll(".description__item")
  );

  // add listener to every button
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      const isActiveButton = btn.classList.contains("active");

      if (!isActiveButton) {
        // get index of selected button
        const indexButton = buttons.indexOf(btn);

        requestAnimationFrame(() => {
          // reset all the button and tabs
          buttons.forEach((btn) => btn.classList.remove("active"));
          tabs_items.forEach((item) => item.classList.remove("show"));

          // set classes to selected button and tab
          buttons[indexButton].classList.add("active");
          tabs_items[indexButton].classList.add("show");
        });
      }
    })
  );
}

function initBookFormValidation() {
  const form = document.querySelector(".book__form");
  const input_container = document.querySelector(".book__item");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.elements.phone.validity.valid) {
      input_container.classList.add("error");
    } else {
      const formData = new FormData(form);
      form.reset();
    }
  });

  input_container.children[1].addEventListener("input", () => {
    input_container.classList.remove("error");
  });
}

function initSmothScroll() {
  const news_links = Array.from(
    document.querySelectorAll(".news-item__list li a")
  );
  const news_blocks = Array.from(
    document.querySelectorAll(".news-item__block")
  );

  news_links.forEach((link) => link.addEventListener("click", handleNewsLinks));

  function handleNewsLinks(e) {
    e.preventDefault();
    const index = news_links.indexOf(e.target);
    const scrollTarget = news_blocks[index];

    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: "smooth",
    });
  }
}
