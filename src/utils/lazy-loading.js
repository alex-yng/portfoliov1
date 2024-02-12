const lazyLoading = () => {
  const lazyImgs = document.querySelectorAll(".lazy");
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // section finding
        let section = entry.target;
        section.classList.toggle("animate");
        section.classList.toggle("fadeIn");
        section.classList.toggle("animate-slow");
        observer.unobserve(section);
        // img finding
        let img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("loading");
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  lazyImgs.forEach((img) => {
    observer.observe(img);
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
};

export default lazyLoading;
