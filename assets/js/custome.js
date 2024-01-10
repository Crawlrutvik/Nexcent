$(document).ready(function () {
  // header 
  $(".menu_main_wrap .menu_icon").click(function () {
    $(".header-wrap").addClass("show-hader");
    $("html").css("overflow", "hidden");
  });
  $(".menu_main_wrap .close_icon").click(function () {
    $(".header-wrap").removeClass("show-hader");
    $("html").css("overflow", "unset");
    $("html").css("overflow-x", "hidden");
  });

  // color switcher
  $(".color-switcher .switcher-btn").click(function () {
    $(".color-switcher").toggleClass("open");
    
  });
  $(".theme-buttons").on("click", function () {
    let dataColor = $(this).attr("data-color");
    $(":root").css("--theme-color", dataColor);
    $(".img-fluid").attr("fill", dataColor);
    console.log($(".img-fluid").attr("fill"));
  });
});
