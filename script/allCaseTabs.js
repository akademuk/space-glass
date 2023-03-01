const allCaseTab = document.querySelectorAll('.allCaseTab');
const allCaseContentTab = document.querySelectorAll('.allCaseContentTab');

allCaseTab.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    allCaseTab.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    allCaseContentTab.forEach(tabContent => tabContent.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });
});