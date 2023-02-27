const fillterBlog = document.querySelectorAll('.fillterBlog');
const fillterBlogActive = document.querySelectorAll('.fillterBlogActive');
const blogSliderPage = document.querySelectorAll('.blogSliderPage');

fillterBlog.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    fillterBlog.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    blogSliderPage.forEach(tabContent => tabContent.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });
});
