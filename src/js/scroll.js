/* jQuery: highlight active nav link on scroll */
$(document).ready(function() {
    var $sections = $('.scroll-container');

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        var $currentSection;

        for (var i = $sections.length - 1; i >= 0; i--) {
            // divPosition is the position down the page in px of the current section
            var divPosition = $($sections[i])[0].offsetTop;
            var id;

            if (divPosition < currentScroll + window.innerHeight * .2) {
                $currentSection = $($sections[i]);
                id = $currentSection[0].id

                $('.header-link').removeClass('activeHeader');
                $("#" + id + "-link").addClass('activeHeader');

                $('.header-link-nav').removeClass('activeHeader');
                $("#" + id + "-link-nav").addClass('activeHeader');

                break; // break escapes loop before checking divs out of view
            };
        };

    });

});