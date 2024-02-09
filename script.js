$(".heart").on("click", function () {
  $(this).css("opacity", "0");
  $(".top").css("transform", "rotateX(180deg)");
  $(".content").addClass("open");

  setTimeout(function () {
    $(".top").css("opacity", "0");
  }, 3000);
});
