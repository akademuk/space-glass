const tabsPro = document.querySelectorAll('.prodjectTabBtn');
const circle = document.querySelectorAll('.circle');
const tabContentsPro = document.querySelectorAll('.prodjectTab-content');

tabsPro.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    tabsPro.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    tabContentsPro.forEach(tabContent => tabContent.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });
});
circle.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    circle.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    tabContentsPro.forEach(tabContent => tabContent.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });
});