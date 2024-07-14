function buttons() {
  let index = 0;
  const prevBtn = document.getElementById("navPrevBtn");
  const nextBtn = document.getElementById("navNextBtn");
  const mobileWidth = window.innerWidth <= 720;
  const nav = document.querySelector("nav.nav");
  const article = document.querySelector(".article");
  const updateSlides = (direction) => {
    const { title, text, link, backgroundImageDesktop, backgroundImageMobile } =
      slides[index];
    const newImg = document.createElement("img");
    newImg.className = "nav__background-image new-slide";
    newImg.alt = "Navigation background image";
    newImg.src = mobileWidth ? backgroundImageMobile : backgroundImageDesktop;
    const newDiv = document.createElement("div");
    newDiv.className = "article__div new-slide";
    newDiv.innerHTML = `
      <h1 class="article__title">${title}</h1>
      <p class="article__text">${text}</p>
      <a href="#" class="article__link">${link}</a>
    `;
    const currentImg = nav.querySelector(".nav__background-image");
    const currentDiv = article.querySelector(".article__div");
    const slideIn = direction === "next" ? "100%" : "-100%";
    const slideOut = direction === "next" ? "-100%" : "100%";
    newImg.style.transform = `translateX(${slideIn})`;
    newDiv.style.transform = `translateX(${slideIn})`;
    nav.appendChild(newImg);
    article.appendChild(newDiv);
    void article.offsetWidth;
    currentImg.style.transform = `translateX(${slideOut})`;
    currentDiv.style.transform = `translateX(${slideOut})`;
    newImg.style.transform = "translateX(0)";
    newDiv.style.transform = "translateX(0)";
    setTimeout(() => {
      nav.removeChild(currentImg);
      article.removeChild(currentDiv);
      newImg.classList.remove("new-slide");
      newDiv.classList.remove("new-slide");
    }, 500);
  };
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlides("prev");
    });
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateSlides("next");
    });
  }
}

function mobileMenu() {
  const navBtn = document.getElementById("navBtn");
  const navDialog = document.getElementById("navDialog");
  const navCloseBtn = document.getElementById("navCloseBtn");
  if (navBtn && navCloseBtn) {
    navBtn.addEventListener("click", () => {
      navDialog.classList.toggle("nav__dialog--active");
    });
    navCloseBtn.addEventListener("click", () => {
      navDialog.classList.remove("nav__dialog--active");
    });
  }
}

const slides = [
  {
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    link: "Shop now",
    backgroundImageDesktop: "./SCSS/images/desktop-image-hero-1.jpg",
    backgroundImageMobile: "./SCSS/images/mobile-image-hero-1.jpg",
  },
  {
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    link: "Shop now",
    backgroundImageDesktop: "./SCSS/images/desktop-image-hero-2.jpg",
    backgroundImageMobile: "./SCSS/images/mobile-image-hero-2.jpg",
  },
  {
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    link: "Shop now",
    backgroundImageDesktop: "./SCSS/images/desktop-image-hero-3.jpg",
    backgroundImageMobile: "./SCSS/images/mobile-image-hero-3.jpg",
  },
];

function desktopMobile() {
  const width = window.innerWidth;
  if (width >= 720) {
    desktop();
  } else {
    mobile();
  }
  buttons();
  mobileMenu();
}

window.addEventListener("resize", desktopMobile);
window.addEventListener("DOMContentLoaded", desktopMobile);

function mobile() {
  const main = document.querySelector("main");
  const { title, text, link } = slides[0];
  main.innerHTML = `
    <nav class="nav">
      <img
        class="nav__background-image"
        src="./SCSS/images/mobile-image-hero-1.jpg"
        alt="Navigation background image"
      />
      <div class="nav__div">
        <button class="nav__toggle-button" id="navBtn">
          <img
            class="nav__toggle-icon"
            src="./images/icon-hamburger.svg"
            alt="Open menu"
          />
        </button>
        <img class="nav__logo" src="./images/logo.svg" alt="Room Logo" />
      </div>
      <dialog class="nav__dialog" id="navDialog">
        <button class="nav__close-button" id="navCloseBtn">
          <img
            class="nav__close-icon"
            src="./images/icon-close.svg"
            alt="Close menu"
          />
        </button>
        <ul class="nav__list">
          <li class="nav__item"><a class="nav__link" href="#">Home</a></li>
          <li class="nav__item"><a class="nav__link" href="#">Shop</a></li>
          <li class="nav__item"><a class="nav__link" href="#">About</a></li>
          <li class="nav__item"><a class="nav__link" href="#">Contact</a></li>
        </ul>
      </dialog>
      <div class="nav__buttons">
        <button class="nav__prev-button" id="navPrevBtn">
          <img
            class="nav__prev-icon"
            src="./images/icon-angle-left.svg"
            alt="Previous"
          />
        </button>
        <button class="nav__next-button" id="navNextBtn">
          <img
            class="nav__next-icon"
            src="./images/icon-angle-right.svg"
            alt="Next"
          />
        </button>
      </div>
    </nav>
    <article class="article">
      <div class="article__div">
      <h1 class="article__title">${title}</h1>
      <p class="article__text">
        ${text}
      </p>
      <a class="article__link" href="#">${link}</a>
    </article>
    <img
      class="image image--about-dark"
      src="./images/image-about-dark.jpg"
      alt="About dark"
    />
    </div>
    <article class="article">
      <h2 class="article__subtitle">About our furniture</h2>
      <p class="article__text">
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best expresses your interests and what inspires you. Find the
        furniture pieces you need, from traditional to contemporary styles or
        anything in between. Product specialists are available to help you
        create your dream space.
      </p>
    </article>
    <img
      class="image image--about-light"
      src="./images/image-about-light.jpg"
      alt="About light"
    />
  `;
}

function desktop() {
  const main = document.querySelector("main");
  const { title, text, link } = slides[0];
  main.innerHTML = `
    <section class="content">
      <nav class="content__nav nav">
        <img
          class="nav__background-image"
          src="./SCSS/images/desktop-image-hero-1.jpg"
          alt="Navigation background image"
        />
        <div class="nav__div">
          <img class="nav__logo" src="./images/logo.svg" alt="Logo">
          <ul class="nav__list">
            <li class="nav__item"><a class="nav__link" href="#">Home</a></li>
            <li class="nav__item"><a class="nav__link" href="#">Shop</a></li>
            <li class="nav__item"><a class="nav__link" href="#">About</a></li>
            <li class="nav__item"><a class="nav__link" href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <article class="content__article article">
        <h1 class="article__title">${title}</h1>
        <p class="article__text">
          ${text}
        </p>
        <a class="article__link" href="#">${link}</a>
        <div class="article__buttons">
          <button class="article__button article__button--prev" id="navPrevBtn">
            <img
              class="article__icon article__icon--prev"
              src="./images/icon-angle-left.svg"
              alt="Previous"
            />
          </button>
          <button class="article__button article__button--next" id="navNextBtn">
            <img
              class="article__icon article__icon--next"
              src="./images/icon-angle-right.svg"
              alt="Next"
            />
          </button>
        </div>
      </article>
    </section>
    <section class="about">
      <img
        class="about__image about__image--dark"
        src="./images/image-about-dark.jpg"
        alt="About dark"
      />
      <article class="about__article">
        <h2 class="about__subtitle">About our furniture</h2>
        <p class="about__text">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best expresses your interests and what inspires you. Find the
          furniture pieces you need, from traditional to contemporary styles or
          anything in between. Product specialists are available to help you
          create your dream space.
        </p>
      </article>
      <img
        class="about__image about__image--light"
        src="./images/image-about-light.jpg"
        alt="About light"
      />
    </section>
  `;
}
