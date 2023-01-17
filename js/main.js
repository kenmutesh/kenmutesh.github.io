console.clear();

const typing = document.querySelectorAll('.typewriter');

function type(element) {

function randomOpacity() {
  return (Math.floor(Math.random() * 50) + 50)/100;
}

function randomEms() {
  if (Math.random() > .8) {
  return (Math.floor(Math.random() * 100) - 50)/800;
  }
  else {
    return 0;
  }
}

function wrap(char) {
  return '<span style="opacity:' + randomOpacity() + '; text-shadow:' + randomEms() + 'em ' + randomEms() + 'em currentColor;">' + char + '</span>';
}

const wrappedText = Array.from(element.textContent).map(wrap);

element.innerHTML = wrappedText.join('');
  
}

typing.forEach(type);