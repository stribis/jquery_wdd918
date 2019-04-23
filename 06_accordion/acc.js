$(document).ready(function () {
  // if somone clicks one of our a tags
  $(".set > a").on("click", function () {
  // we test if the clicked <a> has the classs active
    // if it does
    if ($(this).hasClass('active')) {
      // We remove the class active
      $(this).removeClass("active");
      // We make sure all of the siblings collapse
      $(this).siblings('.content').slideUp(200);
    // If it doesn't
    } else {
      // We remove the class active from all <a> tags
      $(".set > a").removeClass("active");
      // We add active to the clicked element
      $(this).addClass("active");
      // We slide up the content
      $('.content').slideUp(200);
      // and slide down the content of the clicked element
      $(this).siblings('.content').slideDown(200);
    }

  });
});