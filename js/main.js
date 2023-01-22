const typing = new Typed(".typing",{
    strings: ["","test 1", 'test 2', 'test 3'],
    typespeed: 100,
    loop: true,
    backspeed: 60,
})

var particleArray = [];
// Set the number of particles
var particleCount = 350;
// Create a function to generate the particles
function generateParticles() {
  for (var i = 0; i < particleCount; i++) {
    var particle = document.createElement("div");
    particle.className = "particle";
    // Set the particle's initial position
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    // Add the particle to the array and the HTML
    particleArray.push(particle);
    document.getElementById("body").appendChild(particle);
  }
}
// Call the function to generate the particles
generateParticles();
// Create a function to animate the particles
function animateParticles() {
    for (var i = 0; i < particleArray.length; i++) {
      var particle = particleArray[i];
      // Generate new x and y positions for the particle
      var newX = particle.offsetLeft + (Math.random() - 0.5) * 20;
      var newY = particle.offsetTop + (Math.random() - 0.5) * 20;
      // Update the particle's position
      particle.style.left = newX + "px";
      particle.style.top = newY + "px";
    }
  }
  // Animate the particles every 50 milliseconds
  setInterval(animateParticles, 150);
