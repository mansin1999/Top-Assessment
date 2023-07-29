
// ============ display button change =================== //
let displybtn = document.querySelector(".disp-btn")
let nav = document.querySelector(".nav")
let icon = document.querySelector(".fa-bars");


displybtn.addEventListener("click",function(){
    nav.classList.toggle("show_menu")
    if(nav.classList.contains("show_menu") == true){
       icon.classList.remove("fa-bars")
       icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars");
    }
})

/*==============javascript for scroll menubar============ */
 function changebg(){
    let header = document.querySelector("header");
    let current = window.scrollY;

    if(current > 0){
        header.classList.add("header-fixed")
    }else{
        header.classList.remove("header-fixed")
    }
 }
 window.addEventListener("scroll",changebg)

// ======================= javascript for menubar chenge font color=================//

 window.addEventListener("scroll",function(){
    let navbar2 = document.querySelector("nav");
    if(window.scrollY > 0){
        navbar2.classList.add("sticky");
    }else{
        navbar2.classList.remove("sticky");
    }
});

window.addEventListener("scroll",function(){
    let navbar3 = document.querySelector(".theme-i");
    if(window.scrollY > 0){
        navbar3.classList.add("themecolor");
    }else{
        navbar3.classList.remove("themecolor");
    }
}) 

//  =============== icon and background change ==================== //



let icon2 = document.querySelector(".fa-moon")
icon2.addEventListener("click", function () {
    document.body.classList.toggle("background")

    if (document.body.classList.contains("background") == true) {
        icon2.classList.remove("fa-moon")
        icon2.classList.add("fa-sun")
    } else {
        icon2.classList.remove("fa-sun")
        icon2.classList.add("fa-moon")
    }
})

// ======================== email ==========================//


function myFunction() {
    var x = document.getElementById("myEmail").pattern;
    document.getElementById("email1").innerHTML = x;
  }

