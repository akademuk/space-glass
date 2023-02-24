const tabsContact = document.querySelectorAll('.contactBtn');
const tabContentsContact = document.querySelectorAll('.contact-content');

tabsContact.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    tabsContact.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    tabContentsContact.forEach(tabContent => tabContent.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });
});