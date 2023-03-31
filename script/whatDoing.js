$(document).ready(function() {
    $(".show-more-btn").on("click", function() {
      const whatDoingSectionText = $(this).prev(".whatDoingSectionText");
      const isExpanded = $(this).data("expanded");
      if (isExpanded) {
        // Возвращаем блок в исходное состояние
        $(this).find("img").css("transform", "rotate(0deg)");
        whatDoingSectionText.css({
          "-webkit-line-clamp": "3",
          "overflow": "hidden"
        });
      } else {
        // Открываем блок полностью
        $(this).find("img").css("transform", "rotate(180deg)");
        whatDoingSectionText.css({
          "-webkit-line-clamp": "unset",
          "overflow": "visible"
        });
      }
      $(this).data("expanded", !isExpanded);
    });
  });
  