$(document).ready(function () {
  $('.header-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
/*     autoplay:true, */
  /*   appendArrows: $('.header-slider-arrows') */
  })
  $(".partners-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
  });

  $(".project-text__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    /* fade: true,
    cssEase: "linear", */
    appendArrows: $('.project-slider__arrows'),

    asNavFor: ".project-image__slider",
  });
  $(".project-image__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".partners-slider",
    arrows: false,
  
  });
   $('.news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
   
   })


  Fancybox.bind('[data-fancybox="video"]', {
   
  });


$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $("header").addClass("header-scroll");
  } else {
    $("header").removeClass("header-scroll");
  }

  const $element = $("header");

  if ($(window).scrollTop() === 0) {
    $element.removeClass("header-scroll");
  }

  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();

  $(".count").each(function () {
    var $this = $(this);
    var elementTop = $this.offset().top;

    if (elementTop <= scrollTop + windowHeight) {
      if (!$this.hasClass("counted")) {
        $this.addClass("counted");

        var countTo = $this.attr("data-count");

        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 4000,
            easing: "linear",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      }
    }
  });
});

$('.faq-box').click(function(){
  $(this).toggleClass("open");
})

Fancybox.bind('[data-fancybox="page-gallery"]', {});
Fancybox.bind('[data-fancybox="photo-gallery"]', {});

$('#registration-open').click(function(e){
  e.preventDefault();
  $('.registration-form__form').toggleClass('open')
})










});
