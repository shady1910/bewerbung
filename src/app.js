const dataText = ['Designer', 'Entwickler'];

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  reveals.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
}

function typeWriter(text, i, fnCallback) {
  // check if text isn't finished yet
  if (i < text.length) {
    // add next character to class typewriter
    document.querySelector('h3 .typewriter').innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true" class="cursor"></span>';
    // wait and call this function again for next character
    setTimeout(() => typeWriter(text, i + 1, fnCallback), 100);
    // when text finished, call callback if there is a callback function
  } else if (fnCallback) {
    setTimeout(fnCallback, 700);
  }
}

function startTextAnimation(i) {
  // if dataText[i] exists, start animation
  if (i < dataText.length) {
    typeWriter(dataText[i], 0, () => setTimeout(() => startTextAnimation(i + 1), 2000));
  } else {
    startTextAnimation(0);
  }
}

window.addEventListener('scroll', reveal, { passive: true });
document.addEventListener('DOMContentLoaded', () => startTextAnimation(0));
