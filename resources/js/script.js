$(document).ready(function() {

  // SmoothScroll setuo
  smoothScroll.init();

  // Standard smoothState setup
  $(function(){
    'use strict';
    var $page = $('#main'),
        options = {
          debug: true,
          prefetch: true,
          cacheLength: 2,
          onStart: {
            duration: 250, // Duration of our animation
            render: function ($container) {
              // Add your CSS animation reversing class
              $container.addClass('is-exiting');
              // Restart your animation
              smoothState.restartCSSAnimations();
            }
          },
          onReady: {
            duration: 0,
            render: function ($container, $newContent) {
              // Remove your CSS animation reversing class
              $container.removeClass('is-exiting');
              // Inject the new content
              $container.html($newContent);
            }
          }
        },
        smoothState = $page.smoothState(options).data('smoothState');
  });

  // Hide main navigation menu on scroll
  $(document).scroll(function() {
    var y = $(this).scrollTop();
      if (y > ($('#hero').height() - 100)) {
        $('#header').slideUp(150);
      } else {
        $('#header').slideDown(150);
      }
  });

});
