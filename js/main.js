$(document).ready(function () {

   // preloader

   $(window).on("load", function () {
    $("#preloader").css('display', "none");
  });

 // fixed nav
 $(window).scroll(function () {
  var navScroll = $(window).scrollTop();
  if (navScroll >= 80) {
    $("#header").addClass("nav-fixed");
  } else {
    $("#header").removeClass("nav-fixed");
  }
});

// navigation active
$('ul li').click(function(){
  $('li').removeClass("active");
  $(this).addClass("active");
});
  // venobox
  $('.venobox').venobox();


  // testimonial slider
  $('.testimonial-slide').slick({
    dots:true,
    arrows:false
  });

  
});
// back to top btn script start
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  var topBtn = document.getElementById("b-to-t");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// back to top script end