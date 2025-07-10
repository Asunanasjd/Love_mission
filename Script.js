const windows = document.querySelectorAll('.window');
const textBox = document.getElementById('text-box');

function typeText(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  const typing = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text[i];
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
}

windows.forEach(window => {
  window.addEventListener('click', () => {
    const text = window.dataset.text;
    typeText(textBox, text);
  });
});
