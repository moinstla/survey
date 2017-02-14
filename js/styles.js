$(document).ready(function() {
  $("form").submit(function(event) {
  var name = $("input#name").val();
  var favoriteColor = $("#color").val();
  var favoriteFood = $("#food").val();
  var favoriteMusic = $("input:radio[name=music]:checked").val();

  $("#userName").text(name);
  $("#favoriteColor").text(favoriteColor);
  $("#favoriteFood").text(favoriteFood);
  $("#favoriteMusic").text(favoriteMusic);

  event.preventDefault();
  });
});
