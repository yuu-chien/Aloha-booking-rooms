// index

$(".lan-list").click(function(){
    $(".drop-list").toggle();
})

$(document).ready(function(){
    var owl = $('.owl-carousel');
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 4,
        margin: 30,
        nav: false,
        dots: false,
    });
    $('.choice-next').on('click',function(){
        owl.trigger('next.owl.carousel');
    })
});


// result
let a = $(".result-navbar").height();
$(".result-main").css("top",a);