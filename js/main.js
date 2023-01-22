const typing = new Typed(".typing",{
    strings: ["","test 1", 'test 2', 'test 3'],
    typespeed: 100,
    loop: true,
    backspeed: 60,
})
document.body.classList.add("loading");
document.body.style.opacity = 0.5;

// Remove the class "loading" and set the opacity back to 1
document.body.classList.remove("loading");
document.body.style.opacity = 1;

setTimeout(function(){
    document.getElementById("loader").classList.add("hide");
    
}, 5000);

const active = document.querySelectorAll(".navbar");
active.forEach(item => {
    item.addEventListener("click", (event)=>{
        // Remove the 'active' class from all <li> elements
    active.forEach(item => item.classList.remove("active"));
    // Add the 'active' class to the clicked <li>
    event.target.classList.add("active");
    });
})