(function () {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = siteNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach(function (item) {
    observer.observe(item);
  });

  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  document.querySelectorAll(".stat-number[data-value]").forEach(function (node) {
    const target = Number(node.getAttribute("data-value"));
    if (!Number.isFinite(target)) return;

    const suffix = node.textContent.replace(/[\d\s]/g, "");
    let value = 0;
    const step = Math.max(1, Math.floor(target / 26));

    const timer = setInterval(function () {
      value += step;
      if (value >= target) {
        value = target;
        clearInterval(timer);
      }
      node.textContent = String(value) + suffix;
    }, 36);
  });
})();