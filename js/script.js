( function( $ ) {
 
    $( function() { // Ready
        'use strict';
        var settings = { 
            anchors: 'a',
            onStart: {
                duration: 2000, // ms
                render: function ( $container ) {
                    $container.addClass( 'fade-out' );
                }
            },
            onAfter: function( $container ) {
                $container.removeClass( 'fade-out' );
            },
            debug:true
        };
 
        $( '#container' ).smoothState( settings );
    } );
 
})( jQuery );