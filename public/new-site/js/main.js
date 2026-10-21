(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const navCollapse = document.getElementById("siteNav");
  const navLinks = [...document.querySelectorAll('.navbar-nav .nav-link[href^="#"]')];
  const sections = [...document.querySelectorAll("main section[id]")];

  // Sticky glass header after leaving the hero top.
  const updateHeader = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 28);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  // Close the mobile Bootstrap menu after a section is selected.
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 991.98px)").matches && navCollapse.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  // Mark the current section in the navigation.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }

  // Responsive services carousel: swipe on touch screens, arrows on mobile.
  const track = document.querySelector(".services-track");
  const cards = [...document.querySelectorAll(".service-card")];
  const prev = document.getElementById("servicesPrev");
  const next = document.getElementById("servicesNext");
  const progress = document.getElementById("serviceProgress");

  const updateProgress = () => {
    if (!track || !progress) return;
    const maxScroll = Math.max(1, track.scrollWidth - track.clientWidth);
    const percent = Math.min(100, Math.max(25, (track.clientWidth / track.scrollWidth) * 100));
    progress.style.width = `${percent + (100 - percent) * (track.scrollLeft / maxScroll)}%`;
  };

  const scrollCard = direction => {
    if (!track || !cards.length) return;
    const firstCard = cards[0];
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const distance = firstCard.getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  prev?.addEventListener("click", () => scrollCard(-1));
  next?.addEventListener("click", () => scrollCard(1));
  track?.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
