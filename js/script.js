const btnNavEl = document.querySelectorAll(".main-nav-link");
const headerEl = document.querySelector(".header");
const mainNav = document.querySelectorAll(".main-nav");

// btnNavEl.addEventListener("click", function () {
//   btnNavEl.classList.toggle("nav-open");
// });
// console.log(btnNavEl);
// btnNavEl.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     headerEl.classList.remove("nav-open");
//     console.log(btn);
//   })
// );

//PAGE NAVIGATION
// METHOD 02
document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("main-nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

  //MENU FADE ANIMATION
  const nav = document.querySelector('.main-nav');
  const handleHover = function(e){
    if(e.target.classList.contains('main-nav-link')){
      const link = e.target;
      const brothers = link.closest('.main-nav').querySelectorAll('.main-nav-link');
      const logo = link.closest('.header').querySelector('img');

      brothers.forEach(element => {
        if(element !== link){
          element.style.opacity = this;
        }
        logo.style.opacity = this;
      });
    }
  }

  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout',  handleHover.bind(1));

  //STICKY NAVIGATION
    //TECHNICH ONE
  // const stickyStarter = document.querySelector('.section-hero').getBoundingClientRect();
  // window.addEventListener('scroll', function(){

  //   if(window.scrollY > stickyStarter.top) headerEl.classList.add('sticky');
  //   else headerEl.classList.remove('sticky');
  // })


