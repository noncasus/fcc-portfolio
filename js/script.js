$(function(){
  'use strict';
  var options = {
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 700, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('site-content-out');

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('site-content-out');

        // Inject the new content
        $container.html($newContent);

      }
    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});