$(function(){
  'use strict';
  var options = {
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 250, // Duration of animation
      render: function($container) {
        // Add CSS animation reversing class
        $container.addClass('is-exiting');

        // restart the animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function($container, $newContent) {
        // Remove CSS animation reversing class
        $container.removeClass('is-exiting');

        // Inject new content
        $container.html($newContent);
      }
    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});
