(function() {
  var scrollEl = document.querySelector("#xonly .inner");
  var scr = new ScrollBooster({
    viewport: document.querySelector("#xonly .scrolbar"),
    emulateScroll: true,
    direction: "horizontal",
    onUpdate: function(data) {
      scrollEl.style.transform =
        "translate(" + -data.position.x + "px, " + -data.position.y + "px)";
    }
  });
  scr.setPosition({
    x: 0
  });
})();

