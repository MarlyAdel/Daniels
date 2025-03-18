/// <reference types="../@types/jquery"/>


//console.log($('#about').offset().top)

let aboutOffset = $('#about').offset().top;

$(window).on('scroll', function(){
    //console.log($(window).scrollTop());

    if($(window).scrollTop() > aboutOffset - 50){ 
       $('nav').addClass("scrolled shadow-sm")
       $('.logo').addClass("text-dark")
       $('.navbar-toggler').addClass("scrolled-toggler");
    } 
    else{
       $('nav').removeClass("scrolled shadow-sm")
        $('.logo').removeClass("text-dark")
        $('.navbar-toggler').removeClass("scrolled-toggler");
    }
})

//& Smooth Scrolling

$('.nav-link').on('click' , function(e){

   //console.log($(e.target).attr('href')) 
   let eleHref = $(e.target).attr('href'); 
   let secOffset = $(eleHref).offset().top;  
   $('body').animate({scrollTop : secOffset}, 1000)
})


//& aside Color
$('.mySpan').eq(1).css({backgroundColor : "yellow"});
$('.mySpan').eq(2).css({backgroundColor : "tomato"})
$('.mySpan').eq(3).css({backgroundColor : "lightgreen"})
$('.mySpan').eq(4).css({backgroundColor : "gray"})
$('.mySpan').eq(5).css({backgroundColor : "purple"})
$('.mySpan').eq(6).css({backgroundColor : "teal"})


$('.mySpan').on('click', function(e){
   $('h1,h2,h3,h4,h5').css({color : $(e.target).css('background-color')})
})

$('.icon').on('click', function(){
    $('.sideBar').animate({width: "toggle", paddingInline: "toggle" }, 1000)
})