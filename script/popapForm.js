const popupButtons = document.querySelectorAll('.popup-button');
const popup = document.querySelector('.popup');
const closeButtons = document.querySelectorAll('.close');

popupButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    popup.style.display = 'flex';
  });
});

closeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    popup.style.display = 'none';
  });
});

window.addEventListener('click', function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
