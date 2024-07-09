function buttons() {
  const navBtn = document.getElementById("navBtn");
  const navDialog = document.getElementById("navDialog");
  const navCloseBtn = document.getElementById("navCloseBtn");
  const prevBtn = document.getElementById("navPrevBtn");
  const nextBtn = document.getElementById("navNextBtn");
  navBtn.addEventListener("click", () => {
    navDialog.classList.toggle("nav__dialog--active");
  });
  navCloseBtn.addEventListener("click", () => {
    navDialog.classList.remove("nav__dialog--active");
  });
  prevBtn.addEventListener("click", () => {
    console.log("prev");
  });
  nextBtn.addEventListener("click", () => {
    console.log("next");
  });
}

const images = [
  "./SCSS/images/desktop-image-hero-1.jpg",
  "./SCSS/images/desktop-image-hero-2.jpg",
  "./SCSS/images/desktop-image-hero-3.jpg",
];

function desktopMobile() {
  const width = window.innerWidth;
  if (width >= 720) {
    desktop();
    desktopSlideOne();
  } else {
    mobile();
  }
  buttons();
}

window.addEventListener("resize", desktopMobile);
window.addEventListener("DOMContentLoaded", desktopMobile);

function mobile() {
  const main = document.querySelector("main");
  main.innerHTML = `
    <nav class="nav">
      <button class="nav__toggle-button" id="navBtn">
        <img
          class="nav__toggle-icon"
          src="./images/icon-hamburger.svg"
          alt="Open menu"
        />
      </button>
      <img class="nav__logo" src="./images/logo.svg" alt="Room Logo" />
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
    </nav>
    <article class="article">
      <h1 class="article__title">Discover innovative ways to decorate</h1>
      <p class="article__text">
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our
        collection and make your property a reflection of you and what you
        love.
      </p>
      <a class="article__link" href="#">Shop now</a>
    </article>
    <img
      class="image image--about-dark"
      src="./images/image-about-dark.jpg"
      alt="About dark"
    />
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
  main.innerHTML = `
    <section class="section-desktop">
      <img
        class="image image--about-dark"
        src="./images/image-about-dark.jpg"
        alt="About dark"
      />
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
    </section>
  `;
}

function desktopSlideOne() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.className = "section";
  section.innerHTML = `
    <nav class="nav">
      <img src="./images/logo.svg" alt="">
      <ul class="nav__list">
        <li class="nav__item"><a class="nav__link" href="#">Home</a></li>
        <li class="nav__item"><a class="nav__link" href="#">Shop</a></li>
        <li class="nav__item"><a class="nav__link" href="#">About</a></li>
        <li class="nav__item"><a class="nav__link" href="#">Contact</a></li>
      </ul>
    </nav>
    <article class="article">
      <h1 class="article__title">Discover innovative ways to decorate</h1>
      <p class="article__text">
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our
        collection and make your property a reflection of you and what you
        love.
      </p>
      <a class="article__link" href="#">Shop now</a>
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
    </article>
  `;
  main.insertBefore(section, main.firstChild);
}

function desktopSlideTwo() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.className = "section";
  section.innerHTML = `
    <nav class="nav">
      <img src="./images/logo.svg" alt="">
      <ul class="nav__list">
        <li class="nav__item"><a class="nav__link" href="#">Home</a></li>
        <li class="nav__item"><a class="nav__link" href="#">Shop</a></li>
        <li class="nav__item"><a class="nav__link" href="#">About</a></li>
        <li class="nav__item"><a class="nav__link" href="#">Contact</a></li>
      </ul>
    </nav>
    <article class="article">
      <h3 class="article__subtitle">We are available all across the globe</h3>
      <p class="article__text">
        With stores all over the world, it's easy for you to find furniture
        for your home or place of business. Locally, we’re in most major
        cities throughout the country. Find the branch nearest you using our
        store locator. Any questions? Don't hesitate to contact us today.
      </p>
      <a class="article__link" href="#">Shop now</a>
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
    </article>
  `;
  main.insertBefore(section, main.firstChild);
}

function desktopSlideThree() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.className = "section";
  section.innerHTML = `
    <nav class="nav">
      <img src="./images/logo.svg" alt="">
      <ul class="nav__list">
        <li class="nav__item"><a class="nav__link" href="#">Home</a></li>
        <li class="nav__item"><a class="nav__link" href="#">Shop</a></li>
        <li class="nav__item"><a class="nav__link" href="#">About</a></li>
        <li class="nav__item"><a class="nav__link" href="#">Contact</a></li>
      </ul>
    </nav>
    <article class="article">
      <h4 class="article__subtitle">Manufactured with the best materials</h4>
      <p class="article__text">
        Our modern furniture store provides a high level of quality. Our
        company has invested in advanced technology to ensure that every
        product is made as perfect and as consistent as possible. With three
        decades of experience in this industry, we understand what customers
        want for their home and office.
      </p>
      <a class="article__link" href="#">Shop now</a>
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
    </article>
  `;
  main.insertBefore(section, main.firstChild);
}
