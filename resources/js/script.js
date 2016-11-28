$(document).ready(function() {

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

  // Fixed header setup
  $('#header').headroom({
    classes : {
      initial: "topnav",
      pinned: "topnav--pinned",
      unpinned: "topnav--unpinned",
      top: "",
      notTop: ""
    }
  });

  // SmoothScroll setup
  smoothScroll.init({
    selector: '[data-scroll]',
    selectorHeader: null,
    speed: 600,
    easing: 'easeInOutCubic'
  });

});
