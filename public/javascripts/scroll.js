/* jQuery: highlight active nav link on scroll */
$(document).ready(function(){
  var $sections = $('.scroll-container');

  $(window).scroll(function(){
    var currentScroll = $(this).scrollTop();
    var $currentSection;

    for (var i = $sections.length - 1; i >= 0; i--) {
      // divPosition is the position down the page in px of the current section
      var divPosition = $($sections[i])[0].offsetTop;
      var id;

      if (divPosition < currentScroll + window.innerHeight * .75) {
        $currentSection = $($sections[i]);
        id = $currentSection[0].id

        $('.header-link').removeClass('active animated pulse infinite');
        $("#"+id+"-link").addClass('active animated pulse infinite');

        $('.header-link-nav').removeClass('active-nav animated pulse infinite');
        $("#"+id+"-link-nav").addClass('active-nav animated pulse infinite');

        break; // break escapes loop before checking divs out of view
      };
    };

  });

});
