$(".top").click(function (e) {
  e.preventDefault();

  $("#music")[0].play();

  $(this).css("transform", "rotateX(180deg)");
  setTimeout(function () {
    $(".content").addClass("open");
  }, 1000);

  setTimeout(function () {
    $(".top").css("opacity", "0");
  }, 3000);

  setTimeout(function () {
    $(".content").css({
      opacity: "0",
      transition: "opacity 2s linear",
    });

    $(".body").css({
      opacity: "0",
      transition: "opacity 2s linear",
    });
  }, 15000);

  setTimeout(function () {
    $(".body").css("display", "none");
    $(".content").css("display", "none");

    $(".book").css({
      display: "block",
      opacity: "1",
    });
  }, 18000);
});
