
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//$(function() {
//	var totalCount = 3;
  // var num =  Math.ceil( Math.random() * totalCount );
//document.getElementsByTagName('header').background = 'img/catarina_'+num+'.jpg';
//document.getElementsByTagName('header').style.backgroundRepeat = "no-repeat";
//});


