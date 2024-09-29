let scrollup1 = document.getElementById('scrollup')
let menu = document.querySelector(".menu")
let ul = document.querySelector("ul")
let menunone = document.querySelector(".menunone")
let p1 = document.querySelectorAll(".text1 p")
let click1
//menu
if( window.innerWidth<=900){
menu.addEventListener("click" , function(){
    ul.classList.add("ul2")
    menu.style.display ="none"
    menunone.style.display = "inline-block"
})
menunone.addEventListener("click" , function(){
    ul.classList.remove("ul2")
    menu.style.display ="inline-block"
    menunone.style.display = "none"
})
function li1() {
    ul.classList.remove("ul2")
    menu.style.display ="inline-block"
    menunone.style.display = "none"
}
}
//nav
document.querySelectorAll('nav li').forEach(item => {
  item.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

//scroll
window.onscroll = function(){
  if(this.scrollY>=277){
    scrollup1.classList.add('show')
  }else{
    scrollup1.classList.remove('show')
  }
}
function scrollup(){
  window.scrollTo({
    top : 0,
    behavior: 'smooth',
  })
}
