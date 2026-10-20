// ......Jquary......

$(document).ready(function () {
  let arrowUpIcon = $(".arrow-up__icon");
  arrowUpIcon.hide(300);
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      arrowUpIcon.show(300);
    } else {
      arrowUpIcon.hide(300);
    }
    
    arrowUpIcon.click(function () {
      console.log('lll');
      $("html").animate({ scrollTop: 0 },1000);
    });
  });
});
// ..........................................
// let $ = document;
let navBtn = document.querySelector(".nav__btn");
let navMenu = document.querySelector(".nav__menu");
let menuLinks = document.querySelectorAll(".menu__link");
let mobileMenuLinks = document.querySelectorAll(".mobile-menu__link");
let navOpen = false;
navBtn.addEventListener("click", function () {
  console.log("ok");
  if (navOpen) {
    navBtn.classList.remove("nav__btn--open");
    navMenu.classList.remove("nav__menu--open");
    navOpen = false;
    console.log("ok");
  } else {
    navBtn.classList.add("nav__btn--open");
    navMenu.classList.add("nav__menu--open");
    navOpen = true;
    console.log("no");
  }
});

menuLinks.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      removeActiveClass();
      e.target.classList.add("active");
    }
      let sectionClass=item.getAttribute('data-section')
      console.log(sectionClass);
     let sectionOffsetTop=document.querySelector(`.${sectionClass}`).offsetTop
     console.log(sectionOffsetTop);

     window.scrollTo({
      top:sectionOffsetTop-90,
      behavior:"smooth"
     })
  });
});
function removeActiveClass() {
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].classList.remove("active");
    console.log("ok");
  }
}

mobileMenuLinks.forEach(function (item) {
  item.addEventListener("click", function (e) {
    console.log("ok");
    e.preventDefault();

    if (e.target.classList.contains("actived")) {
      e.target.classList.remove("actived");
    } else {
      removeActivedClass();
      e.target.classList.add("actived");
    }
  });
});
function removeActivedClass() {
  for (let i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].classList.remove("actived");
  }
}
