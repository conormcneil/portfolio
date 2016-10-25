/* jQuery: highlight active nav link on scroll */
$(document).ready(function(){
  var $sections = $('.scroll-container');

  $(window).scroll(function(){
    var currentScroll = $(this).scrollTop();
    var $currentSection;

    $sections.each(function(){
      // divPosition is the position down the page in px of the current section
      var divPosition = $(this).offset().top;

      if( divPosition - 1 < currentScroll + window.innerHeight * .75 ){
        $currentSection = $(this);
      };

      if ($currentSection) {
        var id = $currentSection[0].id;
        $('.header-link').removeClass('active');
        $("#"+id+"-link").addClass('active');
      };

    });
      
  });

});
