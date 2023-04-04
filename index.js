const menuBtn = document.querySelector(".menu");

const menus = document.querySelector(".menus");

const menuChildren = menus.children;

const navList = document.querySelector(".menus");
menuBtn.addEventListener("click", function () {
  navList.classList.toggle("leftMe");
  console.log("hello");
});
console.log(menuChildren.item(1));

for (i = 0; i < menuChildren.length; i++) {
  menuChildren.item(i).addEventListener("click", function () {
    navList.classList.remove("leftMe");
  });
}

document.querySelectorAll(`a[href^="#"]`).forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// const preContainer = document.querySelector(".pre-container");
// const newElement = document.createElement("video").innerHTML = `<video controls loop autoplay <source src="unixVid.mp4" type="video/mp4"> </video>`;

// const navbar = document.getElementById("navbar");
// window.addEventListener("scroll", function () {
//   const scrolling = window.scrollY;
//   const scrollingX = window.scrollX;
//   if (scrolling) {
//     navbar.style.visibility = "visible";
//     navbar.style.position = "fixed";
//     navbar.style.transition = ".3s";
//   } else {
//     setInterval(function () {
//       navbar.style.visibility = "hidden";
//     }, 3000);
//   }
// });
const skillHeader = document.querySelector(".skill-header");
const html = document.querySelector(".html");
const skills = document.querySelector(".skill");
const Mainskills = document.querySelector(".skills");
const skillChild = skills.children;

// skillChild.item(1).addEventListener("mouseover", function () {
//   skillHeader.style.background = `url('css.jpg')`;
//   skills.style.transition = ".5s";
//   // skillChild.item(0).style.boxShadow = "none";
//   // skillChild.item(2).style.boxShadow = "none";
//   // skillChild.item(3).style.boxShadow = "none";
//   // skillChild.item(4).style.boxShadow = "none";
//   // skillChild.item(5).style.boxShadow = "none";
// });


const myPhoto = document.querySelector(".my-photo");
const myProfile = document.querySelector(".my-profile");
const moons = document.querySelector(".moons");
const moon = document
  .querySelector(".moon")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      for (i = 0; i < skillChild.length; i++) {
        skillChild.item(i).style.boxShadow = "none";
      }
      Mainskills.style.boxShadow = "none";
      myProfile.src = `my-profile-dm.png`;
      moons.src = "moon-light.png";
    } else {
      for (i = 0; i < skillChild.length; i++) {
        skillChild.item(i).style.boxShadow =
          "5px 5px 10px #b3b3b3, -5px -5px 10px #ffffff";
      }
      moons.src = "moon-dark.png";
      myProfile.src = `my-profile.png`;
    }
  });
//  const screen = document.querySelector(".pre-container");

//   const unorderedList = document.querySelector(".ul-list");

  // const ulchild = unorderedList.children;

  // ulchild.item(0).addEventListener("mouseover", function(){
   
  //   screen.innerHTML = `<video controls width="100%; height="100%";style="background-size: cover;"  position="relative" loop autoplay <source src="unixVid.mp4" type="video/mp4"> </video>`;
  

  // });
  // ulchild.item(0).addEventListener("mouseout", function(){
  //   screen.style.transition = "1.5s";
  //   screen.src = `unixVid.mp4`;
  //   screen.style.background = "none";


  // });
  // ulchild.item(1).addEventListener("mouseover", function(){
  //  screen.style.transition = "1.5s";
  //   screen.innerHTML = `<video controls width="100%; height="100%"; 
  //   style="background-size: "cover""; position="relative" loop autoplay <source src="space.mp4" type="video/mp4"> </video>`;
  
  // });



const scrollToTopBtn = document.getElementById("scroll-to-top");


window.addEventListener("scroll", function() {
  // If the user scrolls down more than 20 pixels, show the button
  if (window.pageYOffset > 20) {

    scrollToTopBtn.style.display = "block";
    scrollToTopBtn.classList.add("scroll-translate");
   
   
  } else {
    scrollToTopBtn.style.display = "none";
    scrollToTopBtn.classList.remove("scroll-translate");
 
  }
});

// Add a click event listener to the button
scrollToTopBtn.addEventListener("click", function() {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
