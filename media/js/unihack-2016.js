$(function() {
  $("#start-countdown").countdown("2016/07/31 12:00:00",  function(event) {
    var totalHours = event.offset.totalDays * 24 + event.offset.hours;
    $(this).text(
      event.strftime(totalHours + ' hours %M minutes %S seconds')
    );
  });
});
