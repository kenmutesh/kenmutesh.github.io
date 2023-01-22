const typing = new Typed(".typing",{
    strings: ["","test 1", 'test 2', 'test 3'],
    typespeed: 100,
    loop: true,
    backspeed: 60,
})

const active = document.querySelectorAll(".navbar");
active.forEach(item => {
    item.addEventListener("click", (event)=>{
        // Remove the 'active' class from all <li> elements
    active.forEach(item => item.classList.remove("active"));
    // Add the 'active' class to the clicked <li>
    event.target.classList.add("active");
    });
})