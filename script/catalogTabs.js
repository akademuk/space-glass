const tabs = document.querySelectorAll('.catalogueButton');
const tabContents = document.querySelectorAll('.catalogueTabs-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    tabContents.forEach(tabContent => tabContent.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });
});