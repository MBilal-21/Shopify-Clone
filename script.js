
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.querySelector("header").classList.add("header-bg")
  } else {
   
    document.querySelector("header").classList.remove("header-bg")
  }
}
const burger = document.querySelector(".burger");
const navMenu = document.querySelector("nav");
burger.addEventListener('click', ()=>{
  if (burger.classList.contains("cross")) {
    burger.classList.remove("cross");
    navMenu.classList.remove("shownav");
    navMenu.classList.add("hideNavbar");
    document.querySelector("header").id = ""
  }
  else{
    burger.classList.add("cross");
    navMenu.classList.remove("hideNavbar");
    navMenu.classList.add("shownav");
    document.querySelector("header").id = "header-bg"
    
  }
})

