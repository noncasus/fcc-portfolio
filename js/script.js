( function( $ ) {
 
    $( function() { // Ready
        'use strict';
        var settings = { 
            anchors: 'a',
            onStart: {
                duration: 20000, // ms
                render: function ( $container ) {
                    $container.addClass( 'slide-out' );
                }
            },
            onAfter: function( $container ) {
                $container.removeClass( 'slide-out' );
            }
        };
 
        $( '#container' ).smoothState( settings );
    } );
 
})( jQuery );