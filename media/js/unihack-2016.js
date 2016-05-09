$(function() {
  $("#start-countdown").countdown("2016/07/30 9:00:00",  function(event) {
    $(this).text(
      event.strftime('in %D days %H hours %M minutes %S seconds')
    );
  });
});
