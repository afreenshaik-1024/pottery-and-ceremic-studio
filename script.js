const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = "✖";
    } else {
        menuBtn.innerHTML = "☰";
    }

});

function enableRTL(){
    document.body.classList.toggle("rtl");
}

function openLoginPage(){
    window.location.href = "login.html";
}

