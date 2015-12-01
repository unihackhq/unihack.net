$(function() {
  $("#main-nav .trigger").click(function() {
    $(this).toggleClass("active");
    $("#main-nav ul").slideToggle();
  });

  $(".subnav .trigger").click(function() {
    $(this).toggleClass("active");
    $(".subnav ul").slideToggle();
  });
});
