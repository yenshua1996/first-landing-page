(function () {
  console.log("Hello World");
  const contactLink = document.querySelector(".contact__links");
  const contactBtn = document.querySelector(".contact__btn");
  const contactFormSection = document.querySelector(".contact__container");
  const homeBtn = document.querySelector(".home__btn");
  const hero = document.querySelector("#hero");
  const containerSections = document.querySelectorAll(".container__section");

  contactLink.addEventListener("click", (e) => {
    e.preventDefault();

    contactFormSection.scrollIntoView({ behavior: "smooth" });
  });

  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();

    contactFormSection.scrollIntoView({ behavior: "smooth" });
  });

  homeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    hero.scrollIntoView({ behavior: "smooth" });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        homeBtn.classList.remove("hide__home--btn");
      } else {
        homeBtn.classList.add("hide__home--btn");
      }
    },
    {
      root: null,
      threshold: 0.2,
    }
  );

  observer.observe(hero);

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        const targetEl = entry.target.querySelector(".hide__section");

        targetEl.classList.remove("hide__section");
      }
    },
    {
      root: null,
      threshold: 0.5,
    }
  );

  containerSections.forEach((section) => {
    sectionObserver.observe(section);
  });
})();
