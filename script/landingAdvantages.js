function landingAdvantagesTabs(event, tabName) {
  var i, tabcontent, tablink;

  // Скрыть все вкладки
  tabcontent = document.getElementsByClassName("landingAdvantagesTabsContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
    tabcontent[i].style.display = "none"; // Hide the element
  }

  // Сделать все кнопки неактивными
  tablink = document.getElementsByClassName("landingAdvantagesTabs");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].classList.remove("active");
  }

  // Отобразить выбранную вкладку и сделать соответствующую кнопку активной
  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");

  // Отобразить выбранную вкладку с помощью flex
  document.getElementById(tabName).style.display = "flex";
}
