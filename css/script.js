const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeMenuBtn = document.getElementById("closeMenuBtn")
closeMenuBtn.style.display = "none"

document.getElementById("menuItem").addEventListener('click',()=>{
  navMenu.classList.toggle("active");
   hamburger.classList.toggle("active");
   closeMenuBtn.style.display = "none"
})

document.getElementById("menuItemAbout").addEventListener('click',()=>{
  navMenu.classList.toggle("active");
   hamburger.classList.toggle("active");
   closeMenuBtn.style.display = "none"
})

document.getElementById("menuItemServices").addEventListener('click',()=>{
  navMenu.classList.toggle("active");
   hamburger.classList.toggle("active");
   closeMenuBtn.style.display = "none"
})

document.getElementById("menuItemPortfolio").addEventListener('click',()=>{
  navMenu.classList.toggle("active");
   hamburger.classList.toggle("active");
   closeMenuBtn.style.display = "none"
})

closeMenuBtn.addEventListener('click',()=>{
  navMenu.classList.toggle("active");
   hamburger.classList.toggle("active");
   closeMenuBtn.style.display = "none"
})

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    closeMenuBtn.style.display = "block"
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

$( '.menu li a' ).on("click", function(){
  $('#hamburger').click();
});




