( function( $ ) {
 
    $( function() { // Ready
        'use strict';
        var settings = { 
            anchors: 'a',
            onStart: {
                duration: 2000, // ms
                render: function ( $container ) {
                    $container.toggleAnimationClass( 'fade-content' );
                }
            }
        };
 
        $( '#container' ).smoothState( settings );
    } );
 
})( jQuery );