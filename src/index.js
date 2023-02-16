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
  element.classList.add("italic");
  element.textContent = siteContent["nav"][strClassName];
  element.className = ("italic");
});


// CTA SECTION
const headerImg = document.querySelector("#logo-img");
headerImg.src = siteContent["images"]["logo-img"];
// headerImg.src = "http://localhost:9000/img/logo.png";

const ctaTitle = document.querySelector(".cta h1");
ctaTitle.textContent = siteContent["cta"]["h1"]

const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent["cta"]["button"]

const ctaImage = document.querySelector(".cta img");
ctaImage.src = siteContent["images"]["cta-img"];
// ctaImage.src = "http://localhost:9000/img/cta.png";


// MAIN CONTENT SECTION
const mainData = Object.keys(siteContent["main-content"]);

const mainCards = document.querySelectorAll(".text-content");
const arrMainCards =Array.from(mainCards);

arrMainCards.map((card, index) => {
  card.children[0].textContent = siteContent["main-content"][mainData[index * 2]]
  if (index === 0) {
    card.children[1].textContent = siteContent["main-content"][mainData[Math.abs(index * 2 - 1)]];
  } else {
    card.children[1].textContent = siteContent["main-content"][mainData[index * 2 + 1]];
  }
  
});

const mainImage = document.querySelector(".middle-img");
mainImage.src = siteContent["images"]["accent-img"];
// mainImage.src = "http://localhost:9000/img/accent.png";


// CONTACT SECTION
const contactData = Object.keys(siteContent["contact"]);
console.log(contactData);

const contactHeading = document.querySelector(".contact h4");
const contactTexts = document.querySelectorAll(".contact p");
const arrContactTexts =Array.from(contactTexts);

contactHeading.textContent = siteContent["contact"]["contact-h4"]; 
arrContactTexts.map((paragraph, index) => {
  paragraph.textContent = siteContent["contact"][contactData[index + 1]]
});


// FOOTER SECTION
const footerLink = document.querySelector("footer a");
footerLink.classList.add("bold")
// footerLink.className = "bold";
footerLink.textContent = siteContent["footer"]["copyright"];