( function( $ ) {
 
    $( function() { // Ready
        'use strict';
        var options = {
            prefetch: true,
            cacheLength: 2,
            onStart: {
                duration: 2000,
                render: function ($container) {
                    // Add your CSS animation reversing class
                    $container.addClass('slide-out');
                    
                    // Restart your animation
                    smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    // Remove your CSS animation reversing class
                    $container.removeClass('slide-out');
                    
                    // Inject the new content
                    $container.html($newContent);
                    
                    }
                }
        },
        smoothState = $('#container').smoothState(options).data('smoothState');
        // var settings = { 
        //     anchors: 'a',
        //     onStart: {
        //         duration: 2000, // ms
        //         render: function ( $container ) {
        //             $container.addClass( 'slide-out' );
        //         }
        //     },
        //     onAfter: function( $container ) {
        //         $container.removeClass( 'slide-out' );
        //     }
        // };
 
        // $( '#container' ).smoothState( settings );
    } );
 
})( jQuery );