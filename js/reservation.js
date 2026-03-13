$(document).ready(function () {
  function setRoomState(index, isActive) {
    $("p.desc" + index).css({
      opacity: isActive ? "1" : "0",
      "transition-duration": "500ms",
      "padding-top": isActive ? "30px" : "0",
      "padding-bottom": isActive ? "30px" : "0",
      background: isActive ? "rgba(1, 1, 1, 0.7)" : "transparent",
    });

    $("button.but" + index).css({
      opacity: isActive ? "1" : "0",
      "transition-duration": "700ms",
    });

    $(".all-description" + index).css({
      opacity: isActive ? "0" : "1",
      "transition-duration": "500ms",
      "margin-top": isActive ? "0%" : "5%",
    });
  }

  for (var i = 1; i <= 6; i++) {
    (function (index) {
      var room = $("div.room" + index);

      room.on("mouseenter focusin", function () {
        setRoomState(index, true);
      });

      room.on("mouseleave focusout", function () {
        setRoomState(index, false);
      });
    })(i);
  }
});
