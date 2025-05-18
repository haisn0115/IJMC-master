(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);



  function showPopup(courseId) {
    var popup = document.getElementById('popup');
    var coursePopup = document.getElementById('popup-' + courseId);
    coursePopup.style.display = 'block';
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popup');
    var popups = document.getElementsByClassName('popup-content');
    for (var i = 0; i < popups.length; i++) {
        popups[i].style.display = 'none';
    }
    popup.style.display = 'none';
}