$(".top").click(function (e) {
  e.preventDefault();

  $(this).css("transform", "rotateX(180deg)");
  setTimeout(function () {
    $(".content").addClass("open");
  }, 1000);

  setTimeout(function () {
    $(".top").css("opacity", "0");
  }, 3000);
});
