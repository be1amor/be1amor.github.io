$(function() {

  var header = $("#header"),
      introH = $("#intro").innerHeight(),
      scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
      scrollOffset = $(this).scrollTop();

      checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
      if( scrollOffset >= introH ) {
          header.addClass("fixed");
      } else {
          header.removeClass("fixed");
      }
  }



  
  $("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      var $this = $(this),
          blockId = $this.data('scroll'),
          blockOffset = $(blockId).offset().top;

      $("#nav a").removeClass("active");
      $this.addClass("active");

      $("html, body").animate({
          scrollTop:  blockOffset
      }, 500);
  });


  $("#nav_toggle").on("click", function(event) {
      event.preventDefault();

      $(this).toggleClass("active");
      $("#nav").toggleClass("active");
  });


});



var acc = document.getElementsByClassName("statti_header");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


