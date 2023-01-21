const styleSwitcherToggle =  document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener('click', ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
});
// close style switcher on scroll
window.addEventListener('scroll', ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// change the style color

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActivity(color)
{
    alternateStyles.forEach((style)=>{
      if(color === style.getAttribute("title"))
    {
        style.removeAttribute('disabled')
    }
    else
    {
        style.setAttribute("disabled", "true")
    }   
    }
    )
}

// switch backgrounds
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector('i').classList.toggle("fa-sun");
    dayNight.querySelector('i').classList.toggle("fa-moon")
    document.body.classList.toggle("dark");
})