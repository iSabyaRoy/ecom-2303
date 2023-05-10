$('.banner').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>"
});
$('#myTab').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
    appendArrows: '.slider-btn'
});
$('#myTab_2').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
    appendArrows: '.slider-btn-2'
});
