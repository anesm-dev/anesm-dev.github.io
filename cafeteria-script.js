// ===== MENU DATA =====
const menuItems = [
  {
    category: "breakfast",
    title: "Avocado Toast",
    desc: "Sourdough bread, smashed avocado, cherry tomatoes & poached egg.",
    price: "$9.50",
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80"
  },
  {
    category: "breakfast",
    title: "Fluffy Pancakes",
    desc: "Stack of three golden pancakes with maple syrup & fresh berries.",
    price: "$8.00",
    badge: "Classic",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80"
  },
  {
    category: "breakfast",
    title: "Eggs Benedict",
    desc: "Toasted English muffin, Canadian bacon, hollandaise sauce.",
    price: "$11.00",
    badge: "Chef's Pick",
    img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80"
  },
  {
    category: "lunch",
    title: "Grilled Chicken Sandwich",
    desc: "Herbed chicken breast, lettuce, tomato, garlic aioli on brioche.",
    price: "$12.50",
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433e?w=400&q=80"
  },
  {
    category: "lunch",
    title: "Garden Buddha Bowl",
    desc: "Quinoa, roasted veggies, chickpeas, tahini dressing & fresh greens.",
    price: "$13.00",
    badge: "Vegan",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80"
  },
  {
    category: "lunch",
    title: "Classic Caesar Salad",
    desc: "Crisp romaine, parmesan shavings, croutons, house Caesar dressing.",
    price: "$10.50",
    badge: "Fresh",
    img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80"
  },
  {
    category: "drinks",
    title: "Cold Brew Coffee",
    desc: "Smooth 18-hour cold brew, served over ice with oat milk.",
    price: "$5.50",
    badge: "Fan Fav",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80"
  },
  {
    category: "drinks",
    title: "Mango Tango Smoothie",
    desc: "Fresh mango, pineapple, coconut milk & a hint of ginger.",
    price: "$6.50",
    badge: "Refreshing",
    img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&q=80"
  },
  {
    category: "drinks",
    title: "Matcha Latte",
    desc: "Ceremonial grade matcha with steamed oat milk & honey.",
    price: "$6.00",
    badge: "Healthy",
    img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80"
  },
  {
    category: "desserts",
    title: "Chocolate Lava Cake",
    desc: "Warm chocolate cake with a molten center & vanilla ice cream.",
    price: "$7.50",
    badge: "Indulgent",
    img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80"
  },
  {
    category: "desserts",
    title: "Berry Cheesecake",
    desc: "New York style cheesecake topped with fresh mixed berry compote.",
    price: "$7.00",
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80"
  },
  {
    category: "desserts",
    title: "Crème Brûlée",
    desc: "Classic French custard with a perfectly caramelized sugar crust.",
    price: "$8.00",
    badge: "Chef's Pick",
    img: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80"
  }
];

// ===== RENDER MENU =====
function renderMenu(category = "all") {
  const grid = document.getElementById("menuGrid");
  const items = category === "all"
    ? menuItems
    : menuItems.filter(item => item.category === category);

  grid.innerHTML = "";

  items.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.style.animationDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="menu-card-img-wrapper">
        <img class="menu-card-img" src="${item.img}" alt="${item.title}" loading="lazy"/>
      </div>
      <div class="menu-card-body">
        <p class="menu-card-category">${item.category}</p>
        <h3 class="menu-card-title">${item.title}</h3>
        <p class="menu-card-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <span class="menu-card-price">${item.price}</span>
          <span class="menu-card-badge">${item.badge}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== MENU TABS =====
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.category);
  });
});

renderMenu();

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ===== TESTIMONIALS SLIDER =====
const track = document.getElementById("testimonialsTrack");
const dotsContainer = document.getElementById("testimonialDots");
const cards = track.querySelectorAll(".testimonial-card");
let currentSlide = 0;

const slidesVisible = () => window.innerWidth < 768 ? 1 : 3;

function buildDots() {
  dotsContainer.innerHTML = "";
  const total = Math.ceil(cards.length / slidesVisible());
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("div");
    dot.className = `dot ${i === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function goToSlide(index) {
  currentSlide = index;
  const visible = slidesVisible();
  const cardWidth = cards[0].offsetWidth + 28;
  track.style.transform = `translateX(-${index * visible * cardWidth}px)`;
  dotsContainer.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}

buildDots();
window.addEventListener("resize", () => { buildDots(); goToSlide(0); });

// Auto-advance slider
setInterval(() => {
  const total = Math.ceil(cards.length / slidesVisible());
  goToSlide((currentSlide + 1) % total);
}, 4000);

// ===== CONTACT FORM =====
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const success = document.getElementById("formSuccess");
  success.style.display = "block";
  e.target.reset();
  setTimeout(() => { success.style.display = "none"; }, 4000);
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".menu-card, .info-card, .testimonial-card, .about-content, .about-image").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// ===== SMOOTH ACTIVE NAV =====
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute("id");
    }
  });
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.style.color = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "var(--primary)";
    }
  });
});