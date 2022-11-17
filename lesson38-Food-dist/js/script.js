window.addEventListener("DOMContentLoaded", () => {
  //Tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((items) => {
      items.classList.add("hide");
      items.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //Timer

  const deadline = "2022-11-19";

  function getTimeRemaining(endtime) {
    //parsing from string & calculating
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)), //calc days
      hours = Math.floor(
        (t / (1000 * 60 * 60)) % 24, //cals hours
        (minutes = Math.floor((t / 1000 / 60) % 60)),
        (seconds = Math.floor((t / 1000) % 60))
      );

    //creating obj
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  // if t counter < 10  adds 0 to counter
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(".timer");
    (days = timer.querySelector("#days")),
      (hours = timer.querySelector("#hours")),
      (minutes = timer.querySelector("#minutes")),
      (seconds = timer.querySelector("#seconds")),
      (timeInterval = setInterval(updateClock, 1000)); //every 1s

    updateClock(); // prevent blink of loading page. Launching func before tInterval starts

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  //launching func w parameters
  setClock(".timer", deadline);

  //Modal
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  // open modal function
  function openModal() {
    // prevent modal from showing 2 times w/ timerId
    clearInterval(modalTimerId);
    modal.classList.add("show");
    modal.classList.remove("hide");
    // fix scroll when modal is open
    document.body.style.overflow = "hidden";
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  // close modal function
  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }
  // close modal on click outside of it
  modalCloseBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  //close modal on esc key
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  //Modal window show up after 5s time

  // const modalTimerId = setTimeout(openModal, 5000);

  //Modal window show up when user scrolled whole page w/ scroll height method. Remove event listener after showing modal

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);

  //Classes for Menu cards

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.exchange = 40;
      this.toUAH();
    }

    toUAH() {
      this.price = +this.price * this.exchange;
    }
    render() {
      const element = document.createElement("div");
      //add default value for classes to prevent issues
      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        //rest(lesson49)
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
      <img src=${this.src} alt=${this.alt}>
      <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr} - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</div>
          <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
      </div>
      `;
      // rendering element and append to the parent element
      this.parent.append(element);
    }
  }
  // Calling render on MenuCard object (no const - one time use) and passing props
  // card 1
  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container"
  ).render();

  //card 2
  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню "Премиум"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    19,
    ".menu .container"
  ).render();

  //card 3

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    11,
    ".menu .container"
  ).render();
});
