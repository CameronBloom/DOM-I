const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// HEADER SECTION
const navLinks = document.querySelectorAll("nav a");
const arrNavLinks =Array.from(navLinks);

arrNavLinks.map((element, index) => {
  const strClassName = "nav-item-" + (index + 1).toString();
  element.classList.add(strClassName);
  element.textContent = siteContent["nav"][strClassName];
});

// CTA SECTION
const headerImg = document.querySelector("#logo-img");
headerImg.src = "http://localhost:9000/img/logo.png";

const ctaTitle = document.querySelector(".cta h1");
ctaTitle.textContent = siteContent["cta"]["h1"]

const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent["cta"]["button"]

const ctaImage = document.querySelector(".cta img");
ctaImage.src = "http://localhost:9000/img/cta.png";

// MAIN CONTENT SECTION
const mainData = Object.keys(siteContent["main-content"]);
console.log(mainData);

const mainCards = document.querySelectorAll(".text-content");
const arrMainCards =Array.from(mainCards);

arrMainCards.map((card, index) => {
  card.children[0].textContent = siteContent["main-content"][mainData[index * 2]]
  card.children[1].innerText = siteContent["main-content"][mainData[Math.abs(index * 2 - 1)]]
});
console.log(arrMainCards);

// TOP
const mainImage = document.querySelector(".middle-img");
mainImage.src = "http://localhost:9000/img/accent.png";

// BOTTOM
// CONTACT SECTION

// FOOTER SECTION