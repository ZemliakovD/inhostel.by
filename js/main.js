$(function () {

  $('.main-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-sharp fa-solid fa-angle-left fa-beat" style="color: #ffffff;"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right fa-beat" style="color: #ffffff;"></i></button>'
  });

});

$("#faq").click(function () { // ID откуда кливаем
  $('html, body').animate({
    scrollTop: $(".faq").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$("#friends").click(function () { // ID откуда кливаем
  $('html, body').animate({
    scrollTop: $(".footer").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$("#catalog-pup").click(function () { // ID откуда кливаем
  $('html, body').animate({
    scrollTop: $(".catalog").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$("#faq-foot").click(function () { // ID откуда кливаем
  $('html, body').animate({
    scrollTop: $(".faq").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});

$("#friends-foot").click(function () { // ID откуда кливаем
  $('html, body').animate({
    scrollTop: $(".footer").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
});