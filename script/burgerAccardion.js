const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const arrow = header.querySelector('.accordion-arrow');

  header.addEventListener('click', () => {
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.accordion-arrow').classList.remove('active');
      }
    });
    
    item.classList.toggle('active');
    arrow.classList.toggle('active');
  });
});
